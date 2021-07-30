--- title: Long task slug: Glossary/Long\_task tags: - Glossary - Long Tasks API - Reference - Web Performance ---

<span class="seoSummary">A **long task**  is a task that takes more than 50ms to complete.</span> It is an uninterrupted period where the [main UI thread](/en-US/docs/Glossary/Main_thread) is busy for 50 ms or longer. Common examples include long running event handlers, expensive [reflows](/en-US/docs/Glossary/Reflow) and other re-renders, and work the browser does between different turns of the event loop that exceeds 50 ms.

See also
--------

-   [Long task API](/en-US/docs/Web/API/Long_Tasks_API)
