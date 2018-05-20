## Test262-Harness

An experimental Node-based test262 harness. Once this harness has stabilized, I plan to push to include it by default in official test262.

Requires Node 6 or above.

## Quick Start

1. Clone **test262** locally:
    ```
    git clone https://github.com/tc39/test262.git --depth 1
    cd test262
    ```
2. Install **test262-harness**: 
    ```
    npm install -g test262-harness
    ```
3. Run some tests!
    ```
    test262-harness test/**/*.js
    ```

Run `test262-harness --help` for details on the various configuration options.

## Options

| Name    | Action      |
|------------|---------------|
| `--hostType` | Type of host to run tests in. See [eshost's supported hosts](https://github.com/bterlson/eshost#supported-hosts) for available options.
| `--hostPath` | Path to the host executable.
| `--hostArgs` | Any additional arguments to pass to the host when invoking it (eg. `--harmony`, `--es6all`, etc). 
| `-t`, `--threads` | Run this many tests in parallel. Note that the browser runners don't work great with t > 1.
| `-r`, `--reporter` | Format of data written to standard output. Currently either `json` or `simple`. Default `simple`.
|`--features` | Comma-separated list of [`features`](https://github.com/tc39/test262/blob/master/features.txt) to filter for. Example: `--features="BigInt,Atomics"`.
|`--reporter-keys` | Comma-separated list of keys to include in output of `json` reporter.
|`--test262Dir` | Optional. Root test262 directory and is used to locate the includes directory.
|`--includesDir` | Includes directory. By default inferred from test262Dir or else detected by walking upward from the first test found.
|`--prelude` | Path to a file to include before every test (useful for testing polyfills for example)
|`--timeout` | Set a custom test timeout (in ms, default 10000)
|`-v`, `--version` | Print the current version of test262-harness
|`--babelPresets` | Babel presets used to transpile code. E.g.: `stage-2`, `stage-3`
|`-h`, `--help` | Show help
| `--acceptVersion` | Optional. Execute tests from a version of Test262 that differs from the versions supported by this utility. This may cause the utility to report invalid test results.
