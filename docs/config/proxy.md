# 代理
许多服务器使用代理来管理连接并在服务器之间分配玩家。Pumpkin 支持以下代理协议：

- [Velocity](https://papermc.io/software/velocity)
- [BungeeCord](https://www.spigotmc.org/wiki/bungeecord-installation/)

> [!TIP]
> 对于大多数服务器网络，推荐使用 Velocity。Velocity 更现代化且性能优于 BungeeCord。

## 配置代理

#### `enabled`: 布尔值

启用代理支持。

:::code-group
```toml [features.toml]{2}
[proxy]
enabled = true
```
:::

### Velocity

#### `enabled`: 布尔值

是否启用 Velocity 支持。

:::code-group
```toml [features.toml]{2}
[proxy.velocity]
enabled = true
```
:::

#### `secret`: 字符串

在 Velocity 中配置的密钥。

:::code-group
```toml [features.toml]{3}
[proxy.velocity]
enabled = true
secret = "[在此处填写代理密钥]"
```
:::

### BungeeCord

#### `enabled`: 布尔值
是否启用 BungeeCord 支持。

:::code-group
```toml [features.toml]{2}
[proxy.bungeecord]
enabled = true
```
:::

> [!CAUTION]
> 确保服务器的防火墙配置正确，因为 BungeeCord 无法验证玩家信息是来自您的代理还是冒充者。

## 默认配置
默认情况下，代理支持是禁用的。以下是默认配置：

:::code-group
```toml [features.toml]
[proxy]
enabled = false

[proxy.velocity]
enabled = false
secret = ""

[proxy.bungeecord]
enabled = false
```
:::

