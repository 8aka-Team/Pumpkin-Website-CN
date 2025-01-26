# 日志记录
Pumpkin 允许您自定义日志内容。

## 配置日志记录

#### `enabled`: 布尔值
是否启用日志记录。

:::code-group
```toml [features.toml] {2}
[logging]
enabled = true
```
:::

#### `level`: 枚举
设置应记录哪些内容。可能的值为：
- Off
- Error
- Warn
- Info
- Debug
- Trace

:::code-group
```toml [features.toml] {3}
[logging]
enabled = true
level = "调试"
```
:::

#### `env`: 布尔值
是否允许通过设置 `RUST_LOG` 环境变量来选择日志级别。

:::code-group
```toml [features.toml] {3}
[logging]
enabled = true
env = true
```
:::

#### `threads`: 布尔值
是否在日志消息中打印线程信息。

:::code-group
```toml [features.toml] {3}
[logging]
enabled = true
threads = false
```
:::

#### `color`: 布尔值
是否在控制台中打印彩色日志。

:::code-group
```toml [features.toml] {3}
[logging]
enabled = true
color = false
```
:::

#### `timestamp`: 布尔值
是否在消息中打印时间戳。

:::code-group
```toml [features.toml] {3}
[logging]
enabled = true
timestamp = false
```
:::

## 默认配置
默认情况下，日志记录是启用的，并且会在 `信息` 级别打印带有颜色、线程信息和时间戳的日志。

:::code-group
```toml [features.toml]
[logging]
enabled = true
level = "信息"
env = false
threads = true
color = true
timestamp = true
```
:::

