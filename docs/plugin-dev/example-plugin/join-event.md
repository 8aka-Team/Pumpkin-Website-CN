# 编写一个事件处理器
主要功能之一，它们允许插件接入服务端的内部工作，并改变其行为以执行其他操作。以一个简单的例子来说，我们将实现一个处理 `player_join` 事件的处理器。
Pumpkin 插件事件系统试图复制 Bukkit/Spigot 事件系统，以便来自那里的开发者更容易学习 Pumpkin。
事件系统还使用继承，以便于从事件中获得预期的数据。
## 加入事件
为了进一步解释继承系统，让我们以玩家加入事件为例来说明：
```
Event
├── get_name()
│
├── CancellableEvent
│   ├── is_cancelled()
│   └── set_cancelled()
│   │
│   └── PlayerEvent
│       ├── get_player()
│       │
│       └── PlayerJoinEvent
│           ├── get_join_message()
│           └── set_join_message() 
```
如你所见，`PlayerJoinEvent` 公开了两个方法。但由于它继承了 `PlayerEvent` 类型，它也会公开 `get_player()` 方法。这种继承关系会继续向上追溯，因此最终，你在这里看到的所有方法都将在 `PlayerJoinEvent` 上可用。
## 实现加入事件
单独的事件处理器只是实现了 `EventHandler<T>` trait（其中T是特定事件的实现）的结构体。

### 什么是阻塞事件？
Pumpkin 插件事件系统区分了两种类型的事件：阻塞（blocking）和非阻塞（non-blocking）。每种类型都有其优势：
#### 阻塞事件
```diff
+ 可以修改事件（例如编辑加入消息）
+ 可以取消事件
+ 有一个优先级系统
- 按顺序执行
- 如果实现不当，可能会减慢服务端的运行速度
```
#### 非阻塞事件
```diff
+ 使用并行执行
+ 在所有阻塞事件完成后执行
+ 仍然可以进行一些修改（任何在 Mutex 或 RwLock 后面的内容）
- 不能取消事件
- 没有优先级系统
- 对事件的控制较少
```

### 编写一个处理器
由于我们的主要目标是改变玩家加入服务器时看到的欢迎消息，我们将选择低优先级的阻塞事件类型。
将此代码添加到 `on_load` 方法上方：
```rs
use async_trait::async_trait; // [!code ++:4]
use pumpkin_api_macros::{plugin_impl, plugin_method, with_runtime};
use pumpkin::plugin::{player::{join::PlayerJoinEventImpl, PlayerEvent, PlayerJoinEvent}, Context, EventHandler};
use pumpkin_util::text::{color::NamedColor, TextComponent};
use pumpkin_api_macros::{plugin_impl, plugin_method}; // [!code --:2]
use pumpkin::plugin::Context;

struct MyJoinHandler; // [!code ++:12]

#[with_runtime(global)]
#[async_trait]
impl EventHandler<PlayerJoinEventImpl> for MyJoinHandler {
    async fn handle_blocking(&self, event: &mut PlayerJoinEventImpl) {
        event.set_join_message(
            TextComponent::text(format!("Welcome, {}!", event.get_player().gameprofile.name))
                .color_named(NamedColor::Green),
        );
    }
}
```

**解释**:
- `struct MyJoinHandler;`: 我们事件处理器的结构体
- `#[with_runtime(global)]`: Pumpkin 使用了 tokio 异步运行时，它在插件边界处的行为可能会有些奇怪。尽管在本例中并非必要，但将所有与异步代码交互的异步 `impl` 用这个宏包裹起来是一个好习惯。
- `#[async_trait]`: Rust 没有对异步方法的特质的原生支持。因此，我们使用 `async_trait` crate 来允许这一点。
- `async fn handle_blocking()`: 由于我们选择这个事件是阻塞的，因此有必要实现 `handle_blocking()` 方法而不是 `handle()`方法。
::: warning IMPORTANT
It is important that the `#[with_runtime(global)]` macro is **above** the **`#[async_trait]`** macro. If they are in the opposite order, the `#[with_runtime(global)]` macro might not work
:::

### 注册处理器
现在我们已经编写了事件处理器，我们需要告诉插件使用它。我们可以通过在 `on_load` 方法中添加一行代码来实现这一点：
```rs
use pumpkin::plugin::{player::{join::PlayerJoinEventImpl, PlayerEvent, PlayerJoinEvent}, Context, EventHandler, EventPriority}; // [!code ++]
use pumpkin::plugin::{player::{join::PlayerJoinEventImpl, PlayerEvent, PlayerJoinEvent}, Context, EventHandler}; // [!code --]

#[plugin_method]
async fn on_load(&mut self, server: &Context) -> Result<(), String> {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init();

    log::info!("Hello, Pumpkin!");

    server.register_event(MyJoinHandler, EventPriority::Lowest, true).await; // [!code ++]

    Ok(())
}
```
现在我们构建插件并加入服务端，我们应该会看到一条带有我们用户名的绿色的 "Welcome !"消息！