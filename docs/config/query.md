# query
query协议是以一种简单的方式来查询服务器的状态。Pumpkin 完全支持query协议。

## 配置query

#### `enabled`: 布尔值
是否监听query协议请求。

:::code-group
```toml [features.toml] {2}
[query]
enabled = true
```
:::

#### `port`: 整数 (0-65535) (可选)
设置监听query协议请求的端口。如果未指定，则使用与服务器相同的端口。

:::code-group
```toml [features.toml] {3}
[query]
enabled = true
port = 12345
```
:::

## 默认配置
默认情况下，query是禁用的。如果启用，它将在服务器端口上运行，除非明确指定。

:::code-group
```toml [features.toml]
[query]
enabled = true
port = 25565
```
:::

