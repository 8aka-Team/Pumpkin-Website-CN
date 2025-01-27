# 编写基本逻辑。
## 插件基础
即使是基本插件，其内部也有很多复杂的逻辑，因此为了极大地简化插件开发，我们将使用`pumpkin-api-macros` crate 来创建一个基本的空插件。

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
这将创建一个空插件，并实现所有必要的方法，以便 pumpkin 能够加载它。

现在我们可以尝试第一次编译我们的插件，为此，请在项目文件夹中运行以下命令：
```bash
cargo build --release
```
::: tip NOTICE
如果你使用的是 Windows，你必须使用`--release`flag，否则你会遇到很多问题。 如果你使用的是其他平台，就没必要使用这个 flag。

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

你可以将此文件重命名为你喜欢的任何名称，但必须保持文件扩展名（.dll、.dylib 或 .so）不变。

## 测试插件
现在我们已经拥有了插件的二进制文件，接下来可以在南瓜服务端上对其进行测试。安装插件的过程非常简单，只需将我们刚刚构建的插件二进制文件放入南瓜服务端的`plugins/`文件夹中即可！

得益于`#[plugin_impl]`宏，插件的详细信息（如名称、作者、版本和描述）将被内置到二进制文件中，以便服务端可以读取它们。

当你启动服务端并运行`/plugins`命令时，你应该会看到类似这样的输出：
```
There is 1 plugin loaded:
hello-pumpkin
```

## 基本方法
Pumpkin 服务端目前使用两种“方法”来告知插件其状态。这些方法是 `on_load` 和 `on_unload`。

有些方法不必实现，但你通常至少会实现 `on_load` 方法。在这个方法中，你可以访问一个 `Context` 对象，该对象可以为插件提供有关服务端的信息，但也允许插件注册命令处理器或事件。

为了便于实现这些方法，`pumpkin-api-macros` crate 提供了一个宏。将以下几行添加到你的 `src/lib.rs` 文件中：
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
重要的是，你要在 `#[plugin_impl]` 代码块之前定义插件的方法。
:::

这个方法获得了一个可变引用到它自己（在这个例子中是 `MyPlugin` 结构体），它可以用来初始化存储在插件主结构体中的任何数据，以及一个 `Context` 对象的引用。这个对象是根据插件的元数据专门为这个插件构建的。

### 在`Context`对象上实现的方法：
```rs
fn get_data_folder() -> String
```
返回一个专门用于此插件的文件夹路径，应用于持久数据存储
```rs
async fn get_player_by_name(player_name: String) -> Option<Arc<Player>>
```
如果找到名为 `player_name` 的玩家（必须是当前在线的），此函数将返回对他的引用。
```rs
async fn register_command(tree: CommandTree, permission: PermissionLvl)
```
注册一个新的命令处理器，具有最低所需权限级别。
```rs
async fn register_event(handler: H, priority: EventPriority, blocking: bool)
```
注册一个新的事件处理器，设置优先级以及是否阻塞。

## 基本的 on-load 方法
目前，我们只会实现一个非常基本的 `on_load`方法，以便能够看到插件正在运行。

在这里面，我们将设置 env_logger ，并设置一个 “Hello, Pumpkin!”，以便我们能够看到我们的插件在运行。

将此添加到 `on_load`方法中：
```rs
#[plugin_method]
async fn on_load(&mut self, server: &Context) -> Result<(), String> {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init(); // [!code ++:3]

    log::info!("Hello, Pumpkin!");

    Ok(())
}
```

如果我们再次构建插件并启动服务端，你应该现在日志的某个地方看到这个消息：
```log
[2025-01-18T09:36:16Z INFO  hello_pumpkin] Hello, Pumpkin!
```