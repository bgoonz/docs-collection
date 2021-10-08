---json {"title":"NaCl SFI model on x86-64 systems"} ---

{% include 'partials/nacl-warning.njk' %}

------------------------------------------------------------------------

-   <a href="#summary" id="id5" class="reference internal">Summary</a>
-   <a href="#binary-format" id="id6" class="reference internal">Binary Format</a>
-   <a href="#runtime-invariants" id="id7" class="reference internal">Runtime Invariants</a>
-   <a href="#text-segment-rules" id="id8" class="reference internal">Text Segment Rules</a>
-   <a href="#list-of-pseudo-instructions" id="id9" class="reference internal">List of Pseudo-instructions</a>

Summary
-------

This document addresses the details of the Software Fault Isolation (SFI) model for executable code that can be run in Native Client on an x86-64 system. An overview of this model can be found in the paper: <a href="https://research.google.com/pubs/archive/35649.pdf" class="reference external">Adapting Software Fault Isolation to Contemporary CPU Architectures</a>. The primary focus of the SFI model is a Windows x86-64 system but the same techniques can be applied to run identical x86-64 binaries on other x86-64 systems such as Linux, Mac, FreeBSD, etc, so the description of the SFI model tries to abstract away system dependencies when possible.

Please note: throughout this document we use the AT&T notation for assembler syntax, in which the target operand appears last, e.g. `mov src, dst`.

Binary Format
-------------

The format of Native Client executable binaries is identical to the x86-64 ELF binary format (<a href="http://en.wikipedia.org/wiki/Executable_and_Linkable_Format" class="reference external">[0]</a>, <a href="http://www.sco.com/developers/devspecs/gabi41.pdf" class="reference external">[1]</a>, <a href="http://www.sco.com/developers/gabi/latest/contents.html" class="reference external">[2]</a>, <a href="http://downloads.openwatcom.org/ftp/devel/docs/elf-64-gen.pdf" class="reference external">[3]</a>) for Linux or BSD with a few extra requirements. The additional rules that a Native Client ELF binary must follow are:

-   The ELF magic OS ABI field must be 123.
-   The ELF magic OS ABI VERSION field must be 5.
-   The ELF e\_flags field must be 0x200000 (32-byte alignment).
-   There must be exactly one PT\_LOAD text segment. It must begin at 0x20000 (128 kB) and be marked RX (no W). The contents of the text segment must follow <a href="#x86-64-text-segment-rules" class="reference internal"><em>Text Segment Rules</em></a>.
-   There can be at most one PT\_LOAD data segment marked R.
-   There can be at most one PT\_LOAD data segment marked RW.
-   There can be at most one PT\_GNU\_STACK segment. It must be marked RW.
-   All segments must end before limit address (4 GiB).

Runtime Invariants
------------------

To ensure fault isolation at runtime, the system must maintain a number of runtime *invariants* across the lifetime of the running program. Both the *Validator* and the *Service Runtime* are responsible for maintaining the invariants. See the paper for the rationale for the invariants:

-   `RIP` always points to valid instruction boundary (the validator must ensure this with direct jumps and direct calls).
-   `R15` (aka `RBASE` and `RZP`) is never modified by code (the validator must ensure this). Low 32 bits of `RZP` are all zero (loader must ensure this).
-   `RIP`, `RBP` and `RSP` are always in the **safe zone**: between `R15` and `R15+4GiB`.

-   Exception: `RSP` and `RBP` are allowed to be in the range of `0..4GiB` inside *pseudo-instructions*: `naclrestbp`, `naclrestsp`, `naclspadj`, `naclasp`, `naclssp`.

-   84GiB are allocated for NaCl module (i.e. **untrusted region**):

-   `R15-40GiB..R15` and `R15+4GIB..R15+44GiB` are buffer zones with PROT\_NONE flags.
-   The 4GB *safe zone* has pages with either PROT\_WRITE or PROT\_EXEC but must not have PROT\_WRITE+PROT\_EXEC pages.
-   All executable code in PROT\_EXEC pages is validatable and guaranteed to obey the invariant.

