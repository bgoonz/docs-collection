--- title: jQuery slug: Glossary/jQuery tags: - Glossary - JQuery - JavaScript ---

<span class="seoSummary">**jQuery** is a {{Glossary("JavaScript")}} {{Glossary("Library")}} that focuses on simplifying {{Glossary("DOM")}} manipulation, {{Glossary("AJAX")}} calls, and {{Glossary("Event")}} handling.</span>

jQuery uses a format, `$(selector).action()` to assign an element(s) to an event. To explain it in detail, `$(selector)` will call jQuery to select `selector` element(s), and assign it to an event {{Glossary("API")}} called `.action()`.

    $(document).ready(function(){
      alert("Hello World!");
      $("#blackBox").hide();
    });

The above code carries out the same function as the following code:

    window.onload = function() {
      alert("Hello World!");
      document.getElementById("blackBox").style.display = "none";
    };

Or:

    window.addEventListener("load", () => {
      alert("Hello World!");
      document.getElementById("blackBox").style.display = "none";
    });

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "jQuery")}} on Wikipedia
- [jQuery Official Website](https://jquery.com/)

### Technical information

- [Official API reference documentation](https://api.jquery.com/) [](https://api.jquery.com/)
