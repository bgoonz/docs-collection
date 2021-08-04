--- title: First-class Function slug: Glossary/First-class_Function tags: - CodingScripting - Glossary - JavaScript ---

A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Example | Assign a function to a variable

### JavaScript

    const foo = function() {
       console.log("foobar");
    }
    // Invoke it using the variable
    foo();

We assigned an **Anonymous Function** in a {{glossary("Variable")}}, then we used that variable to invoke the function by adding parentheses `()` at the end.

**Even if your function was named,** you can use the variable name to invoke it. Naming it will be helpful when debugging your code. _But it won't affect the way we invoke it._

## Example | Pass a function as an Argument

### JavaScript

    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    // Pass `sayHello` as an argument to `greeting` function
    greeting(sayHello, "JavaScript!");

We are passing our `sayHello()` function as an argument to the `greeting()` function, this explains how we are treating the function as a **value**.

The function that we pass as an argument to another function, is called a **{{glossary("Callback function")}}**. _`sayHello` is a Callback function._

## Example | Return a function

### JavaScript

    function sayHello() {
       return function() {
          console.log("Hello!");
       }
    }

In this example; We need to return a function from another function - _We can return a function because we treated function in JavaScript as a **value**._

A function that returns a function is called a **Higher-Order Function**.

Back to our example; Now, we need to invoke `sayHello` function and its returned `Anonymous Function`. To do so, we have two ways:

### 1- Using a variable

    const sayHello = function() {
       return function() {
          console.log("Hello!");
       }
    }
    const myFunc = sayHello();
    myFunc();

This way, it returns the `Hello!` message.

You have to use another variable. If you invoked `sayHello` directly, it would return the function itself **without invoking its returned function**.

### 2- Using double parentheses

    function sayHello() {
       return function() {
          console.log("Hello!");
       }
    }
    sayHello()();

We are using double parentheses `()()` to invoke the returned function as well.

1.  {{Interwiki("wikipedia", "First-class\_function", "First-class functions")}} on Wikipedia
2.  [MDN Web Docs Glossary](/en-US/docs/Glossary)
    - {{glossary("Callback function")}}
    - {{glossary("Function")}}
    - {{glossary("Variable")}}
