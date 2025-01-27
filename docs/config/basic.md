# 基本配置

代表 `configuration.toml`

## 服务端地址

设置服务端绑定的地址。
（绑定后只允许来自该 IP 的玩家进入服务端）

:::code-group
```toml [configuration.toml] {2}
server_address = "0.0.0.0:25565"
```
:::

## 种子

设置世界生成的种子。

:::code-group
```toml [configuration.toml] {2}
seed = ""
```
:::

## 最大玩家数

设置服务端允许的最大玩家数量。

:::code-group
```toml [configuration.toml] {2}
max_players = 100000
```
:::

## 视野距离

设置玩家的最大视野距离。

:::code-group
```toml [configuration.toml] {2}
view_distance = 10
```
:::

## 模拟距离

设置玩家的最大模拟距离。

:::code-group
```toml [configuration.toml] {2}
simulation_distance = 10
```
:::

## 默认难度

设置游戏的默认难度。

:::code-group
```toml [configuration.toml] {2}
default_difficulty = "Normal"
```
:::


```toml
Peaceful
Easy
Normal
Hard
```

## 操作权限等级

设置所有玩家的默认权限等级。

:::code-group
```toml [configuration.toml] {2}
op_permission_level = 4
```
:::

## 允许下界

是否启用下界维度。

:::code-group
```toml [configuration.toml] {2}
allow_nether = true
```
:::

## 极限模式

是否启用服务端的极限模式。

:::code-group
```toml [configuration.toml] {2}
hardcore = false
```
:::

## 在线模式

是否启用在线模式。需要有效的 Minecraft 账户。

:::code-group
```toml [configuration.toml] {2}
online_mode = true
```
:::

## 加密

是否启用数据包加密。

> [!IMPORTANT]
> 启用在线模式时需要。

:::code-group
```toml [configuration.toml] {2}
encryption = true
```
:::

## 服务器描述

设置在服务器列表上显示的服务端描述。

:::code-group
```toml [configuration.toml] {2}
motd = "一款超快速的南瓜服务端！"
```
:::

## TPS

设置服务端的目标 Tick 速率。

:::code-group
```toml [configuration.toml] {2}
tps = 20.0
```
:::

## 默认游戏模式

设置玩家的默认游戏模式。

:::code-group
```toml [configuration.toml] {2}
default_gamemode = "Survival"
```
:::

```toml
Undefined
Survival
Creative
Adventure
Spectator
```

## IP隐藏

是否从日志中隐藏玩家 IP。

:::code-group
```toml [configuration.toml] {2}
scrub_ips = true
```
:::

## 使用图标

是否使用服务端图标。

:::code-group
```toml [configuration.toml] {2}
use_favicon = true
```
:::

## 图标路径

设置服务端图标的路径。

:::code-group
```toml [configuration.toml] {2}
favicon_path = "icon.png"
```
:::
