Develop with containers
=======================

What are development containers?
--------------------------------

Containers are pieces of software that package code and all of the dependencies that code needs to run, including the runtime, tools, libraries, and settings. Development containers specifically let you code within this piece of software, providing a separate coding environment from your computer.

A Python dev container would include your Python app along with all the Python runtimes and dependencies already set up for you, no extra downloads necessary:

![Python Container Diagram](images/containers/python-container.png)

In your class, you could have a specific container for an assignment. Each student in your class will get the same exact same version of dependencies, such as the same version of Python or a C++ compiler, regardless of their operating system or any other files already installed on their computer.

In the diagram below, you’ll see an example of three dev containers: one for Python, one for Java, and one for C++. Each of these dev containers would include the app and the dependencies that app needs to run. The dependencies are separate from the rest of your computer (which are represented by the Infrastructure and Host Operating System).

![Container Architecture Diagram](images/containers/container-architecture.png)

Get started with dev containers in VS Code
------------------------------------------

### Prerequisites

To get started with using dev containers in VS Code, you’ll need to download the [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) from the Extension Marketplace.

![Remote Containers extension](images/containers/remote-containers.png)

You’ll also need to download [Docker](https://docs.docker.com/docker-for-windows/install-windows-home/), which is the industry standard for building and sharing containers.

### Sample dev containers

Rather than creating dev containers from scratch, Remote - Containers has several ways to help you [create dev containers](/docs/remote/create-dev-container.md) or access existing dev containers.

Below is a list of sample dev containers we’d recommend starting out with:

-   [Try Out Development Containers: Python](https://github.com/microsoft/vscode-remote-try-python)
-   [Try Out Development Containers: Java](https://github.com/microsoft/vscode-remote-try-java)
-   [Try Out Development Containers: C++](https://github.com/microsoft/vscode-remote-try-cpp)
-   [Try Out Development Containers: Node.js](https://github.com/microsoft/vscode-remote-try-node)
-   [Try Out Development Containers: .NET Core](https://github.com/microsoft/vscode-remote-try-dotnetcore)
-   [Try Out Development Containers: Go](https://github.com/microsoft/vscode-remote-try-go)
-   [Try Out Development Containers: PHP](https://github.com/microsoft/vscode-remote-try-php)
-   [Try Out Development Containers: Rust](https://github.com/microsoft/vscode-remote-try-rust)

Learning resources
------------------

To learn how to get started with the Remote - Containers extension, check out this 5-minute introductory video:

You can also read more in our [Development Containers in Education](/blogs/2020/07/27/containers-edu.md) blog post.

Next steps
----------

We also highly recommend checking out the step-by-step [Containers tutorial](/docs/remote/containers-tutorial.md).
