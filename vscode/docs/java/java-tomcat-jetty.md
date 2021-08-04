# Working with Application Servers in VS Code

Visual Studio Code is a code editor-centric development tool, so it doesn’t come with any embedded application server. For most servers, you will need to deploy them using the command line, and then use the appropriate debugger [configuration](https://code.visualstudio.com/docs/java/java-debugging#_configuration) if you want to attach to it.

On the other hand, we know that for certain Java workloads, server integration is very useful. With Visual Studio Code, you can find third party extensions for popular application servers, for example [Tomcat](https://tomcat.apache.org/), [Jetty](https://www.eclipse.org/jetty/), and [Open Liberty](https://openliberty.io/), which are helpful when working with those servers locally.

For [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard), see [Spring Boot in Visual Studio Code](/docs/java/java-spring-boot.md).

If you run into any issues when using the features below, you can contact us by clicking the **Report an issue** button below.

<a href="javascript:void(0)" class="tutorial-feedback-btn">Report an issue</a>

## Tomcat

With the [Tomcat](https://marketplace.visualstudio.com/items?itemName=adashen.vscode-tomcat) extension, you can manage all your local Tomcat servers within the editor and easily debug and run your `war` package on Tomcat and link Tomcat into your workspace. You can also create a new Tomcat server from the explorer using the **Add** button and run a `war` package on it. You can also create the server during the deployment.

For running and debugging a package, you can right-click a server to select a `war` package to debug. More details could be found in the [GitHub repository](https://github.com/adashen/vscode-tomcat) of the [Tomcat](https://marketplace.visualstudio.com/items?itemName=adashen.vscode-tomcat) extension.

## Jetty

The [Jetty for Java](https://marketplace.visualstudio.com/items?itemName=SummerSun.vscode-jetty) extension for Visual Studio Code makes it much easier for you to run and deploy your `war` package, operate your Jetty Server, and interact with your application within the editor.

The extension includes the following features:

- Add Jetty Server from download directory
- Start/Restart/Stop/Delete Jetty Server
- Run/Debug/Delete `war` package
- Reveal `war` package in file explorer
- Open Server homepage
- Open `war` package homepage

More details could be found in the [GitHub repository](https://github.com/summersun/vscode-jetty) of the [Jetty for Java](https://marketplace.visualstudio.com/items?itemName=SummerSun.vscode-jetty) extension.

## Open Liberty

The [Open Liberty Tools](https://marketplace.visualstudio.com/items?itemName=Open-Liberty.liberty-dev-vscode-ext) extension lets you run your application on Open Liberty, allowing you to deploy, test, and debug your application from Visual Studio Code.

After you start your application with the Open Liberty Tools extension, your source code is automatically compiled and deployed to the running server, making it easy to iterate on your changes. You can run tests on demand or automatically, so that you can get immediate feedback on your changes. You can also attach a debugger at any time to debug your running application.

More details can be found in the [GitHub repository](https://github.com/OpenLiberty/liberty-dev-vscode-ext) of the [Open Liberty Tools](https://marketplace.visualstudio.com/items?itemName=Open-Liberty.liberty-dev-vscode-ext) extension.

## Other servers

You can use the [Community Server Connectors](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector) extension from Red Hat to deploy projects to Apache Felix, Tomcat, and Karaf in VS Code.

The [Server Connector](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-server-connector) extension by Red Hat allows you to start, stop, and deploy to a Red Hat server and runtime products like WildFly, JBoss EAP, Minishift, CDK.

[Extension Pack for MicroProfile](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack) provides tools for creating MicroProfile projects to develop and deploy to runtimes such as Open Liberty, Quarkus, and Payara.
