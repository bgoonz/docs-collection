{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %} {% data reusables.actions.ae-beta %}

## About YAML syntax for {% data variables.product.prodname\_actions %}

Docker and JavaScript actions require a metadata file. The metadata filename must be either `action.yml` or `action.yaml`. The data in the metadata file defines the inputs, outputs and main entrypoint for your action.

Action metadata files use YAML syntax. If you’re new to YAML, you can read “[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes).”

## `name`

**Required** The name of your action. {% data variables.product.prodname\_dotcom %} displays the `name` in the **Actions** tab to help visually identify actions in each job.

## `author`

**Optional** The name of the action’s author.

## `description`

**Required** A short description of the action.

## `inputs`

**Optional** Input parameters allow you to specify data that the action expects to use during runtime. {% data variables.product.prodname\_dotcom %} stores input parameters as environment variables. Input ids with uppercase letters are converted to lowercase during runtime. We recommended using lowercase input ids.

### Example

This example configures two inputs: numOctocats and octocatEyeColor. The numOctocats input is not required and will default to a value of ‘1’. The octocatEyeColor input is required and has no default value. Workflow files that use this action must use the `with` keyword to set an input value for octocatEyeColor. For more information about the `with` syntax, see “[Workflow syntax for {% data variables.product.prodname\_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith).”

    inputs:
      numOctocats:
        description: 'Number of Octocats'
        required: false
        default: '1'
      octocatEyeColor:
        description: 'Eye color of the Octocats'
        required: true

When you specify an input in a workflow file or use a default input value, {% data variables.product.prodname\_dotcom %} creates an environment variable for the input with the name `INPUT_<VARIABLE_NAME>`. The environment variable created converts input names to uppercase letters and replaces spaces with `_` characters.

If the action is written using a [composite](/actions/creating-actions/creating-a-composite-run-steps-action), then it will not automatically get `INPUT_<VARIABLE_NAME>`. If the conversion doesn’t occur, you can change these inputs manually.

To access the environment variable in a Docker container action, you must pass the input using the `args` keyword in the action metadata file. For more information about the action metadata file for Docker container actions, see “[Creating a Docker container action](/articles/creating-a-docker-container-action#creating-an-action-metadata-file).”

For example, if a workflow defined the `numOctocats` and `octocatEyeColor` inputs, the action code could read the values of the inputs using the `INPUT_NUMOCTOCATS` and `INPUT_OCTOCATEYECOLOR` environment variables.

### `inputs.<input_id>`

**Required** A `string` identifier to associate with the input. The value of `<input_id>` is a map of the input’s metadata. The `<input_id>` must be a unique identifier within the `inputs` object. The `<input_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

### `inputs.<input_id>.description`

**Required** A `string` description of the input parameter.

### `inputs.<input_id>.required`

**Required** A `boolean` to indicate whether the action requires the input parameter. Set to `true` when the parameter is required.

### `inputs.<input_id>.default`

**Optional** A `string` representing the default value. The default value is used when an input parameter isn’t specified in a workflow file.

### `inputs.<input_id>.deprecationMessage`

**Optional** If the input parameter is used, this `string` is logged as a warning message. You can use this warning to notify users that the input is deprecated and mention any alternatives.

## `outputs`

**Optional** Output parameters allow you to declare data that an action sets. Actions that run later in a workflow can use the output data set in previously run actions. For example, if you had an action that performed the addition of two inputs (x + y = z), the action could output the sum (z) for other actions to use as an input.

If you don’t declare an output in your action metadata file, you can still set outputs and use them in a workflow. For more information on setting outputs in an action, see “[Workflow commands for {% data variables.product.prodname\_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter).”

### Example

    outputs:
      sum: # id of the output
        description: 'The sum of the inputs'

### `outputs.<output_id>`

**Required** A `string` identifier to associate with the output. The value of `<output_id>` is a map of the output’s metadata. The `<output_id>` must be a unique identifier within the `outputs` object. The `<output_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

### `outputs.<output_id>.description`

**Required** A `string` description of the output parameter.

## `outputs` for composite run steps actions

**Optional** `outputs` use the same parameters as `outputs.<output_id>` and `outputs.<output_id>.description` (see “[`outputs` for {% data variables.product.prodname\_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)”), but also includes the `value` token.

### Example

{% raw %}

    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps:
        - id: random-number-generator
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash

{% endraw %}

### `outputs.<output_id>.value`

**Required** The value that the output parameter will be mapped to. You can set this to a `string` or an expression with context. For example, you can use the `steps` context to set the `value` of an output to the output value of a step.

For more information on how to use context and expression syntax, see “[Context and expression syntax for {% data variables.product.prodname\_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)”.

## `runs` for JavaScript actions

**Required** Configures the path to the action’s code and the application used to execute the code.

### Example using Node.js

    runs:
      using: 'node12'
      main: 'main.js'

### `runs.using`

**Required** The application used to execute the code specified in [`main`](#runsmain).

### `runs.main`

**Required** The file that contains your action code. The application specified in [`using`](#runsusing) executes this file.

### `pre`

**Optional** Allows you to run a script at the start of a job, before the `main:` action begins. For example, you can use `pre:` to run a prerequisite setup script. The application specified with the [`using`](#runsusing) syntax will execute this file. The `pre:` action always runs by default but you can override this using [`pre-if`](#pre-if).

In this example, the `pre:` action runs a script called `setup.js`:

    runs:
      using: 'node12'
      pre: 'setup.js'
      main: 'index.js'
      post: 'cleanup.js'

### `pre-if`

**Optional** Allows you to define conditions for the `pre:` action execution. The `pre:` action will only run if the conditions in `pre-if` are met. If not set, then `pre-if` defaults to `always()`. Note that the `step` context is unavailable, as no steps have run yet.

In this example, `cleanup.js` only runs on Linux-based runners:

      pre: 'cleanup.js'
      pre-if: runner.os == 'linux'

### `post`

**Optional** Allows you to run a script at the end of a job, once the `main:` action has completed. For example, you can use `post:` to terminate certain processes or remove unneeded files. The application specified with the [`using`](#runsusing) syntax will execute this file.

In this example, the `post:` action runs a script called `cleanup.js`:

    runs:
      using: 'node12'
      main: 'index.js'
      post: 'cleanup.js'

The `post:` action always runs by default but you can override this using `post-if`.

### `post-if`

**Optional** Allows you to define conditions for the `post:` action execution. The `post:` action will only run if the conditions in `post-if` are met. If not set, then `post-if` defaults to `always()`.

For example, this `cleanup.js` will only run on Linux-based runners:

      post: 'cleanup.js'
      post-if: runner.os == 'linux'

## `runs` for composite run steps actions

**Required** Configures the path to the composite action, and the application used to execute the code.

### `runs.using`

**Required** To use a composite run steps action, set this to `"composite"`.

### `runs.steps`

**Required** The run steps that you plan to run in this action.

#### `runs.steps[*].run`

**Required** The command you want to run. This can be inline or a script in your action repository:

{% raw %}

    runs:
      using: "composite"
      steps:
        - run: ${{ github.action_path }}/test/script.sh
          shell: bash

{% endraw %}

Alternatively, you can use `$GITHUB_ACTION_PATH`:

    runs:
      using: "composite"
      steps:
        - run: $GITHUB_ACTION_PATH/script.sh
          shell: bash

For more information, see “[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”.

#### `runs.steps[*].shell`

**Required** The shell where you want to run the command. You can use any of the shells listed [here](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

#### `runs.steps[*].name`

**Optional** The name of the composite run step.

#### `runs.steps[*].id`

**Optional** A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see “[Context and expression syntax for {% data variables.product.prodname\_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)”.

#### `runs.steps[*].env`

**Optional** Sets a `map` of environment variables for only that step. If you want to modify the environment variable stored in the workflow, use {% ifversion fpt or ghes &gt; 2.22 or ghae %}`echo "{name}={value}" >> $GITHUB_ENV`{% else %}`echo "::set-env name={name}::{value}"`{% endif %} in a composite run step.

#### `runs.steps[*].working-directory`

**Optional** Specifies the working directory where the command is run.

## `runs` for Docker actions

**Required** Configures the image used for the Docker action.

### Example using a Dockerfile in your repository

    runs:
      using: 'docker'
      image: 'Dockerfile'

### Example using public Docker registry container

    runs:
      using: 'docker'
      image: 'docker://debian:stretch-slim'

### `runs.using`

**Required** You must set this value to `'docker'`.

### `pre-entrypoint`

**Optional** Allows you to run a script before the `entrypoint` action begins. For example, you can use `pre-entrypoint:` to run a prerequisite setup script. {% data variables.product.prodname\_actions %} uses `docker run` to launch this action, and runs the script inside a new container that uses the same base image. This means that the runtime state is different from the main `entrypoint` container, and any states you require must be accessed in either the workspace, `HOME`, or as a `STATE_` variable. The `pre-entrypoint:` action always runs by default but you can override this using [`pre-if`](#pre-if).

The application specified with the [`using`](#runsusing) syntax will execute this file.

In this example, the `pre-entrypoint:` action runs a script called `setup.sh`:

    runs:
      using: 'docker'
      image: 'Dockerfile'
      args:
        - 'bzz'
      pre-entrypoint: 'setup.sh'
      entrypoint: 'main.sh'

### `runs.image`

**Required** The Docker image to use as the container to run the action. The value can be the Docker base image name, a local `Dockerfile` in your repository, or a public image in Docker Hub or another registry. To reference a `Dockerfile` local to your repository, the file must be named `Dockerfile` and you must use a path relative to your action metadata file. The `docker` application will execute this file.

### `runs.env`

**Optional** Specifies a key/value map of environment variables to set in the container environment.

### `runs.entrypoint`

**Optional** Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn’t already specified. Use `entrypoint` when the `Dockerfile` does not specify an `ENTRYPOINT` or you want to override the `ENTRYPOINT` instruction. If you omit `entrypoint`, the commands you specify in the Docker `ENTRYPOINT` instruction will execute. The Docker `ENTRYPOINT` instruction has a _shell_ form and _exec_ form. The Docker `ENTRYPOINT` documentation recommends using the _exec_ form of the `ENTRYPOINT` instruction.

For more information about how the `entrypoint` executes, see “[Dockerfile support for {% data variables.product.prodname\_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint).”

### `post-entrypoint`

**Optional** Allows you to run a cleanup script once the `runs.entrypoint` action has completed. {% data variables.product.prodname\_actions %} uses `docker run` to launch this action. Because {% data variables.product.prodname\_actions %} runs the script inside a new container using the same base image, the runtime state is different from the main `entrypoint` container. You can access any state you need in either the workspace, `HOME`, or as a `STATE_` variable. The `post-entrypoint:` action always runs by default but you can override this using [`post-if`](#post-if).

    runs:
      using: 'docker'
      image: 'Dockerfile'
      args:
        - 'bzz'
      entrypoint: 'main.sh'
      post-entrypoint: 'cleanup.sh'

### `runs.args`

**Optional** An array of strings that define the inputs for a Docker container. Inputs can include hardcoded strings. {% data variables.product.prodname\_dotcom %} passes the `args` to the container’s `ENTRYPOINT` when the container starts up.

The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:

{% data reusables.github-actions.dockerfile-guidelines %}

If you need to pass environment variables into an action, make sure your action runs a command shell to perform variable substitution. For example, if your `entrypoint` attribute is set to `"sh -c"`, `args` will be run in a command shell. Alternatively, if your `Dockerfile` uses an `ENTRYPOINT` to run the same command (`"sh -c"`), `args` will execute in a command shell.

For more information about using the `CMD` instruction with {% data variables.product.prodname\_actions %}, see “[Dockerfile support for {% data variables.product.prodname\_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd).”

#### Example

{% raw %}

    runs:
      using: 'docker'
      image: 'Dockerfile'
      args:
        - ${{ inputs.greeting }}
        - 'foo'
        - 'bar'

{% endraw %}

## `branding`

You can use a color and [Feather](https://feathericons.com/) icon to create a badge to personalize and distinguish your action. Badges are shown next to your action name in [{% data variables.product.prodname\_marketplace %}](https://github.com/marketplace?type=actions).

### Example

    branding:
      icon: 'award'
      color: 'green'

### `branding.color`

The background color of the badge. Can be one of: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple`, or `gray-dark`.

### `branding.icon`

The name of the [Feather](https://feathericons.com/) icon to use.

<table><tbody><tr class="odd"><td>activity</td><td>airplay</td><td>alert-circle</td><td>alert-octagon</td></tr><tr class="even"><td>alert-triangle</td><td>align-center</td><td>align-justify</td><td>align-left</td></tr><tr class="odd"><td>align-right</td><td>anchor</td><td>aperture</td><td>archive</td></tr><tr class="even"><td>arrow-down-circle</td><td>arrow-down-left</td><td>arrow-down-right</td><td>arrow-down</td></tr><tr class="odd"><td>arrow-left-circle</td><td>arrow-left</td><td>arrow-right-circle</td><td>arrow-right</td></tr><tr class="even"><td>arrow-up-circle</td><td>arrow-up-left</td><td>arrow-up-right</td><td>arrow-up</td></tr><tr class="odd"><td>at-sign</td><td>award</td><td>bar-chart-2</td><td>bar-chart</td></tr><tr class="even"><td>battery-charging</td><td>battery</td><td>bell-off</td><td>bell</td></tr><tr class="odd"><td>bluetooth</td><td>bold</td><td>book-open</td><td>book</td></tr><tr class="even"><td>bookmark</td><td>box</td><td>briefcase</td><td>calendar</td></tr><tr class="odd"><td>camera-off</td><td>camera</td><td>cast</td><td>check-circle</td></tr><tr class="even"><td>check-square</td><td>check</td><td>chevron-down</td><td>chevron-left</td></tr><tr class="odd"><td>chevron-right</td><td>chevron-up</td><td>chevrons-down</td><td>chevrons-left</td></tr><tr class="even"><td>chevrons-right</td><td>chevrons-up</td><td>circle</td><td>clipboard</td></tr><tr class="odd"><td>clock</td><td>cloud-drizzle</td><td>cloud-lightning</td><td>cloud-off</td></tr><tr class="even"><td>cloud-rain</td><td>cloud-snow</td><td>cloud</td><td>code</td></tr><tr class="odd"><td>command</td><td>compass</td><td>copy</td><td>corner-down-left</td></tr><tr class="even"><td>corner-down-right</td><td>corner-left-down</td><td>corner-left-up</td><td>corner-right-down</td></tr><tr class="odd"><td>corner-right-up</td><td>corner-up-left</td><td>corner-up-right</td><td>cpu</td></tr><tr class="even"><td>credit-card</td><td>crop</td><td>crosshair</td><td>database</td></tr><tr class="odd"><td>delete</td><td>disc</td><td>dollar-sign</td><td>download-cloud</td></tr><tr class="even"><td>download</td><td>droplet</td><td>edit-2</td><td>edit-3</td></tr><tr class="odd"><td>edit</td><td>external-link</td><td>eye-off</td><td>eye</td></tr><tr class="even"><td>facebook</td><td>fast-forward</td><td>feather</td><td>file-minus</td></tr><tr class="odd"><td>file-plus</td><td>file-text</td><td>file</td><td>film</td></tr><tr class="even"><td>filter</td><td>flag</td><td>folder-minus</td><td>folder-plus</td></tr><tr class="odd"><td>folder</td><td>gift</td><td>git-branch</td><td>git-commit</td></tr><tr class="even"><td>git-merge</td><td>git-pull-request</td><td>globe</td><td>grid</td></tr><tr class="odd"><td>hard-drive</td><td>hash</td><td>headphones</td><td>heart</td></tr><tr class="even"><td>help-circle</td><td>home</td><td>image</td><td>inbox</td></tr><tr class="odd"><td>info</td><td>italic</td><td>layers</td><td>layout</td></tr><tr class="even"><td>life-buoy</td><td>link-2</td><td>link</td><td>list</td></tr><tr class="odd"><td>loader</td><td>lock</td><td>log-in</td><td>log-out</td></tr><tr class="even"><td>mail</td><td>map-pin</td><td>map</td><td>maximize-2</td></tr><tr class="odd"><td>maximize</td><td>menu</td><td>message-circle</td><td>message-square</td></tr><tr class="even"><td>mic-off</td><td>mic</td><td>minimize-2</td><td>minimize</td></tr><tr class="odd"><td>minus-circle</td><td>minus-square</td><td>minus</td><td>monitor</td></tr><tr class="even"><td>moon</td><td>more-horizontal</td><td>more-vertical</td><td>move</td></tr><tr class="odd"><td>music</td><td>navigation-2</td><td>navigation</td><td>octagon</td></tr><tr class="even"><td>package</td><td>paperclip</td><td>pause-circle</td><td>pause</td></tr><tr class="odd"><td>percent</td><td>phone-call</td><td>phone-forwarded</td><td>phone-incoming</td></tr><tr class="even"><td>phone-missed</td><td>phone-off</td><td>phone-outgoing</td><td>phone</td></tr><tr class="odd"><td>pie-chart</td><td>play-circle</td><td>play</td><td>plus-circle</td></tr><tr class="even"><td>plus-square</td><td>plus</td><td>pocket</td><td>power</td></tr><tr class="odd"><td>printer</td><td>radio</td><td>refresh-ccw</td><td>refresh-cw</td></tr><tr class="even"><td>repeat</td><td>rewind</td><td>rotate-ccw</td><td>rotate-cw</td></tr><tr class="odd"><td>rss</td><td>save</td><td>scissors</td><td>search</td></tr><tr class="even"><td>send</td><td>server</td><td>settings</td><td>share-2</td></tr><tr class="odd"><td>share</td><td>shield-off</td><td>shield</td><td>shopping-bag</td></tr><tr class="even"><td>shopping-cart</td><td>shuffle</td><td>sidebar</td><td>skip-back</td></tr><tr class="odd"><td>skip-forward</td><td>slash</td><td>sliders</td><td>smartphone</td></tr><tr class="even"><td>speaker</td><td>square</td><td>star</td><td>stop-circle</td></tr><tr class="odd"><td>sun</td><td>sunrise</td><td>sunset</td><td>tablet</td></tr><tr class="even"><td>tag</td><td>target</td><td>terminal</td><td>thermometer</td></tr><tr class="odd"><td>thumbs-down</td><td>thumbs-up</td><td>toggle-left</td><td>toggle-right</td></tr><tr class="even"><td>trash-2</td><td>trash</td><td>trending-down</td><td>trending-up</td></tr><tr class="odd"><td>triangle</td><td>truck</td><td>tv</td><td>type</td></tr><tr class="even"><td>umbrella</td><td>underline</td><td>unlock</td><td>upload-cloud</td></tr><tr class="odd"><td>upload</td><td>user-check</td><td>user-minus</td><td>user-plus</td></tr><tr class="even"><td>user-x</td><td>user</td><td>users</td><td>video-off</td></tr><tr class="odd"><td>video</td><td>voicemail</td><td>volume-1</td><td>volume-2</td></tr><tr class="even"><td>volume-x</td><td>volume</td><td>watch</td><td>wifi-off</td></tr><tr class="odd"><td>wifi</td><td>wind</td><td>x-circle</td><td>x-square</td></tr><tr class="even"><td>x</td><td>zap-off</td><td>zap</td><td>zoom-in</td></tr><tr class="odd"><td>zoom-out</td><td></td><td></td><td></td></tr></tbody></table>
