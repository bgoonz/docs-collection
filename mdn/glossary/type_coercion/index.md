--- title: Type coercion slug: Glossary/Type\_coercion tags: - Coercion - JavaScript - Type coercion ---

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). *{{Glossary("Type conversion")}}* is similar to *type coercion* because they both convert values from one data type to another with one key difference — *type coercion* is implicit whereas *type conversion* can be either implicit *or* explicit.

Examples
--------

    const value1 = '5';
    const value2 = 9;
    let sum = value1 + value2;

    console.log(sum);

In the above example, JavaScript has *coerced* the `9` from a number into a string and then concatenated the two values together, resulting in a string of `59`. JavaScript had a choice between a string or a number and decided to use a string.

The compiler could have coerced the `5` into a number and returned a sum of `14`, but it did not. To return this result, you'd have to explicitly convert the `5` to a number using the {{jsxref("Global\_Objects/Number", "Number()")}} method:

    sum = Number(value1) + value2;

1.  [Glossary](/en-US/docs/Glossary)
    1.  {{Glossary("Type")}}
    2.  {{Glossary("Type conversion")}}
2.  Wikipedia article
    1.  {{Interwiki("wikipedia", "Type conversion")}}
