--- title: CSRF slug: Glossary/CSRF tags: - Glossary - Security ---

<span class="seoSummary">**CSRF** (Cross-Site Request Forgery) is an attack that impersonates a trusted user and sends a website unwanted commands.</span> This can be done, for example, by including malicious parameters in a {{glossary("URL")}} behind a link that purports to go somewhere else:

    <img src="https://www.example.com/index.php?action=delete&id=123">

For users who have modification permissions on `https://www.example.com`, the `<img>` element executes action on `https://www.example.com` without their noticing, even if the element is not at `https://www.example.com`.

There are many ways to prevent CSRF, such as implementing {{glossary("REST", "RESTful API")}}, adding secure tokens, etc.

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "Cross-site request forgery")}} on Wikipedia
- [Prevention measures](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
