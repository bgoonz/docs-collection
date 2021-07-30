# Debug containerized apps

With version 0.9.0 and later, the Docker extension provides more support for debugging applications within Docker containers, such as scaffolding `launch.json` configurations for attaching a debugger to applications running within a container.

The Docker extension provides a `docker` debug configuration provider that manages how VS Code will launch an application and/or attach a debugger to the application in a running Docker container. This provider is configured via entries within `launch.json`, with configuration being specific to each application platform supported by the provider.

The Docker extension currently supports debugging [Node.js](#node-js), [Python](#python), and [.NET Core](#net-core) applications within Docker containers.

## Requirements

Scaffolding or pasting a launch configuration into `launch.json` is **not sufficient** to build and debug a Docker container. To successfully run a Docker launch configuration, you must have:

- A Dockerfile.
- `docker-build` and `docker-run` tasks in `tasks.json`.
- A launch configuration that invokes these tasks.

We recommend using the **Docker: Add Docker Files to Workspace…** command to create these items, if none of these assets already exist. If you already have a functional Dockerfile, we recommend using the **Docker: Initialize for Docker debugging** command to scaffold a launch configuration and Docker-related tasks.

## Node.js

More information about debugging Node.js applications within Docker containers can be found at [Debug Node.js within a container](/docs/containers/debug-node.md).

Example `launch.json` configuration for debugging a Node.js application:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Launch Node.js in Docker",
                "type": "docker",
                "request": "launch",
                "preLaunchTask": "Run Docker Container",
                "platform": "node"
            }
        ]
    }

## Python

More information about debugging Python applications within Docker containers can be found at [Debug Python within a container](/docs/containers/debug-python.md).

Example `launch.json` configuration for debugging a Python application:

    {
      "configurations": [
        {
          "name": "Docker: Python - Django",
          "type": "docker",
          "request": "launch",
          "preLaunchTask": "docker-run: debug",
          "python": {
            "pathMappings": [
              {
                "localRoot": "${workspaceFolder}",
                "remoteRoot": "/app"
              }
            ],
            "projectType": "django"
          }
        }
      ]
    }

## .NET Core

More information about debugging .NET Core applications within Docker containers can be found in [Debug .NET Core within Docker containers](/docs/containers/debug-netcore.md).

> The previous (Preview) .NET Core Docker debugging support (utilizing `"type": "docker-coreclr"` instead of the current preview’s `"type": "docker"`) is being deprecated. You can still find documentation on that support at [Debug .NET Core - Deprecated](https://github.com/microsoft/vscode-docker/wiki/Debug-NetCore-Deprecated).

Example `launch.json` configuration for debugging a .NET Core application:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Launch .NET Core in Docker",
                "type": "docker",
                "request": "launch",
                "preLaunchTask": "Run Docker Container",
                "netCore": {
                    "appProject": "${workspaceFolder}/project.csproj"
                }
            }
        ]
    }

## Configuration reference

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>containerName</code></td><td>Name of the container used for debugging.</td></tr><tr class="even"><td><code>dockerServerReadyAction</code></td><td>Options for launching a browser to the Docker container. Similar to serverReadyAction, but replaces container ports with host ports.</td></tr><tr class="odd"><td><code>removeContainerAfterDebug</code></td><td>Whether to remove the debug container after debugging.</td></tr><tr class="even"><td><code>platform</code></td><td>The target platform for the application. Can be <code>netCore</code> or <code>node</code>.</td></tr><tr class="odd"><td><code>netCore</code></td><td>Options for debugging .NET Core projects in Docker.</td></tr><tr class="even"><td><code>node</code></td><td>Options for debugging Node.js projects in Docker.</td></tr><tr class="odd"><td><code>python</code></td><td>Options for debugging Python projects in Docker.</td></tr></tbody></table>

