Java build tools in VS Code
===========================

This document will give you an overview of how work with your Java build tools in Visual Studio Code. It covers the [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) extension as well as other tools.

If you run into any issues when using the features below, you can contact us by clicking the **Report an issue** button below.

<a href="javascript:void(0)" class="tutorial-feedback-btn">Report an issue</a>

Maven
-----

[Maven](https://maven.apache.org/) is a software tool that helps you manage Java projects and automate application builds. The [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) extension for Visual Studio Code provides fully integrated Maven support, allowing you to explore Maven projects, execute Maven commands, and perform the goals of build lifecycle and plugins.

<a href="vscode:extension/vscjava.vscode-maven" class="tutorial-install-extension-btn">Install the Maven for Java extension</a>

### Exploring Maven project

Once a Maven project is loaded, the extension will be activated and it will automatically scan for `pom.xml` files in your workspace and displays all Maven projects and their modules in the side bar.

![Maven Explorer](images/java-build/maven-explorer.png)

### Resolve unknown type

The Maven extension also supports searching Maven Central to resolve unknown types in your source code. You can do this by selecting the **Resolve unknown type** link shown on hover.

### Working with POM.xml

The extension provides code snippets and auto completion for adding Maven dependencies based on local Maven repositories. See how easy it is to add a new dependency to your `pom.xml` with those convenient features.

The extension also enables you to generate effective POM.

You can also use the command **Maven: Add a Dependency** (or `maven.project.addDependency`) to help add a new dependency to `pom.xml`. The process is interactive.

You can also add dependencies through the project view, which calls the same Maven command.

Furthermore, VS Code also supports showing dependencies in a tree view, which allows you to inspect all dependencies in your project at a single place and check for potential issues.

### Execute Maven commands and goals

By right-clicking each Maven project in the explorer, you can conveniently run Maven goals.

The extension also preserves the history of goals for each project, so you can quickly rerun the previous command, which is useful when you’re running a long custom goal.

There are two ways to rerun a goal:

1.  Command Palette &gt; Select **Maven: History** &gt; Select a project &gt; Select command from the history.
2.  Right-click a project &gt; Click **History** &gt; Select command from history.

You can also specify your favorite commands in settings for future execution.

For each plug-in you use with your project, the extension also provides you an easy way to access the goals within each plugin.

To debug Maven goals, right-click on a goal and start debugging. The Maven extension will call the Java debugger with the right parameters. This is a handy, time-saving feature.

### Generate project from Maven Archetype

Another handy feature provided by this extension is to generate a Maven project from [Archetype](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html). The extension loads archetypes listed in local/remote catalogs. After selection, the extension sends `mvn archetype:generate -D...` to the terminal.

There are two ways to generate a Maven project:

1.  From the Maven explore, click **+**.

![Create Maven Project](images/java-build/create-maven-project.png)

1.  Right-click on a folder and select **Generate from Maven Archetype**.

Gradle
------

VS Code supports basic Gradle Java project (not including Android). There are also a couple third party extensions available for writing `.gradle` files as well as running Gradle tasks.

-   [Gradle Language Support](https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language)
-   [Gradle Tasks](https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle)

### Additional resources

Visit the [GitHub Repo](https://github.com/microsoft/vscode-maven) of the Maven extension for additional [configurations](https://github.com/microsoft/vscode-maven/tree/main#additional-configurations) and a [troubleshooting guide](https://github.com/microsoft/vscode-maven/blob/main/Troubleshooting.md).

In addition to Maven, there’s also a [Bazel extension](https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel) if you use Bazel to build and test your project.

Next steps
----------

Read on to find out more about:

-   [Java Editing](/docs/java/java-editing.md) - Explore the editing features for Java in VS Code.
-   [Java Debugging](/docs/java/java-debugging.md) - Find out how to debug your Java project with VS Code.
-   [Java Testing](/docs/java/java-testing.md) - Use VS Code for your JUnit and TestNG cases.
-   [Java Extensions](/docs/java/extensions.md) - Learn about more useful Java extensions for VS Code.
