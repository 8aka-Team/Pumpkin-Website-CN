# 压缩
压缩用于减少数据包的大小。这有助于减少服务端的带宽使用，并帮助网络连接较慢的玩家，但会增加CPU资源占用。

## 配置压缩

#### `enabled`: 布尔值
是否启用数据包压缩。

> [!TIP]
> 如果服务端位于代理后端，禁用压缩是有益的。

:::code-group
```toml [features.toml] {2}
[packet_compression]
enabled = true
```
:::

#### `threshold`: 整数 (0-1024)

设置服务端尝试压缩数据包之前的最小数据包大小。

> [!CAUTION]
> 增加此值可能会影响网络连接较慢的玩家。

:::code-group
```toml [features.toml] {2}
[packet_compression]
threshold = 256
```
:::

#### `level`: 整数 (0-9)

设置一个介于0到9之间的值：0表示禁用压缩，1表示最快的压缩（以大小为代价），9表示最大压缩（以速度为代价）。

:::code-group
```toml [features.toml] {2}
[packet_compression]
level = 4
```
:::

## 默认配置

默认情况下，压缩是启用的。

:::code-group
```toml [features.toml]
[packet_compression]
enabled = true
threshold = 256
level = 4
```
:::