### dockerServerReadyAction object properties

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>action</code></td><td>The action to take when the pattern is found. Can be <code>debugWithChrome</code> or <code>openExternally</code>.</td></tr><tr class="even"><td><code>containerName</code></td><td>The container name to match the host port.</td></tr><tr class="odd"><td><code>pattern</code></td><td>The regex pattern to look for in Debug console output.</td></tr><tr class="even"><td><code>uriFormat</code></td><td>The URI format to launch.</td></tr><tr class="odd"><td><code>webRoot</code></td><td>The root folder from which web pages are served. Used only when <code>action</code> is set to <code>debugWithChrome</code>.</td></tr></tbody></table>

### node object properties

> These properties are the same as those described in the [VS Code documentation](/docs/nodejs/nodejs-debugging.md#launch-configuration-attributes) for attaching a debugger to Node.js applications. All properties passed in the `node` object will be passed on to the Node.js debug adaptor, even if not specifically listed below.

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>port</code></td><td>Optional. The debug port to use.</td><td><code>9229</code></td></tr><tr class="even"><td><code>address</code></td><td>Optional. TCP/IP address of the debug port.</td><td></td></tr><tr class="odd"><td><code>sourceMaps</code></td><td>Optional. Enable source maps by setting this to <code>true</code>.</td><td></td></tr><tr class="even"><td><code>outFiles</code></td><td>Optional. Array of glob patterns for locating generated JavaScript files.</td><td></td></tr><tr class="odd"><td><code>autoAttachChildProcesses</code></td><td>Optional. Track all subprocesses of debuggee and automatically attach to those that are launched in debug mode.</td><td></td></tr><tr class="even"><td><code>timeout</code></td><td>Optional. When restarting a session, give up after this number of milliseconds.</td><td></td></tr><tr class="odd"><td><code>stopOnEntry</code></td><td>Optional. Break immediately when the program launches.</td><td></td></tr><tr class="even"><td><code>localRoot</code></td><td>Optional. VS Code’s root directory.</td><td>The root workspace folder.</td></tr><tr class="odd"><td><code>remoteRoot</code></td><td>Optional. Node’s root directory within the Docker container.</td><td><code>/usr/src/app</code></td></tr><tr class="even"><td><code>smartStep</code></td><td>Optional. Try to automatically step over code that doesn’t map to source files.</td><td></td></tr><tr class="odd"><td><code>skipFiles</code></td><td>Optional. Automatically skip files covered by these glob patterns.</td><td></td></tr><tr class="even"><td><code>trace</code></td><td>Optional. Enable diagnostic output.</td><td></td></tr></tbody></table>

### python object properties

<table><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>host</code></td><td>The host for remote debugging.</td><td></td></tr><tr class="even"><td><code>port</code></td><td>The port for remote debugging.</td><td><code>5678</code></td></tr><tr class="odd"><td><code>pathMappings</code></td><td>Maps the project path between local machine and remote host.</td><td></td></tr><tr class="even"><td><code>projectType</code></td><td>Type of Python app.</td><td></td></tr><tr class="odd"><td><code>justMyCode</code></td><td>Debug only user-written code.</td><td></td></tr><tr class="even"><td><code>django</code></td><td>Django debugging.</td><td><code>false</code></td></tr><tr class="odd"><td><code>jinja</code></td><td>Jinja template debugging (such as Flask).</td><td><code>false</code></td></tr></tbody></table>

### netCore object properties

> Properties passed in the `netCore` object are generally passed on to the .NET Core debug adaptor, even if not specifically listed below. The complete list of debugger properties is in the [OmniSharp VS Code extension documentation](https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger-launchjson.md).

<table><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>appProject</code></td><td>The .NET Core project (.csproj, .fsproj, etc.) to debug.</td></tr></tbody></table>

## Next steps

Read on to learn more about:

- [Debugging Node.js within Docker containers](/docs/containers/debug-node.md)
- [Debugging Python within Docker containers](/docs/containers/debug-python.md)
- [Debugging .NET Core within Docker containers](/docs/containers/debug-netcore.md)
- [Debugging with Docker Compose](/docs/containers/docker-compose.md#debug)
- [Troubleshooting](/docs/containers/troubleshooting.md)
