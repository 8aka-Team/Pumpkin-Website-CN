# RCON
RCON 是一种协议，允许您从不同的设备远程管理服务器。Pumpkin 完全支持 RCON。

## 配置 RCON

#### `enabled`: 布尔值

:::code-group
```toml [features.toml] {2}
[rcon]
enabled = true
```
:::

#### `address`: 字符串
RCON 应监听的地址和端口。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
address = "0.0.0.0:25575"
```
:::

#### `password`: 字符串
用于 RCON 身份验证的密码。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
password = "[your safe password here]"
```
:::

#### `max_connections`: 整数
允许的最大 RCON 连接数。设置为 0 以禁用限制。

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
max_connections = 5
```
:::

### 日志记录
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

# RCON
RCON is a protocol that allows you to remotely manage the server from a different device. Pumpkin has full support for RCON.

## Configuring RCON

#### `enabled`: Boolean

:::code-group
```toml [features.toml] {2}
[rcon]
enabled = true
```
:::

#### `address`: String
The address and port that RCON should listen to.

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
address = "0.0.0.0:25575"
```
:::

#### `password`: String
The password to use for RCON authentication.

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
password = "[your safe password here]"
```
:::

#### `max_connections`: Integer
The max number of RCON connections allowed at a single time. Set to 0 to disable a limit.

:::code-group
```toml [features.toml] {3}
[rcon]
enabled = true
max_connections = 5
```
:::

### Logging
#### `log_logged_successfully`: Boolean
Whether successful logins should be logged to console or not.

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_logged_successfully = true
```
:::

#### `log_wrong_password`: Boolean
Whether wrong password attempts should be logged to console or not.

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_logged_successfully = true
```
:::

#### `log_commands`: Boolean
Whether to log commands ran from RCON to console or not.

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_commands = true
```
:::

#### `log_quit`: Boolean
Whether RCON client quit should be logged or not.

:::code-group
```toml [features.toml] {2}
[rcon.logging]
log_quit = true
```
:::

## Default Config
By default RCON is disabled.

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