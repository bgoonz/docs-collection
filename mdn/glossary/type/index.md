--- title: Type slug: Glossary/Type tags: - CodingScripting - Glossary - JavaScript ---

**Type** is a characteristic of a {{glossary("value")}} affecting what kind of data it can store, and the structure that the data will adhere to. For example, a {{jsxref("Boolean")}} [Data Type](/en-US/docs/Web/JavaScript/Data_structures) can hold only a `true` or `false` value at any given time, whereas a {{jsxref("String")}} has the ability to hold a string or a sequence of characters, a {{jsxref("Number")}} can hold numerical values of any kind, and so on.

A value's data type also affects the operations that are valid on that value. For example, a value of type number can be multiplied by another number, but not by a string - even if that string contains *only* a number, such as the string "2".

Types also provides us with useful knowledge about the comparison between different values. Comparison between structured types is not always an easy assumption, as even if the previous data structure is the same, there could be inherited structures inside of the [Prototype Chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

If you are unsure of the type of a value, you can use the [typeof](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator.

1.  [Glossary](/en-US/docs/Glossary)
    1.  {{Glossary("JavaScript")}}
    2.  {{Glossary("string")}}
    3.  {{Glossary("number")}}
    4.  {{Glossary("bigint")}}
    5.  {{Glossary("boolean")}}
    6.  {{Glossary("null")}}
    7.  {{Glossary("undefined")}}
    8.  {{Glossary("symbol")}}
2.  {{Interwiki("wikipedia", "Data type")}} on Wikipedia
3.  [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
