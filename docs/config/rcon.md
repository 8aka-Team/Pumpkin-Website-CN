# RCON
RCON 是一种协议，允许您从不同的设备远程管理服务端。Pumpkin 完全支持 RCON。

## 配置 RCON

#### `enabled`: 布尔值

:::code-group
```toml [features.toml] {2}
[rcon]
enabled = true
```
:::

#### `address`: 字符串
设置 RCON 应监听的地址和端口。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
address = "0.0.0.0:25575"
```
:::

#### `password`: 字符串
设置用于 RCON 身份验证的密码。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
password = "[your safe password here]"
```
:::

#### `max_connections`: 整数型
设置允许的最大 RCON 连接数。设置为 0 以禁用限制。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
max_connections = 5
```
:::

### Logging
#### `log_logged_successfully`: 布尔值
是否应将成功登录记录到控制台。

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_logged_successfully = true
```
:::

#### `log_wrong_password`: 布尔值
是否应将错误密码尝试记录到控制台。

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_logged_successfully = true
```
:::

#### `log_commands`: 布尔值
是否应将从 RCON 运行的命令记录到控制台。

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_commands = true
```
:::

#### `log_quit`: 布尔值
是否应记录 RCON 客户端退出。

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_quit = true
```
:::

## 默认配置
默认情况下，RCON 是禁用的。

:::code-group
```toml [features.toml]
[rcon]
enabled = false
address = "0.0.0.0:25575"
password = ""
max_connections = 0

[rcon.logging]
log_logged_successfully = true
log_wrong_password = true
log_commands = true
log_quit = true
```
:::