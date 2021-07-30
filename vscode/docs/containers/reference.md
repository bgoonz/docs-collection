# Customize the Docker extension

The Docker extension includes several Visual Studio Code tasks to control the behavior of Docker [build](#docker-build-task) and [run](#docker-run-task), and form the basis of container startup for debugging.

The tasks allow for a great deal of control and customization. The final configuration is a combination of general defaults, platform-specific defaults (such as Node.js, Python, or .NET Core), and user input. User input takes precedence when it conflicts with defaults.

All common features of Visual Studio Code tasks (for example, grouping tasks into compound tasks) are supported by Docker extension tasks. For more information on common task features and properties, see the Visual Studio Code [custom task](/docs/editor/tasks.md#custom-tasks) documentation.

## Docker build task

The `docker-build` task builds Docker images using the Docker command line (CLI). The task can be used by itself, or as part of a chain of tasks to run and/or debug an application within a Docker container.

The most important configuration settings for the `docker-build` task are `dockerBuild` and `platform`:

- The `dockerBuild` object specifies parameters for the Docker build command. Values specified by this object are applied directly to Docker build CLI invocation.
- The `platform` property is a hint that changes how the `docker-build` task determines Docker build defaults.

See [property reference](#build-task-reference) for full list of all task properties.

### Platform support

While the `docker-build` task in `tasks.json` can be used to build any Docker image, the extension has explicit support (and simplified configuration) for Node.js, Python, and .NET Core.

### Node.js (docker-build)

**Minimal configuration using defaults**

A Node.js based Docker image with no specific platform options can just set the `platform` property to `node`:

    {
      "version": "2.0.0",
      "tasks": [
          {
              "label": "Build Node Image",
              "type": "docker-build",
              "platform": "node"
          }
      ]
    }

**Platform defaults**

For Node.js Docker images, the `docker-build` task infers the following options:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerBuild.context</code></td><td>The same directory in which the <code>package.json</code> resides.</td></tr><tr class="even"><td><code>dockerBuild.dockerfile</code></td><td>The file <code>Dockerfile</code> in the same directory as the <code>package.json</code> resides.</td></tr><tr class="odd"><td><code>dockerBuild.tag</code></td><td>The application’s <code>name</code> property in <code>package.json</code> (if defined), else the base name of the folder in which <code>package.json</code> resides.</td></tr></tbody></table>

### Python (docker-build)

**Minimal configuration using defaults**

A Python based Docker image with no specific platform options can just set the `platform` property to `python`:

    {
      "tasks": [
          {
          "type": "docker-build",
          "label": "docker-build",
          "platform": "python"
        }
      ]
    }

**Platform defaults**

For Python Docker images, the `docker-build` task infers the following options:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerBuild.context</code></td><td>The default context is the workspace folder.</td></tr><tr class="even"><td><code>dockerBuild.dockerfile</code></td><td>The default <code>Dockerfile</code> path will be in the root of the workspace folder.</td></tr><tr class="odd"><td><code>dockerBuild.tag</code></td><td>The base name of the root workspace folder.</td></tr><tr class="even"><td><code>dockerBuild.pull</code></td><td>Defaults to true in order to pull new base images before building.</td></tr></tbody></table>

### .NET Core (docker-build)

**Minimal configuration using defaults**

When you build a .NET Core-based Docker image, you can omit the `platform` property and just set the `netCore` object (`platform` is implicitly set to `netcore` when `netCore` object is present). Note that `appProject` is a required property:

    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "Build Node Image",
                "type": "docker-build",
                "netCore": {
                    "appProject": "${workspaceFolder}/project.csproj"
                }
            }
        ]
    }

**Platform defaults**

For .NET Core-based images, the `docker-build` task infers the following options:

<table><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerBuild.context</code></td><td>The root workspace folder.</td></tr><tr class="even"><td><code>dockerBuild.dockerfile</code></td><td>The file <code>Dockerfile</code> in the root workspace folder.</td></tr><tr class="odd"><td><code>dockerBuild.tag</code></td><td>The base name of the root workspace folder.</td></tr></tbody></table>

## Build task reference