-   Trampoline/springboard code is mapped to a non-writable region in the *untrusted 84GB region*; each trampoline/springboard is 32-byte aligned and fits within a single *bundle*.
-   The OS must not put any internal structures/code into the untrusted region at any time (not using OS dynamic linker, etc)

<span id="x86-64-text-segment-rules"></span>Text Segment Rules
--------------------------------------------------------------

-   The validation process must ensure that the text segment complies with the following rules. The validation process must complete successfully strictly before executing any instruction of the untrusted code.
-   The following instructions are illegal and must be rejected by the validator (the list is not exhaustive as the validator uses a whiteist, not a blacklist; this means there is a large but finite list of instructions the validator allows, not a small list of instructions the validator rejects):

-   any privileged instructions
-   `mov` to/from segment registers
-   `int`
-   `pusha`/`popa` (not dangerous but not needed for GCC)

-   There must be space for at least 32 bytes after the text segment and before the next segment in ELF (towards higher addresses) that ends strictly at a 64K boundary (a minimum page size for untrusted code). This space will be padded with HLT instructions as part of the validation process, along with the optional 64K page.
-   Neither instructions nor *pseudo-instructions* are permitted to span a 32-byte boundary.
-   The ELF entry address must be 32-byte aligned.
-   Direct `CALL`/`JUMP` targets:

-   must point to a valid instruction boundary
-   must not point into a *pseudo-instruction*
-   must not point between a *restricted register* (see below for definition) producer instruction and its corresponding restricted register consumer instruction.

-   `CALL` instructions must be 5 bytes before a 32-byte boundary, so that the return address will be 32-byte aligned.
-   Indirect call targets must be 32-byte aligned. Instead of indirect `CALL`/`JMP` x, use `nacljmp` and `naclcall` (see below for definitions of these *pseudo-instructions*)
-   All instructions that **read** or **write** from/to memory must use one of the four registers `RZP`, `RIP`, `RBP` or `RSP` as a base, restricted (see below) register index (multiplied by 0, 1, 2, 4 or 8) and constant displacement (optional).

-   Exception to this rule: string instructions are allowed if used in following sequences (the sequences should not cross *bundle* boundaries; segment overrides are disallowed):

         mov %edi, %edi
         lea (%rZP,%rdi),%rdi
         [rep] stos  ; other string instructions can be used here

    Note: this is identical to the *pseudo-instruction*: `[rep] stos %?ax, %nacl:(%rdi),%rZP`

-   An operand of a command is said to be a **restricted register** iff it is a register that is the target of a 32-bit move in the immediately-preceding command in the same *bundle* (consider the previous command as additional sandboxing prefix):

     ; any 32-bit register can be used here; the first operand is
     ; unrestricted but often is the same register
     mov ..., %eXX

-   Instructions capable of changing `%RBP` and `%RSP` are forbidden, except the instruction sequences in the whitelist below, which must not cross *bundle* boundaries:

     mov %rbp, %rsp
     mov %rsp, %rbp
     mov ..., %ebp
     ; restoration of %RBP from memory, register or stack - keeps the
     ; invariant intact
     add %rZP, %rbp
     mov ..., %esp
     ; restoration of %RSP from memory, register or stack - keeps the
     ; invariant intact
     add %rZP, %rsp
     lea xxx(%rbp), %esp
     add %rZP, %rsp  ; restoration of %RSP from %RBP with adjust
     sub ..., %esp
     add %rZP, %rsp  ; stack space allocation
     add ..., %esp
     add %rZP, %rsp  ; stack space deallocation
     and $XX, %rsp  ; alignment; XX must be between -128 and -1
     pushq ...
     popq ...  ; except pop %RSP, pop %RBP

List of Pseudo-instructions
---------------------------

Pseudo-instructions were introduced to let the compiler maintain the invariants without needing to know the code alignment rules. The assembler guarantees 32-bit alignment for all *pseudo-instructions* in the table below. In addition, to the pseudo-instructions, one pseudo-operand prefix is introduced: `%nacl`. Presence of the `%nacl` operand prefix ensures that:

