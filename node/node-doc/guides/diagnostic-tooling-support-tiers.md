Diagnostic tooling support tiers
================================

Diagnostic tooling is important to the consumers of Node.js. It is used both in development and in production in order to investigate problems. The failure of one of these tools may be as big a problem for an end user as a bug within the runtime itself.

The Node.js project has assessed the tools and the APIs which support those tools. Each of the tools and APIs has been put into one of the following tiers.

-   Tier 1 - Must always be working(CI tests passing) for all Current and LTS Node.js releases. A release will not be shipped if the test suite for the tool/API is not green. To be considered for inclusion in this tier it must have a good test suite and that test suite and a job must exist in the Node.js CI so that it can be run as part of the release process. Tests on master will be run nightly when possible to provide early warning of potential issues. No commit to the current and LTS release branches should break this tool/API if the next major release is within 1 month. In addition:
    -   The maintainers of the tool must remain responsive when there are problems;
    -   The tool must be actively used by the ecosystem;
    -   The tool must be heavily depended on;
    -   The tool must have a guide or other documentation in the Node.js GitHub organization or website;
    -   The tool must be working on all supported platforms;
    -   The tool must only be using APIs exposed by Node.js as opposed to its dependencies; and
    -   The tool must be open source.
-   Tier 2 - Must be working(CI tests passing) for all LTS releases. An LTS release will not be shipped if the test suite for the tool/API is not green. To be considered for inclusion in this tier it must have a good test suite and that test suite and a job must exist in the Node.js CI so that it can be run as part of the release process. In addition:
    -   The maintainers of the tool must remain responsive when there are problems;
    -   The tool must be actively used by the ecosystem;
    -   The tool must be heavily depended on;
    -   The tool must have a guide or other documentation in the Node.js GitHub organization or website;
    -   The tool must be open source.
-   Tier 3 - If possible its test suite will be run at least nightly in the Node.js CI and issues opened for failures. Does not block shipping a release.

-   Tier 4 - Does not block shipping a release.

-   Unclassified - tool/API is new or does not have the required testing in the Node.js CI in order to qualify for a higher tier.

The choice of which tier a particular tool will be assigned to, will be a collaborative decision between Diagnostics WG and Release WG. Some of the criteria considered might be:

-   If the tool fits into a key category as listed below.
-   Whether the tool is actively used by the ecosystem.
-   The availability of alternatives.
-   Impact to the overall ecosystem if the tool is not working.
-   The availability of reliable test suite that can be integrated into our CI.
-   The availability of maintainer or community collaborator who will help resolve issues when there are CI failures.
-   If the tool is maintained by the Node.js Foundation GitHub organization.

The current categories of tools/APIs that fall under these Tiers are:

-   FFDC (F) - First failure data capture, easy to consume initial diagnostic information.
-   Tracing (T) - use of logging to provide information about execution flow.
-   Memory (M) - tools that provide additional information about memory used in the Heap or by native code.
-   Profiling (P) - tools that provide additional information about where CPU cycles are being spent.
-   AsyncFlow (A) - tools that provide additional insight into asynchronous execution flow.

Adding a tool to this list
--------------------------

Any tool that might be used to investigate issues when running Node.js can be added to the list. If there is a new tool that should be added to the list, it should start by being added to the “Not yet classified” or “Tier 4” lists. Once it has been added to the list “promotion” to Tier 3 through Tier 1 requires that the requirements listed above be met AND have agreement from Diagnostics WG and Release WG based on the criteria listed above.

Tiers
-----

The tools are currently assigned to Tiers as follows:

Tier 1
------

<table style="width:98%;"><colgroup><col style="width: 10%" /><col style="width: 25%" /><col style="width: 28%" /><col style="width: 23%" /><col style="width: 12%" /></colgroup><thead><tr class="header"><th>Tool Type</th><th>Tool/API Name</th><th>Regular Testing in Node.js CI</th><th>Integrated with Node.js</th><th>Target Tier</th></tr></thead><tbody><tr class="odd"><td>FFDC</td><td>diagnostic report</td><td>Yes</td><td>Yes</td><td>1</td></tr><tr class="even"><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Tier 2
------

<table style="width:97%;"><colgroup><col style="width: 11%" /><col style="width: 15%" /><col style="width: 32%" /><col style="width: 26%" /><col style="width: 13%" /></colgroup><thead><tr class="header"><th>Tool Type</th><th>Tool/API Name</th><th>Regular Testing in Node.js CI</th><th>Integrated with Node.js</th><th>Target Tier</th></tr></thead><tbody><tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Tier 3
------