Here are all properties available for configuring `docker-build` task. All properties are optional unless indicated otherwise.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>dockerBuild</code></td><td>Options for controlling the <code>docker build</code> command executed (<a href="#dockerbuild-object-properties">see below</a>).<br />
Required unless <code>platform</code> is set.</td></tr><tr class="even"><td><code>platform</code></td><td>Determines the platform: .NET Core (<code>netcore</code>) or Node.js (<code>node</code>) and default settings for <code>docker build</code> command.</td></tr><tr class="odd"><td><code>node</code></td><td>Determines options specific for Node.js projects (<a href="#node-object-properties-dockerbuild-task">see below</a>).</td></tr><tr class="even"><td><code>python</code></td><td>There are no object properties for Python in the <code>docker-build</code> task.</td></tr><tr class="odd"><td><code>netCore</code></td><td>Determines options specific for .NET Core projects (<a href="#netcore-object-properties-dockerbuild-task">see below</a>).</td></tr></tbody></table>

### dockerBuild object properties

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th><code>docker build</code> CLI Equivalent</th></tr></thead><tbody><tr class="odd"><td><code>context</code></td><td>The path to the Docker build context.<br />
Required, unless inferred from the platform.</td><td><code>PATH</code></td></tr><tr class="even"><td><code>dockerfile</code></td><td>The path to the Dockerfile.<br />
Required, unless inferred from the platform.</td><td><code>-f</code> or <code>--file</code></td></tr><tr class="odd"><td><code>tag</code></td><td>The tag applied to the Docker image.<br />
Required, unless inferred from the platform.</td><td><code>-t</code> or <code>--tag</code></td></tr><tr class="even"><td><code>buildArgs</code></td><td>Build arguments applied to the command line. This is a list of key-value pairs.</td><td><code>--build-arg</code></td></tr><tr class="odd"><td><code>labels</code></td><td>Labels added to the Docker image. This is a list of key-value pairs (a JSON object).<br />
In addition to labels specified here, a label <code>com.microsoft.created-by</code>, set to <code>visual-studio-code</code> is added to the image. This behavior can be turned off by setting <code>includeDefaults</code> property of the <code>labels</code> object to false.</td><td><code>--label</code></td></tr><tr class="even"><td><code>target</code></td><td>The target in the Dockerfile to build to.</td><td><code>--target</code></td></tr><tr class="odd"><td><code>pull</code></td><td>Whether or not to pull new base images before building.</td><td><code>--pull</code></td></tr><tr class="even"><td><code>customOptions</code></td><td>Any extra parameters to add before the context argument. No attempt is made to resolve conflicts with other options or validate this option.</td><td>(any)</td></tr></tbody></table>

### node object properties (`docker-build` task)

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>package</code></td><td>The path to the <code>package.json</code> file associated with the Dockerfile and <code>docker-build</code> task.</td><td>The file <code>package.json</code> in the root workspace folder.</td></tr></tbody></table>

### netCore object properties (`docker-build` task)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>appProject</code></td><td>The .NET Core project file (<code>.csproj</code>, <code>.fsproj</code>, etc.) associated with the Dockerfile and <code>docker-build</code> task.<br />
Required always.</td></tr></tbody></table>

## Docker run task

The `docker-run` task in `tasks.json` creates and starts a Docker container using the Docker command line (CLI). The task can be used by itself, or as part of a chain of tasks to debug an application within a Docker container.

The most important configuration settings for the `docker-run` task are `dockerRun` and `platform`:

- The `dockerRun` object specifies parameters for the Docker run command. Values specified by this object are applied directly to Docker run CLI invocation.
- The `platform` property is a hint that changes how the `docker-run` task determines Docker run defaults.

See [property reference](#run-task-reference) for full list of all task properties.

### Platform support

While the `docker-run` task can be used to run any Docker image, the extension has explicit support (and simplified configuration) for Node.js, Python, and .NET Core.

### Node.js (docker-run)

**Minimal configuration using defaults**

A Node.js based Docker image with no specific platform options can just set the `platform` property to `node`.

    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "Run Node Image",
                "node": "docker-run",
                "platform": "node"
            }
        ]
    }

**Platform defaults**

For Node.js-based Docker images, the `docker-run` task infers the following options:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerRun.command</code></td><td>Generated from the npm <code>start</code> script in the <code>package.json</code> (if it exists), else generated from the <code>main</code> property in the <code>package.json</code>.</td></tr><tr class="even"><td><code>dockerRun.containerName</code></td><td>Derived from the application package name.</td></tr><tr class="odd"><td><code>dockerRun.image</code></td><td>The tag from a dependent <code>docker-build</code> task (if one exists) or derived from the application package name, itself derived from the <code>name</code> property within <code>package.json</code> or the base name of the folder in which it resides.</td></tr></tbody></table>

