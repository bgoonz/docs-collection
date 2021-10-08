---json {"title":"Design Documents"} ---

{% include 'partials/nacl-warning.njk' %}

------------------------------------------------------------------------

This is a list of design documents for Native Client. This list generally covers designs that were implemented. It does not cover PPAPI (Pepper).

Dynamic loading and linking:

-   <a href="http://code.google.com/p/nativeclient/wiki/DynamicLoadingOptions" class="reference external">Dynamic loading: Options for supporting dynamic loading, and how they interact with dynamic libraries</a> (2010)

Handling faults (hardware exceptions) in untrusted code:

-   <a href="https://docs.google.com/a/chromium.org/document/d/1T2KQitbOBz_ALQtr4ONcZcSNCIKNla3DI7t6dMcx5AE/edit" class="reference external">NaCl untrusted fault handling: guide to the implementation</a>

Sandbox security on Windows:

-   <a href="https://src.chromium.org/viewvc/native_client/trunk/src/native_client/documentation/windows_ntdll_patch.txt?revision=HEAD" class="reference external">Native Client’s NTDLL patch on x86-64 Windows</a> (2012)

Debugging using GDB:

-   <a href="https://docs.google.com/a/chromium.org/document/d/1OtVmgJFC7X7aa57DnyiL4V10vAVax_vcRJp4Mw86lIU/edit" class="reference external">Providing a GDB debug stub integrated into native_client</a> (2012). This was the main design doc for NaCl’s GDB debug stub.
-   <a href="https://docs.google.com/a/google.com/document/d/1tu2FEA4EKhBH669iUgRZBDBcEd6jzNQ-0OVn9JI4_qk/edit" class="reference external">Native Client Support for Debugging, Crash Reporting and Hardware Exception Handling – high level design</a> (Jan 2012)
-   <a href="https://docs.google.com/a/chromium.org/document/d/19qkl5R4lg-AIDf648Ml-gLRq6eZscjvvdMNWkVu2wLk/edit" class="reference external">NaCl: three kinds of crash handling</a> (2012). This is an earlier document. It contains notes on trusted vs. untrusted crash handling, vs. GDB support.

PNaCl:

-   <a href="https://docs.google.com/a/google.com/document/d/1xUlWyXnaRnIUBnmKdOBkgq2O9OqfvaRBLaz82pNdKt0/edit" class="reference external">Stability of the PNaCl bitcode ABI</a> (2013). This is an overview of ABI stability issues and the features of LLVM IR that PNaCl is removing.
-   <a href="https://docs.google.com/a/chromium.org/document/d/1HvZJVwS9KeTc0jUvoQjbLapRbStHk3mZ0rPDUHNN96Y/edit" class="reference external">Incrementally simplifying the PNaCl bitcode format</a> (2013)
-   <a href="https://docs.google.com/a/chromium.org/document/d/1Bub1bV_IIDZDhdld-zTULE2Sv0KNbOXk33KOW8o0aR4/edit" class="reference external">SJLJ EH: C++ exception handling in PNaCl using setjmp()+longjmp()</a> (2013)

Security hardening:

-   <a href="https://docs.google.com/a/chromium.org/document/d/1eskaI4353XdsJQFJLRnZzb_YIESQx4gNRzf31dqXVG8/edit" class="reference external">Hiding PNaCl’s x86-64 sandbox base address</a> (2013). This was part of the security hardening we did for enabling PNaCl on the open web.

MIPS support:

-   <a href="https://code.google.com/p/nativeclient/issues/attachmentText?id=2275&amp;aid=22750018000&amp;name=native-client-mips-0.4.txt" class="reference external">Design for the NaCl MIPS sandbox</a> (2012)

Cleanup work:

-   <a href="https://docs.google.com/a/chromium.org/document/d/1lycqf4yPMC84011yvuyO_50V8c8COQ8dAe5rNvbeB9o/edit" class="reference external">Removing NaCl’s dependency on Chromium</a> (2012)

DEPS rolls:

-   <a href="https://docs.google.com/a/chromium.org/document/d/1jHoLo9I3CCS1_-4KlIq1OiEMv9cmMuXES2Z9JVpmPtY/edit" class="reference external">Semi-automated NaCl DEPS rolls: Updates to nacl_revision field in Chromium’s DEPS file</a> (2013). This is a description of current practice rather than a design doc.

Obsolete (not implemented)
--------------------------

PNaCl multi-threading support: The following proposals do not reflect what was implemented in PNaCl in the end. They are listed here for historical reference.

-   <a href="https://docs.google.com/a/chromium.org/document/d/1HcRiGOaaPLk7pQrGnjXceoM7Px3IwOjjwdiVvJVQNr4/edit" class="reference external">Multi-threading support for a first release of PNaCl</a> (2013): Proposal for mutex\_v2/cond\_v2 IRT interfaces.
-   <a href="https://docs.google.com/a/chromium.org/document/d/1HcRiGOaaPLk7pQrGnjXceoM7Px3IwOjjwdiVvJVQNr4/edit" class="reference external">Explicit vs. implicit atomicity guarantees in PNaCl</a> (2013): Discussion about how to handle atomic memory operations.