<table style="width:99%;"><colgroup><col style="width: 9%" /><col style="width: 32%" /><col style="width: 26%" /><col style="width: 21%" /><col style="width: 11%" /></colgroup><thead><tr class="header"><th>Tool Type</th><th>Tool/API Name</th><th>Regular Testing in Node.js CI</th><th>Integrated with Node.js</th><th>Target Tier</th></tr></thead><tbody><tr class="odd"><td>Profiling</td><td>V8 CPU profiler</td><td>Partial (V8 Tests)</td><td>Yes</td><td>1</td></tr><tr class="even"><td>Profiling</td><td>–prof/–prof-process flags</td><td>Yes</td><td>Yes</td><td>1</td></tr><tr class="odd"><td>Profiling</td><td>V8 CodeEventHandler API</td><td>Partial (V8 Tests)</td><td>Yes</td><td>2</td></tr><tr class="even"><td>Profiling</td><td>V8 –interpreted-frames-native-stack</td><td>Yes</td><td>Yes</td><td>2</td></tr><tr class="odd"><td>Profiling</td><td>Linux perf</td><td>Yes</td><td>Partial</td><td>2</td></tr></tbody></table>

Tier 4
------

<table style="width:97%;"><colgroup><col style="width: 11%" /><col style="width: 15%" /><col style="width: 32%" /><col style="width: 26%" /><col style="width: 13%" /></colgroup><thead><tr class="header"><th>Tool Type</th><th>Tool/API Name</th><th>Regular Testing in Node.js CI</th><th>Integrated with Node.js</th><th>Target Tier</th></tr></thead><tbody><tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Not yet classified
------------------

<table style="width:98%;"><colgroup><col style="width: 10%" /><col style="width: 25%" /><col style="width: 28%" /><col style="width: 23%" /><col style="width: 12%" /></colgroup><thead><tr class="header"><th>Tool Type</th><th>Tool/API Name</th><th>Regular Testing in Node.js CI</th><th>Integrated with Node.js</th><th>Target Tier</th></tr></thead><tbody><tr class="odd"><td>FFDC</td><td>node-report</td><td>No</td><td>No</td><td>1</td></tr><tr class="even"><td>Memory</td><td>mdb_V8</td><td>No</td><td>No</td><td>4</td></tr><tr class="odd"><td>Memory</td><td>node-heapdump</td><td>No</td><td>No</td><td>2</td></tr><tr class="even"><td>Memory</td><td>V8 heap profiler</td><td>No</td><td>Yes</td><td>1</td></tr><tr class="odd"><td>Memory</td><td>V8 sampling heap profiler</td><td>No</td><td>Yes</td><td>1</td></tr><tr class="even"><td>AsyncFlow</td><td>Async Hooks (API)</td><td>?</td><td>Yes</td><td>1</td></tr><tr class="odd"><td>Debugger</td><td>V8 Debug protocol (API)</td><td>No</td><td>Yes</td><td>1</td></tr><tr class="even"><td>Debugger</td><td>Command line Debug Client</td><td>?</td><td>Yes</td><td>1</td></tr><tr class="odd"><td>Debugger</td><td>llnode</td><td>?</td><td>No</td><td>2</td></tr><tr class="even"><td>Debugger</td><td>Chrome Dev tools</td><td>?</td><td>No</td><td>3</td></tr><tr class="odd"><td>Debugger</td><td>Chakracore - time-travel</td><td>No</td><td>Data source only</td><td>too early</td></tr><tr class="even"><td>Tracing</td><td>trace_events (API)</td><td>No</td><td>Yes</td><td>1</td></tr><tr class="odd"><td>Tracing</td><td>DTrace</td><td>No</td><td>Partial</td><td>3</td></tr><tr class="even"><td>Tracing</td><td>LTTng</td><td>No</td><td>Removed?</td><td>N/A</td></tr><tr class="odd"><td>Tracing</td><td>ETW</td><td>No</td><td>Partial</td><td>3</td></tr><tr class="even"><td>Tracing</td><td>Systemtap</td><td>No</td><td>Partial</td><td>?</td></tr><tr class="odd"><td>Profiling</td><td>DTrace</td><td>No</td><td>Partial</td><td>3</td></tr><tr class="even"><td>Profiling</td><td>Windows Xperf</td><td>No</td><td>?</td><td>?</td></tr><tr class="odd"><td>Profiling</td><td>0x</td><td>No</td><td>No</td><td>4</td></tr><tr class="even"><td>Profiling</td><td>node-clinic</td><td>No</td><td>No</td><td>too early</td></tr><tr class="odd"><td>F/P/T</td><td>appmetrics</td><td>No</td><td>No</td><td>?</td></tr><tr class="even"><td>M/T</td><td>eBPF tracing tool</td><td>No</td><td>No</td><td>?</td></tr></tbody></table>