### Python (docker-run)

When building a Python-based Docker image, you can omit the `platform` property and just set the `python` object (`platform` is implicitly set to `python` when `python` object is present)

**Minimal configuration for Django Apps**

    {
        "type": "docker-run",
        "label": "docker-run: debug",
        "dependsOn": [
          "docker-build"
        ],
        "python": {
          "args": [
            "runserver",
            "0.0.0.0:8000",
            "--nothreading",
            "--noreload"
          ],
          "file": "path_to/manage.py"
        }
    }

**Minimal configuration for Flask Apps**

    {
        "type": "docker-run",
        "label": "docker-run: debug",
        "dependsOn": [
          "docker-build"
        ],
        "dockerRun": {
          "env": {
            "FLASK_APP": "path_to/flask_entry_point.py"
          }
        },
        "python": {
          "args": [
            "run",
            "--no-debugger",
            "--no-reload",
            "--host", "0.0.0.0",
            "--port", "5000"
          ],
          "module": "flask"
        }
    }

**Minimal configuration for General Apps**

    {
        "type": "docker-run",
        "label": "docker-run: debug",
        "dependsOn": [
          "docker-build"
        ],
        "python": {
          "file": "path_to/app_entry_point.py"
        }
    }

**Platform defaults**

For Python-based Docker images, the `docker-run` task infers the following options:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerRun.command</code></td><td>Generated by the Python object and is called by the Python Debugger.</td></tr><tr class="even"><td><code>dockerRun.containerName</code></td><td>Derived from the base name of the root workspace folder.</td></tr><tr class="odd"><td><code>dockerRun.image</code></td><td>The tag from a dependent docker-build task (if one exists) or derived from the base name of the root workspace folder.</td></tr></tbody></table>

### .NET Core (docker-run)

**Minimal configuration using defaults**

When building a .NET Core-based Docker image, you can omit the `platform` property and just set the `netCore` object (`platform` is implicitly set to `netcore` when `netCore` object is present). Note that `appProject` is a required property:

    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "Run .NET Core Image",
                "type": "docker-run",
                "netCore": {
                    "appProject": "${workspaceFolder}/project.csproj"
                }
            }
        ]
    }

**Platform defaults**

For .NET Core-based images, the `docker-run` task infers the following options:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Inferred Value</th></tr></thead><tbody><tr class="odd"><td><code>dockerRun.containerName</code></td><td>Derived from the base name of the root workspace folder.</td></tr><tr class="even"><td><code>dockerRun.env</code></td><td>Adds the following environment variables as required: <code>ASPNETCORE_ENVIRONMENT</code>, <code>ASPNETCORE_URLS</code>, and <code>DOTNET_USE_POLLING_FILE_WATCHER</code>.</td></tr><tr class="odd"><td><code>dockerRun.image</code></td><td>The tag from a dependent <code>docker-build</code> task (if one exists) or derived from the base name of the root workspace folder.</td></tr><tr class="even"><td><code>dockerRun.os</code></td><td><code>Linux</code></td></tr><tr class="odd"><td><code>dockerRun.volumes</code></td><td>Adds the following volumes as required: the local application folder, the source folder, the debugger folder, the NuGet package folder, and NuGet fallback folder.</td></tr></tbody></table>

## Run task reference

Here are all properties available for configuring `docker-run` task. All properties are optional unless indicated otherwise.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>dockerRun</code></td><td>Options for controlling the <code>docker run</code> command executed (<a href="#dockerrun-object-properties">see below</a>).<br />
Required unless <code>platform</code> is set.</td></tr><tr class="even"><td><code>platform</code></td><td>Determines the platform: .NET Core (<code>netcore</code>) or Node.js (<code>node</code>) and default settings for <code>docker run</code> command.</td></tr><tr class="odd"><td><code>node</code></td><td>For Node.js projects, this controls various options (<a href="#node-object-properties-dockerrun-task">see below</a>).</td></tr><tr class="even"><td><code>python</code></td><td>For Python projects, this controls various options (<a href="#python-object-properties-dockerrun-task">see below</a>).</td></tr><tr class="odd"><td><code>netCore</code></td><td>For .NET Core projects, this controls various options (<a href="#netcore-object-properties-dockerrun-task">see below</a>).</td></tr></tbody></table>

