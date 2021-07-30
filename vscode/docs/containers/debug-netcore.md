# Debug .NET Core within a container

## Prerequisites

1.  Install the [.NET Core SDK](https://www.microsoft.com/net/download), which includes support for attaching to the .NET Core debugger.

2.  Install the Visual Studio Code [C\# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp), which includes support for attaching to the .NET Core debugger with VS Code.

3.  macOS users only: Add `/usr/local/share/dotnet/sdk/NuGetFallbackFolder` as a shared folder in your Docker preferences.

    ![dockerSharedFolders](images/debug/mac-folders.png)

## Walkthrough

1.  If needed, create a .NET Core project with `dotnet new`.
2.  Open the project folder in VS Code.
3.  Wait until a notification appears asking if you want to add required assets for debugging. Select **Yes**:

    ![csharpPrompt](images/debug/csharp-prompt.png)

4.  Open the Command Palette (`kb(workbench.action.showCommands)`) and enter **Docker: Add Docker Files to Workspace…**. If you have already dockerized your app, you can instead do **Docker: Initialize for Docker debugging**. Follow the prompts.
5.  Switch to the Run view (`kb(workbench.view.debug)`).
6.  Select the **Docker .NET Core Launch** launch configuration.
7.  Optionally, set a breakpoint.
8.  Start debugging! (`kb(workbench.action.debug.start)`)

## Running and debugging with SSL support

To enable SSL (using the HTTPS protocol), you will need to make a few changes to your configuration.

1.  In the Dockerfile, add an `EXPOSE` line to the base section to define a separate port for HTTPS / SSL. Keep a separate `EXPOSE` line with a different port for HTTP requests.

        FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
        WORKDIR /app
        EXPOSE 5000
        EXPOSE 5001

2.  In the `.vscode/tasks.json` file, add `configureSsl: true` to the `netCore` section. Also, add an environment variable `ASPNETCORE_URLS` in the `dockerRun` section of the `docker-run: debug` task, with the same port numbers you defined in the Dockerfile:

        dockerRun: {
            "env": {
               "ASPNETCORE_URLS": "https://+:5001;http://+:5000"
           }
         }
         netCore: {
             "appProject": "${workspacefolder}/MyProject.csproj",
             "enableDebugging": true,
             "configureSsl": true
         }

For additional customization options, see the documentation on [Tasks](/docs/containers/reference.md) and [Debug containerized apps](/docs/containers/debug-common.md).
