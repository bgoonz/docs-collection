---
title: About code scanning
intro: 'You can use {% data variables.product.prodname_code_scanning %} to find security vulnerabilities and errors in the code for your project on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  ghes: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
---
<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can use {% data variables.product.prodname_code_scanning %} to find, triage, and prioritize fixes for existing problems in your code. {% data variables.product.prodname_code_scanning_capc %} also prevents developers from introducing new problems. You can schedule scans for specific days and times, or trigger scans when a specific event occurs in the repository, such as a push.

If {% data variables.product.prodname_code_scanning %} finds a potential vulnerability or error in your code, {% data variables.product.prodname_dotcom %} displays an alert in the repository. After you fix the code that triggered the alert, {% data variables.product.prodname_dotcom %} closes the alert. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

To monitor results from {% data variables.product.prodname_code_scanning %} across your repositories or your organization, you can use webhooks and the {% data variables.product.prodname_code_scanning %} API. For information about the webhooks for {% data variables.product.prodname_code_scanning %}, see 
"[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)." For information about API endpoints, see  "[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)." 

To get started with {% data variables.product.prodname_code_scanning %}, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)."

## About {% data variables.product.prodname_codeql %}

You can use {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}, a semantic code analysis engine. {% data variables.product.prodname_codeql %} treats code as data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers. 

{% data variables.product.prodname_ql %} is the query language that powers {% data variables.product.prodname_codeql %}. {% data variables.product.prodname_ql %} is an object-oriented logic programming language. {% data variables.product.company_short %}, language experts, and security researchers create the queries used for {% data variables.product.prodname_code_scanning %}, and the queries are open source. The community maintains and updates the queries to improve analysis and reduce false positives. For more information, see [{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql) on the GitHub Security Lab website.

{% data variables.product.prodname_code_scanning_capc %} with {% data variables.product.prodname_codeql %} supports both compiled and interpreted languages, and can find vulnerabilities and errors in code that's written in the supported languages.

{% data reusables.code-scanning.codeql-languages-bullets %}

You can view and contribute to the queries for {% data variables.product.prodname_code_scanning %} in the [`github/codeql`](https://github.com/github/codeql) repository. For more information, see [{% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/) in the {% data variables.product.prodname_codeql %} documentation.

## About third-party code scanning tools

{% data reusables.code-scanning.you-can-upload-third-party-analysis %}

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

{% data reusables.code-scanning.get-started-uploading-third-party-data %}

## Further reading

- [{% data variables.product.prodname_security %}](https://securitylab.github.com/)
- [OASIS Static Analysis Results Interchange Format (SARIF) TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=sarif) on the OASIS Committee website