### dockerRun object properties

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>CLI Equivalent</th></tr></thead><tbody><tr class="odd"><td><code>image</code></td><td>The name (tag) of the image to run.<br />
Required unless inferred from the platform.</td><td><code>IMAGE</code></td></tr><tr class="even"><td><code>command</code></td><td>The command to run upon starting the container.<br />
Required, unless inferred from the platform.</td><td><code>COMMAND [ARG...]</code></td></tr><tr class="odd"><td><code>containerName</code></td><td>The name given to the started container.<br />
Required, unless inferred from the platform.</td><td><code>--name</code></td></tr><tr class="even"><td><code>env</code></td><td>Environment variables set in the container. This is a list of key-value pairs.</td><td><code>-e</code> or <code>--env</code></td></tr><tr class="odd"><td><code>envFiles</code></td><td>This is a list of <code>.env</code> files.</td><td><code>--env-file</code></td></tr><tr class="even"><td><code>labels</code></td><td>Labels given to the started container. This is a list of key-value pairs.</td><td><code>--label</code></td></tr><tr class="odd"><td><code>network</code></td><td>The name of the network to which the container will be connected.</td><td><code>--network</code></td></tr><tr class="even"><td><code>networkAlias</code></td><td>The network-scoped alias for the started container.</td><td><code>--network-alias</code></td></tr><tr class="odd"><td><code>os</code></td><td>Default is <code>Linux</code>, the other option is <code>Windows</code>. The container operating system used.</td><td>N/A</td></tr><tr class="even"><td><code>ports</code></td><td>The ports to publish (map) from container to host. This is a list of objects (<a href="#ports-object-properties">see below</a>).</td><td><code>-p</code> or <code>--publish</code></td></tr><tr class="odd"><td><code>portsPublishAll</code></td><td>Whether to publish all ports exposed by the Docker image. Defaults to <code>true</code> if no ports are explicitly published.</td><td><code>-P</code></td></tr><tr class="even"><td><code>extraHosts</code></td><td>The hosts to add to the container for DNS resolution. This is a list of objects (<a href="#extrahosts-object-properties">see below</a>).</td><td><code>--add-host</code></td></tr><tr class="odd"><td><code>volumes</code></td><td>The volumes to map into the started container. This is a list of objects (<a href="#volumes-object-properties">see below</a>).</td><td><code>-v</code> or <code>--volume</code></td></tr><tr class="even"><td><code>remove</code></td><td>Whether or not to remove the container after it stops.</td><td><code>--rm</code></td></tr><tr class="odd"><td><code>customOptions</code></td><td>Any extra parameters to add before the image argument. No attempt is made to resolve conflicts with other options or validate this option.</td><td>(any)</td></tr></tbody></table>

### ports object properties

<table><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>containerPort</code></td><td>The port number bound on the container.<br />
Required.</td><td></td></tr><tr class="even"><td><code>hostPort</code></td><td>The port number bound on the host.</td><td>(randomly selected by Docker)</td></tr><tr class="odd"><td><code>protocol</code></td><td>The protocol for the binding (<code>tcp</code> or <code>udp</code>).</td><td><code>tcp</code></td></tr></tbody></table>

### extraHosts object properties

<table><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hostname</code></td><td>The hostname for DNS resolution.<br />
Required.</td></tr><tr class="even"><td><code>ip</code></td><td>The IP address associated with the above hostname.<br />
Required.</td></tr></tbody></table>

### volumes object properties

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>localPath</code></td><td>The path on the local machine that will be mapped.<br />
Required.</td><td></td></tr><tr class="even"><td><code>containerPath</code></td><td>The path in the container to which the local path will be mapped.<br />
Required.</td><td></td></tr><tr class="odd"><td><code>permissions</code></td><td>Permissions the container has on the mapped path. Can be <code>ro</code> (read-only) or <code>rw</code> (read-write).</td><td>Container dependent.</td></tr></tbody></table>

