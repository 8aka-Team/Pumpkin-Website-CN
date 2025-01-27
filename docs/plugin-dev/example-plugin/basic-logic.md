# 正在编写基本逻辑。
## 插件基础
即使是基本插件，其内部也有很多复杂的逻辑，因此为了极大地简化插件开发，我们将使用`pumpkin-api-macros` crate来创建一个基本的空插件。

打开`src/lib.rs`文件，并将其内容替换为以下内容：
```rs:line-numbers
use pumpkin_api_macros::plugin_impl;

#[plugin_impl]
pub struct MyPlugin {}

impl MyPlugin {
    pub fn new() -> Self {
        MyPlugin {}
    }
}

impl Default for MyPlugin {
    fn default() -> Self {
        Self::new()
    }
}
```
这将创建一个空插件，并实现所有必要的方法，以便pumpkin能够加载它。

现在我们可以尝试第一次编译我们的插件，为此，请在项目文件夹中运行以下命令：
```bash
cargo build --release
```
::: tip NOTICE
如果你使用的是Windows，你必须使用`--release`flag，否则你会遇到很多问题。 如果你使用的是其他平台，就没必要使用这个flag。
:::
第一次编译会花费一些时间，但是后续的编译会更快。

如果一切顺利，你应该会看到类似这样的消息。:
```log
╰─ cargo build --release
   Compiling hello-pumpkin v0.1.0 (/home/vypal/Dokumenty/GitHub/hello-pumpkin)
    Finished `release` profile [optimized] target(s) in 0.68s
```

现在你可以前往`./target/release`文件夹（或者如果你没有使用`--release`，则是`./target/debug`，找到你的插件二进制文件。

根据你的操作系统，文件将有以下三个可能的名称之一：
- Windows: `hello-pumpkin.dll`
- MacOS: `libhello-pumpkin.dylib`
- Linux: `libhello-pumpkin.so`

::: info NOTE
如果你在`Cargo.toml`文件中使用了不同的项目名称，请查找包含你的项目名称的文件。
:::

You can rename this file to whatever you like, however you must keep the file extension (`.dll`, `.dylib`, or `.so`) the same.

## Testing the plugin
Now that we have our plugin binary, we can go ahead and test it on the Pumpkin server. Installing a plugin is as simple as putting the plugin binary that we just built into the `plugins/` folder of your Pumpkin server!

Thanks to the `#[plugin_impl]` macro, the plugin will have it's details (like the name, authors, version, and description) built into the binary so that the server can read them. 

When you start up the server and run the `/plugins` command, you should see an output like this:
```
There is 1 plugin loaded:
hello-pumpkin
```

## Basic methods
The Pumpkin server currently uses two "methods" to tell the plugin about it's state. These methods are `on_load` and `on_unload`.

These methods don't have to be implemented, but you will usually implement at least the `on_load` method. In this method you get access to a `Context` object which can give the plugin access to information about the server, but also allows the plugin to register command handlers or events.

To make implementing these methods easier, there is another macro provided by the `pumpkin-api-macros` crate. Add these lines to your `src/lib.rs` file:
```rs
use pumpkin_api_macros::{plugin_impl, plugin_method}; // [!code ++:2]
use pumpkin::plugin::Context;
use pumpkin_api_macros::plugin_impl; // [!code --]

#[plugin_method] // [!code ++:4]
async fn on_load(&mut self, server: &Context) -> Result<(), String> {
    Ok(())
}

#[plugin_impl]
pub struct MyPlugin {}

impl MyPlugin {
    pub fn new() -> Self {
        MyPlugin {}
    }
}

impl Default for MyPlugin {
    fn default() -> Self {
        Self::new()
    }
}
```

::: warning IMPORTANT
It is important that you define any plugin methods before the `#[plugin_impl]` block
:::

This method gets a mutable reference to itself (in this case the `MyPlugin` struct) which it can use to initialize any data stored in the plugin's main struct, and a reference to a `Context` object. This object is specifically constructed for this plugin, based on the plugin's metadata.

### Methods implemented on the `Context` object:
```rs
fn get_data_folder() -> String
```
Returns the path to a folder dedicated to this plugin, which should be used for persistant data storage
```rs
async fn get_player_by_name(player_name: String) -> Option<Arc<Player>>
```
If a player by the name `player_name` is found (has to be currently online), this function will return a reference to him.
```rs
async fn register_command(tree: CommandTree, permission: PermissionLvl)
```
Registers a new command handler, with a minimum required permission level.
```rs
async fn register_event(handler: H, priority: EventPriority, blocking: bool)
```
Registers a new event handler with a set priority and if it is blocking or not.

## Basic on-load method
For now we will only implement a very basic `on_load` method to be able to see that the plugin is running.

Here we will setup the env_logger and setup a "Hello, Pumpkin!", so that we can see out plugin in action.

Add this to the `on_load` method:
```rs
#[plugin_method]
async fn on_load(&mut self, server: &Context) -> Result<(), String> {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init(); // [!code ++:3]

    log::info!("Hello, Pumpkin!");

    Ok(())
}
```

If we build the plugin again and start up the server, you should now see this somewhere in the log:
```log
[2025-01-18T09:36:16Z INFO  hello_pumpkin] Hello, Pumpkin!
```