-   The instruction `"%mov %eXX, %eXX"` is added immediately before the actual command using prefix `%nacl` (where `%eXX` is a 32-bit part of the index register of the actual command, for example: in operand `%nacl:(,%r11)`, the notation `%eXX` is referring to `%r11d`)
-   The resulting sequence of two instructions does not cross the *bundle* boundary.

For example, the instruction:

    mov %eax,%nacl:(%r15,%rdi,2)

is translated by the assembler to:

    mov %edi,%edi
    mov %eax,(%r15,%rdi,2)

The complete list of introduced *pseudo-instructions* is as follows:

<table><tbody><tr class="odd"><td>Pseudo-instruction</td><td>Is translated to<br />
</td></tr><tr class="even"><td>[rep] cmps %nacl:(%rsi),%nacl:(%rdi),%rZP<br />
<em>(sandboxed cmps)</em><br />
</td><td>mov %esi,%esi<br />
lea (%rZP,%rsi,1),%rsi<br />
mov %edi,%edi<br />
lea (%rZP,%rdi,1),%rdi<br />
[rep] cmps (%rsi),(%rdi)<em><br />
</em></td></tr><tr class="odd"><td>[rep] movs %nacl:(%rsi),%nacl:(%rdi),%rZP<br />
<em>(sandboxed movs)</em><br />
</td><td>mov %esi,%esi<br />
lea (%rZP,%rsi,1),%rsi<br />
mov %edi,%edi<br />
lea (%rZP,%rdi,1),%rdi<br />
[rep] movs (%rsi),(%rdi)<em><br />
</em></td></tr><tr class="even"><td>naclasp ...,%rZP<br />
<em>(sandboxed stack increment)</em></td><td>add ...,%esp<br />
add %rZP,%rsp</td></tr><tr class="odd"><td>naclcall %eXX,%rZP<br />
<em>(sandboxed indirect call)</em></td><td>and $-32, %eXX<br />
add %rZP, %rXX<br />
call *%rXX<br />
<em>Note: the assembler ensures all calls (including naclcall) will end at the bundle boundary.</em></td></tr><tr class="even"><td>nacljmp %eXX,%rZP<br />
<em>(sandboxed indirect jump)</em></td><td>and $-32,%eXX<br />
add %rZP,%rXX<br />
jmp *%rXX<br />
</td></tr><tr class="odd"><td>naclrestbp ...,%rZP<br />
<em>(sandboxed %ebp/rbp restore)</em></td><td>mov ...,%ebp<br />
add %rZP,%rbp</td></tr><tr class="even"><td>naclrestsp ...,%rZP <em>(sandboxed %esp/rsp restore)</em></td><td>mov ...,%esp<br />
add %rZP,%rsp</td></tr><tr class="odd"><td>naclrestsp_noflags ...,%rZP <em>(sandboxed %esp/rsp restore)</em></td><td>mov ...,%esp<br />
lea (%rsp,%rZP,1),%rsp</td></tr><tr class="even"><td>naclspadj $N,%rZP<br />
<em>(sandboxed %esp/rsp restore from %rbp; incudes $N offset)</em></td><td>lea N(%rbp),%esp<br />
add %rZP,%rsp</td></tr><tr class="odd"><td>naclssp ...,%rZP<br />
<em>(sandboxed stack decrement)</em></td><td>sub ...,%esp<br />
add %rZP,%rsp</td></tr><tr class="even"><td>[rep] scas %nacl:(%rdi),%?ax,%rZP<br />
<em>(sandboxed stos)</em></td><td>mov %edi,%edi<br />
lea (%rZP,%rdi,1),%rdi<br />
[rep] scas (%rdi),%?ax<br />
</td></tr><tr class="odd"><td>[rep] stos %?ax,%nacl:(%rdi),%rZP<br />
<em>(sandboxed stos)</em></td><td>mov %edi,%edi<br />
lea (%rZP,%rdi,1),%rdi<br />
[rep] stos %?ax,(%rdi)<br />
</td></tr></tbody></table>