### node object properties (`docker-run` task)

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>package</code></td><td>The path to the <code>package.json</code> file associated with the <code>docker-run</code> task.</td><td>The file <code>package.json</code> in the root workspace folder.</td></tr><tr class="even"><td><code>enableDebugging</code></td><td>Whether or not to enable debugging within the container.</td><td><code>false</code></td></tr><tr class="odd"><td><code>inspectMode</code></td><td>Defines the initial interaction between the application and the debugger (<code>default</code> or <code>break</code>).<br />
The value <code>default</code> allows the application to run until the debugger attaches.<br />
The value <code>break</code> prevents the application from running until the debugger attaches.</td><td><code>default</code></td></tr><tr class="even"><td><code>inspectPort</code></td><td>The port on which debugging should occur.</td><td><code>9229</code></td></tr></tbody></table>

### python object properties (`docker-run` task)

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>args</code></td><td>Arguments passed to the Python app.</td><td>Platform dependent. Defaults of scaffolding shown <a href="#python-docker-run">above</a></td></tr><tr class="even"><td><code>debugPort</code></td><td>The port that the debugger will listen on.</td><td><code>5678</code></td></tr><tr class="odd"><td><code>wait</code></td><td>Whether to wait for debugger to attach.</td><td><code>true</code></td></tr><tr class="even"><td><code>module</code></td><td>The Python module to run (only module <strong>or</strong> file should be chosen).</td><td></td></tr><tr class="odd"><td><code>file</code></td><td>The Python file to run (only module <strong>or</strong> file should be chosen).</td><td></td></tr></tbody></table>

### netCore object properties (`docker-run` task)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>appProject</code></td><td>The .NET Core project file (<code>.csproj</code>, <code>.fsproj</code>, etc.) associated with <code>docker-run</code> task.<br />
Required.</td></tr><tr class="even"><td><code>configureSsl</code></td><td>Whether to configure ASP.NET Core SSL certificates and other settings to enable SSL on the service in the container.</td></tr><tr class="odd"><td><code>enableDebugging</code></td><td>Whether to enable the started container for debugging. This will infer additional volume mappings and other options necessary for debugging.</td></tr></tbody></table>

## Docker Compose task

The `docker-compose` task in `tasks.json` creates and starts Docker containers using the Docker Compose command line (CLI). The task can be used by itself, or as part of a chain of tasks to debug an application within a Docker container.

The most important configuration setting for the `docker-compose` task is `dockerCompose`:

- The `dockerCompose` object specifies parameters for the Docker Compose command. Values specified by this object are applied directly to Docker Compose CLI invocation.

See [property reference](#compose-task-reference) for full list of all task properties.

**Example configuration**

    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "Run docker-compose up",
                "type": "docker-compose",
                "dockerCompose": {
                    "up": {
                        "detached": true,
                        "build": true,
                        "services": [
                          "myservice"
                        ]
                    },
                    "files": [
                        "${workspaceFolder}/docker-compose.yml",
                        "${workspaceFolder}/docker-compose.debug.yml"
                    ]
                }
            }
        ]
    }

## Compose task reference

Here are all properties available for configuring `docker-compose` task. All properties are optional unless indicated otherwise.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>dockerCompose</code></td><td>Options for controlling the <code>docker-compose</code> command executed (<a href="#dockercompose-object-properties">see below</a>).<br />
Required.</td></tr></tbody></table>

### dockerCompose object properties

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>CLI Equivalent</th></tr></thead><tbody><tr class="odd"><td><code>up</code></td><td>Run a <code>docker-compose up</code> command.<br />
Either this or <code>down</code> must be specified, but not both.</td><td><code>docker-compose up</code></td></tr><tr class="even"><td><code>down</code></td><td>Run a <code>docker-compose down</code> command.<br />
Either this or <code>up</code> must be specified, but not both.</td><td><code>docker-compose down</code></td></tr><tr class="odd"><td><code>files</code></td><td>The list of Docker Compose YAML files to use in the <code>docker-compose</code> command. If not specified, the Docker Compose CLI looks for <code>docker-compose.yml</code> and <code>docker-compose.override.yml</code>.</td><td><code>-f &lt;file&gt;</code></td></tr></tbody></table>

