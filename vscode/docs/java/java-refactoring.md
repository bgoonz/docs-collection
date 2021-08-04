# Java refactoring and Source Actions

Visual Studio Code provide many options to refactor your source code as well as Source Actions to generate code and fix issues while you’re coding. To access them, click on the `light bulb` 💡 whenever you see it. Or right-click the editor view and pick **Source Action…**.

## Refactoring

The goal of the Java program refactoring is to make system-wide code changes without affecting behavior of the program. The Java Language Support for VS Code provides a lot of easily accessible refactoring options.

### Invoke refactoring

Refactoring commands are available from the context menu of the editor. Select the element you want to refactor, right-click to open the context menu and choose `Refactor...`:

![Invoke Refactoring](images/java-refactoring/refactoring_menu.png)

Then you will see all the available refactoring options.

### List of Supported Code Actions

- [Assign to variable](#assign-to-variable)
- [Change modifiers to final](#change-modifiers-to-final)
- [Convert anonymous to nested class](#convert-anonymous-to-nested-class)
- [Convert to anonymous class creation](#convert-to-anonymous-class-creation)
- [Convert to enhanced for loop](#convert-to-enhanced-for-loop)
- [Convert to lambda expression](#convert-to-lambda-expression)
- [Convert to static import](#convert-to-static-import)
- Extract refactorings
  - [Extract to constant](#extract-to-constant)
  - [Extract to field](#extract-to-field)
  - [Extract to method](#extract-to-method)
  - [Extract to local variable](#extract-to-local-variable)
- Inline refactorings
  - [Inline constant](#inline-constant)
  - [Inline local variable](#inline-local-variable)
  - [Inline method](#inline-method)
- Invert boolean
  - [Invert conditions](#invert-conditions)
  - [Invert local variable](#invert-local-variable)
- [Move](#move)
- [Rename](#rename)
- Type change
  - [Change resolved type to var type](#change-resolved-type-to-var-type)
  - [Change var type to resolved type](#change-var-type-to-resolved-type)

### Assign to variable

Assigns an expression to a local variable or a field.

#### Example

##### Before

    Arrays.asList("apple", "lemon", "banana");

##### After

    List<String> fruits = Arrays.asList("apple", "lemon", "banana");

It can also be used to assigns a parameter to a new field for unused parameter(s) in a constructor.

### Change modifiers to final

Adds `final` modifier to all the variables and parameters in the current source file.

#### Example

##### Before

    public class Clazz {
      public void method(int value) {
        boolean notValid = value > 5;
        if (notValid) {
          // do something
        }
      }
    }

##### After

    public class Clazz {
      public void method(final int value) {
        final boolean notValid = value > 5;
        if (notValid) {
          // do something
        }
      }
    }

### Convert anonymous to nested class

Converts an anonymous inner class to a member class.

#### Example

Let’s convert the anonymous class `Interface(){...}` to a member of the class `Clazz`.

##### Before

    public class Clazz {
      public Interface method() {
        final boolean isValid = true;
        return new Interface() {
          public boolean isValid() {
            return isValid;
          }
        };
      }
    }

##### After

    public class Clazz {
      private final class MyInterface extends Interface {
        private final boolean isValid;

        private MyInterface(boolean isValid) {
          this.isValid = isValid;
        }

        public boolean isValid() {
          return isValid;
        }
      }

      public Interface method() {
        final boolean isValid = true;
        return new MyInterface(isValid);
      }
    }

### Convert to anonymous class creation

Converts lambda expression to anonymous class creation.

#### Example

The variable `runnable` is assigned with a lambda expression. Let’s convert it to an anonymous class creation.

##### Before

    public void method() {
      Runnable runnable = () -> {
        // do something
      };
    }

##### After

    public void method() {
      Runnable runnable = new Runnable() {
        @Override
        public void run() {
          // do something
        }
      };
    }

> Also see: [Convert to lambda expression](#convert-to-lambda-expression)

### Convert to enhanced for loop

Converts the simple `for` loop to `for-each` style.

#### Example

##### Before

    public void order(String[] books) {
      for (int i = 0; i < books.length; i++) {
        // do something
      }
    }

##### After

    public void order(String[] books) {
      for (String book : books) {
        // do something
      }
    }

### Convert to lambda expression

Converts an anonymous class creation to the lambda expression.

#### Example

Let’s convert the anonymous class `Runnable(){...}` to a lamda expression.

##### Before

    public void method() {
      Runnable runnable = new Runnable(){
        @Override
        public void run() {
          // do something
        }
      };
    }

##### After

    public void method() {
        Runnable runnable = () -> {
          // do something
        };
      }

> Also see: [Convert to anonymous class creation](#convert-to-anonymous-class-creation)

### Convert to static import

Converts the field or method to static import.

#### Example

Let’s transform the `Assert.assertEquals()` invocation to a static import.

##### Before

    import org.junit.Assert;
    ...
    public void test() {
      Assert.assertEquals(expected, actual);
    }

##### After

    import static org.junit.Assert.assertEquals;
    ...
    public void test() {
      assertEquals(expected, actual);
    }

### Extract to constant

Creates a static final field from the selected expression and substitutes a field reference, then rewrites other places where the same expression occurs.

#### Examples

Let’s extract the value of π: `3.14` to a constant.

##### Before

    public double getArea(double r) {
      return 3.14 * r * r;
    }

##### After

    private static final double PI = 3.14;

    public double getArea(double r) {
      return PI * r * r;
    }

> Also see: [Inline constant](#inline-constant)

### Extract to field

Declares a new field and initializes it with the selected expression. The original expression is replaced with the usage of the field.

#### Examples

Let’s extract the variable `area` to a field of the class `Square`.

##### Before

    class Square {
      public void calculateArea() {
        int height = 1;
        int width = 2;
        int area = height * width;
      }
    }

##### After

    class Square {
      private int area;

      public void calculateArea() {
        int height = 1;
        int width = 2;
        area = height * width;
      }
    }

When selecting a variable declaration, convert the variable to field.

### Extract to method

Creates a new method containing the statements or expressions currently selected and replaces the selection with a reference to the new method. This feature is useful for cleaning up lengthy, cluttered, or overly-complicated methods.

#### Examples

Let’s extract the expression `height * width` to a new method.

##### Before

    public void method() {
      int height = 1;
      int width = 2;
      int area = height * width;
    }

##### After

    public void method() {
      int height = 1;
      int width = 2;
      int area = getArea(height, width);
    }

    private int getArea(int height, int width) {
      return height * width;
    }

> Also see: [Inline method](#inline-method)

### Extract to local variable

Creates a new variable assigned to the expression currently selected and replaces the selection with a reference to the new variable.

#### Examples

Let’s extract the expression `platform.equalsIgnoreCase("MAC")` to a new variable.

##### Before

    public void method() {
      if (platform.equalsIgnoreCase("MAC")) {
        // do something
      }
    }

##### After

    public void method() {
      boolean isMac = platform.equalsIgnoreCase("MAC");
      if (isMac) {
        // do something
      }
    }

After the extraction, you can also perform a rename in the same transaction.

> Also see: [Inline local variable](#inline-local-variable)

### Inline constant

Replaces a constant reference with its defined value.

#### Examples

Let’s replace the constant `PI` to its defined value: `3.14`.

##### Before

    private static final double PI = 3.14;

    public double getArea(double r) {
      return PI * r * r;
    }

##### After

    private static final double PI = 3.14;

    public double getArea(double r) {
      return 3.14 * r * r;
    }

> Also see: [Extract to constant](#extract-to-constant)

### Inline local variable

Replaces redundant variable usage with its initializer.

#### Examples

Let’s replace the variable `isMac` directly to the boolean expression.

##### Before

    public void method() {
      boolean isMac = platform.equalsIgnoreCase("MAC");
      if (isMac) {
        // do something
      }
    }

##### After

    public void method() {
      if (platform.equalsIgnoreCase("MAC")) {
        // do something
      }
    }

> Also see: [Extract to local variable](#extract-to-local-variable)

### Inline method

Replaces calls to the method with the method’s body.

#### Example

Let’s replace the method `getArea(int height, int width)` directly to the expression `height * width`.

##### Before

    public void method() {
      int height = 1;
      int width = 2;
      int area = getArea(height, width);
    }

    private int getArea(int height, int width) {
      return height * width;
    }

##### After

    public void method() {
      int height = 1;
      int width = 2;
      int area = height * width;
    }

> Also see: [Extract to method](#extract-to-method)

### Invert conditions

Inverts the boolean expression in the conditions.

#### Example

Let’s invert the boolean expression in the if statement.

##### Before

    public void method(int value) {
      if (value > 5 && value < 15) {
        // do something
      }
    }

##### After

    public void method(int value) {
      if (value <= 5 || value >= 15) {
        // do something
      }
    }

### Invert local variable

Inverts the local boolean variable.

#### Example

Let’s invert the variable `valid`.

##### Before

    public void method(int value) {
      boolean valid = value > 5 && value < 15;
    }

##### After

    public void method(int value) {
      boolean notValid = value <= 5 || value >= 15;
    }

### Move

Moves the selected elements and corrects all references to the elements (also in other files). Available actions are:

- Move class to another package
- Move static or instance method to another class
- Move inner class to a new file

#### Example

Let’s move the static method `print()` from class `Office` to class `Printer`.

##### Before

    public class Office {
      public static void main(String[] args) {
        print();
      }

      public static void print() {
        System.out.println("This is printer");
      }

      static class Printer { }
    }

##### After

    public class Office {
      public static void main(String[] args) {
        Printer.print();
      }

      static class Printer {
        public static void print() {
          System.out.println("This is printer");
        }
      }
    }

Move refactoring on a static method if it is used more in another class than in its own class.

Move a class to another package. Currently, move refactoring is not supported from file explorer.

Move an inner class to new a new file.

### Rename

Default shortcut: `kb(editor.action.rename)`

Renames the selected element and corrects all references to the elements (also in other files).

#### Example

Let’s rename the class `Foo` to `Bar`

##### Before

    public class Foo {
      // ...
    }

    public void myMethod() {
      Foo myClass = new Foo();
    }

##### After

    public class Bar {
      // ...
    }

    public void myMethod() {
      Bar myClass = new Bar();
    }

The shortcut to invoke the Rename refactoring is `kb(editor.action.rename)`. When you invoke the shortcut on an identifier in the editor, a small box displays within the editor itself where you can change the identifier name. When you press `kbstyle(Enter)`, all references to that identifier are changed too.

Rename refactoring is also supported from the File Explorer for folders and files. After requesting the change, a preview of impacted files will be provided and you can decide how to apply those changes.

![Rename from Explorer](images/java-refactoring/rename-explorer.gif)

### Change resolved type to var type

Uses `var` to declare local variables.

#### Example

##### Before

    String s = "";

##### After

    var s = "";

> Also see: [Change var type to resolved type](#change-var-type-to-resolved-type)

---

### Change var type to resolved type

Uses the resolved type to declare local variables.

#### Example

##### Before

    var s = "";

##### After

    String s = "";

> Also see: [Change resolved type to var type](#change-resolved-type-to-var-type)

## Source Actions

Source Actions could be used to generate common code structures and recurring elements. Some of them are quick fixes which helps you fix your code issues on the fly.

### Generate constructor from super class

Add a constructor from super class.

### Generate delegate methods

Generate delegate methods

### Override/implement methods

With this Source Action, all the candidates are presented to you with a checklist. You can then decide what to override or implement.

### Organize imports

You can use this Source Action to clean up your imports. It can also deal with ambiguous imports, in that case, a dropdown list will be presented for you to pick the right one. The code line with the unresolved type is also presented to you to help you decide.

### Generate getters and setters

You can bulk generate getters and setters for all new member variables. If the class has more than one field, the Source Action will prompt a Quick Pick for you to select the target fields to use to generate the accessor methods.

### Generate `hashCode()` and `equals()`

`hashCode()` and `equals()` can be generated with default implementations. All the non-static member variables are listed, and you can customize the generated code using the check list.

There are two options for you to customize the generated code:

- If you use Java 7+, you can set `java.codeGeneration.hashCodeEquals.useJava7Objects` to `true` to generate shorter code that calls `Objects.hash` and `Objects.equals`.
- You can also set `java.codeGeneration.hashCodeEquals.useInstanceof` to `true` to use `instanceOf` operator to check the object types instead of calling `Object.getClass()`.

### Generate `toString()`

There is a new Source Action to generate the `toString()` method. Customization is possible with a check list of all the member variables.

### Fix non-accessible reference

This Quick Fix helps you fix non-accessible reference.

### Create non-existing package

When your package name doesn’t match the folder name, you have the options to either change the package name in your source code, or move the folder in the file system (even when the destination folder doesn’t exist yet).

### Other Code Actions supported

The list of Code Actions supported by VS Code keeps growing and only listed the most popular ones above. Other notable supported actions include (but not limited to):

- Create unresolved types
- Remove the `final` modifier
- Remove unnecessary cast
- Remove redundant interfaces
- Add missing case labels in switch statements
- Jump to definition on break/continue
- Correct access to static elements
