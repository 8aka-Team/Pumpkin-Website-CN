# 创建一个新项目
Pumpkin 插件使用 [Cargo](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html) 构建系统。

这个插件的完整代码可以在 [插件模板](https://github.com/vyPal/Hello-Pumpkin) 中找到。
## 初始化一个新的 crate 
首先我们需要创建一个新的项目文件夹，你可以在你创建的文件夹中运行以下命令：
```bash
cargo new <项目名称> --lib
```
这将创建一个包含几个文件的文件夹。文件夹结构应该如下所示：
```
├── Cargo.toml
└── src
    └── lib.rs
```

## 配置 crate
由于 Pumpkin 插件是在运行时作为动态库加载的，我们需要告诉 Cargo 将这个 crate 构建为一个动态库。打开 `Cargo.toml` 文件并添加以下几行：
```toml
[package]
name = "hello-pumpkin"
version = "0.1.0"
edition = "2021"

[lib] // [!code ++:3]
crate-type = ["cdylib"]

[dependencies]
```

接下来我们需要添加一些基本的依赖项。由于 Pumpkin 仍在早期开发中，内部 crate 尚未发布到 crates.io，因此我们需要告诉 Cargo 直接从 GitHub 下载依赖项。将以下内容添加到 `Crago.toml`中：
```toml
[package]
name = "hello-pumpkin"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
pumpkin = { git = "https://github.com/Pumpkin-MC/Pumpkin.git", branch = "master", package = "pumpkin" } // [!code ++:9]
pumpkin-util = { git = "https://github.com/Pumpkin-MC/Pumpkin.git", branch = "master", package = "pumpkin-util" }
pumpkin-api-macros = { git = "https://github.com/Pumpkin-MC/Pumpkin.git", branch = "master", package = "pumpkin-api-macros" }

async-trait = "0.1.83"
tokio = { version = "1.42", features = [ "full" ] }

env_logger = "0.11.6"
log = "0.4.22"
```

这从 Pumpkin 添加了三个依赖项：
- `pumpkin` - 这是包含大多数高级类型定义的基础 crate
- `pumpkin-util` - Pumpkin 使用的其他工具（如 TextComponent）
- `pumpkin-api-macros` - 用于简化插件开发的宏

以及这些其他依赖项：
- `async-trait` - 一个允许插件异步工作的工具
- `tokio` - 一个 Rust 异步运行时
- `log` - 用于日志记录
- `env_logger` - 使用环境变量配置日志记录器