### up object properties

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>CLI Equivalent</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>detached</code></td><td>Whether or not to run detached.</td><td><code>-d</code></td><td><code>true</code></td></tr><tr class="even"><td><code>build</code></td><td>Whether or not to build before running.</td><td><code>--build</code></td><td><code>true</code></td></tr><tr class="odd"><td><code>scale</code></td><td>Number of instances of each service to run. This is a list of key-value pairs.</td><td><code>--scale SERVICE=NUM</code></td><td></td></tr><tr class="even"><td><code>services</code></td><td>A subset of the services to start.</td><td><code>[SERVICE...]</code></td><td>(all)</td></tr><tr class="odd"><td><code>customOptions</code></td><td>Any extra parameters to add after the <code>up</code> argument. No attempt is made to resolve conflicts with other options or validate this option.</td><td>(any)</td><td></td></tr></tbody></table>

### down object properties

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>CLI Equivalent</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>removeImages</code></td><td>Whether to remove images, and which. <code>all</code> will remove all images used by any service, <code>local</code> will remove only images without a custom tag. Leaving this unset will remove no images.</td><td><code>--rmi</code></td><td></td></tr><tr class="even"><td><code>removeVolumes</code></td><td>Whether or not to remove named volumes.</td><td><code>-v</code></td><td><code>false</code></td></tr><tr class="odd"><td><code>customOptions</code></td><td>Any extra parameters to add after the <code>down</code> argument. No attempt is made to resolve conflicts with other options or validate this option.</td><td>(any)</td><td></td></tr></tbody></table>

## Command customization

The Docker extension executes a number of Docker CLI commands when you perform various operations, such as to build images, run containers, attach to containers, and view container logs. Some of these commands have a large number of optional arguments, often used in very specific scenarios. Many of these commands can be customized.

For example, the token `${serviceList}` in the [Compose Up](#docker-compose-up) command allows for easily starting a subset of the services within your Docker Compose YAML file(s).

For each of these customizable Docker commands, a configuration setting is available to set the template of what to execute. Alternatively, you can define multiple templates, optionally with a regular expression, which when matched, hints the context in which a template should be used. The templates support some tokens similar to `launch.json` and `tasks.json`, for example, `${workspaceFolder}`.

### Settings JSON schema

You have two options for configuring each of the templates (listed below). The first option is a single template that overrides the default behavior:

    {
        "docker.commands.build": "docker build --rm -f \"${dockerfile}\" -t ${tag} \"${context}\""
    }

The second option is multiple templates that will be chosen based on the `match` regular expression, the `contextTypes` in which it is applicable, as well as user input. The `contextTypes` property is a list of Docker context types in which a command template applies. If it is undefined or empty, the template is applicable in all Docker contexts.

For example, three templates are shown in the following example:

    {
        "docker.commands.build": [
            {
                "label": "Default build command",
                "template": "docker build --rm -f \"${dockerfile}\" -t ${tag} \"${context}\""
            },
            {
                "label": "Alpine-specific build command",
                "template": "docker build -p 1234:1234 -f \"${dockerfile}\" -t ${tag} \"${context}\"",
                "match": "alpine"
            },
            {
                "label": "Context-specific build command",
                "template": "docker build -f \"${dockerfile}\" .",
                "contextTypes": ["moby"]
            }
        ]
    }

### Selection behavior

The command template chosen to execute is selected based on the following rules:

1.  If no setting is configured, the default command template is chosen.
2.  If only a single template is configured (the first example above), that template is chosen.
3.  If multiple templates are configured:
    1.  Constrained templates are checked. A constrained template has either `match` or `contextTypes`, or both. The `match` regular expression is compared against contextual hints–for example, image name, container name, etc. The `contextTypes` property causes the template to apply only in certain context types, for example, `moby` or `aci` (or both).
    2.  If multiple constrained templates apply, the user will be prompted to choose. If only one applies, the user will not be prompted.
    3.  If there no applicable constrained templates, unconstrained templates are checked. An unconstrained template has neither `match` nor `contextTypes`, and is therefore always applicable.
    4.  If multiple unconstrained templates apply, the user will be prompted to choose. If only one applies, the user will not be prompted.

### Docker Build

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.build</code></td><td><code>docker build --rm -f "${dockerfile}" -t ${tag} "${context}"</code></td></tr></tbody></table>

Supported tokens:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${dockerfile}</code></td><td>The workspace-relative path of the selected <code>Dockerfile</code>.</td></tr><tr class="even"><td><code>${tag}</code></td><td>The value entered/confirmed by the user upon invoking the build command. If previously built, defaults to the previously entered value for that <code>Dockerfile</code>.</td></tr><tr class="odd"><td><code>${context}</code></td><td>If set, the value of the <code>docker.imageBuildContextPath</code> configuration setting. Otherwise, the workspace-relative folder in which the <code>Dockerfile</code> resides.</td></tr></tbody></table>

> **Note**: If the `docker.commands.build` setting does not contain the `${tag}` token, the user will **not** be prompted to enter/confirm a tag.

> **Note**: The `match` regular expression will be compared against the selected Dockerfile name and the workspace folder name.

### Docker Run

<table><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.run</code></td><td><code>docker run --rm -d ${exposedPorts} ${tag}</code></td></tr><tr class="even"><td><code>docker.commands.runInteractive</code></td><td><code>docker run --rm -it ${exposedPorts} ${tag}</code></td></tr></tbody></table>

Supported tokens:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${exposedPorts}</code></td><td>Generated from the list of exposed ports in the image (ultimately from the <code>Dockerfile</code>), where each exposed port is mapped to the same port on the local machine. For example, <code>"EXPOSE 5000 5001"</code> would generate <code>"-p 5000:5000 -p 5001:5001"</code>.</td></tr><tr class="even"><td><code>${tag}</code></td><td>The full tag of the selected image.</td></tr></tbody></table>

> **Note**: The `match` regular expression will be compared against the full tag of the selected image.

### Docker Attach

<table><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.attach</code></td><td><code>docker exec -it ${containerId} ${shellCommand}</code></td></tr></tbody></table>

Supported tokens:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${containerId}</code></td><td>The ID of the container to attach to.</td></tr><tr class="even"><td><code>${shellCommand}</code></td><td>If <code>bash</code> is present in the container, it is substituted here, otherwise <code>sh</code>. In Windows containers, <code>cmd</code> is always used.</td></tr></tbody></table>

> **Note**: The `match` regular expression will be compared against the container name and full tag of the container image.

### Docker Logs

<table><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.logs</code></td><td><code>docker logs -f ${containerId}</code></td></tr></tbody></table>

Supported tokens:

<table><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${containerId}</code></td><td>The ID of the container to view the logs for.</td></tr></tbody></table>

> **Note**: The `match` regular expression will be compared against the container name and full tag of the container image.

### Docker Compose Up

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.composeUp</code></td><td><code>docker-compose ${configurationFile} up ${detached} ${build}</code></td></tr></tbody></table>

Supported tokens:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${configurationFile}</code></td><td>Set to <code>-f</code> plus the workspace-relative path to the selected Docker Compose YAML file.</td></tr><tr class="even"><td><code>${detached}</code></td><td>Set to <code>-d</code> if the configuration setting <code>docker.dockerComposeDetached</code> is set to <code>true</code>. Otherwise, set to <code>""</code>.</td></tr><tr class="odd"><td><code>${build}</code></td><td>Set to <code>--build</code> if the configuration setting <code>docker.dockerComposeBuild</code> is set to <code>true</code>. Otherwise, set to <code>""</code>.</td></tr><tr class="even"><td><code>${serviceList}</code></td><td>If specified, prompts for a subset of the services to start when the command is run.</td></tr></tbody></table>

### Docker Compose Down

<table><thead><tr class="header"><th>Configuration Setting</th><th>Default Value</th></tr></thead><tbody><tr class="odd"><td><code>docker.commands.composeDown</code></td><td><code>docker-compose ${configurationFile} down</code></td></tr></tbody></table>

Supported tokens:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${configurationFile}</code></td><td>Set to <code>-f</code> plus the workspace-relative path to the selected Docker Compose YAML file.</td></tr></tbody></table>

### Additional supported tokens

In addition to the command-specific supported tokens, the following tokens are supported in all command templates:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Token</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${workspaceFolder}</code></td><td>The selected workspace folder path.</td></tr><tr class="even"><td><code>${config:some.setting.identifier}</code></td><td>The value of any configuration setting, as long as it is a string, number, or boolean. These setting identifiers can be arbitrarily defined and do not need to belong to Visual Studio Code or to any extension.</td></tr><tr class="odd"><td><code>${env:Name}</code></td><td>The value of an environment variable.</td></tr><tr class="even"><td><code>${command:commandID}</code></td><td>The string return value of a command.</td></tr></tbody></table>
