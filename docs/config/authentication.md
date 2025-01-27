# 认证

服务器与 Mojang 的会话服务器进行身份验证，以确保客户端在合法的付费帐户上玩游戏。Pumpkin 允许您完全配置身份验证以支持第三方认证服务器。

## 配置认证

> [!WARNING]
> 大多数服务端不应更改默认的认证配置。这样做可能会产生意想不到的后果。**只有在您知道自己在做什么的情况下才更改这些设置！**

#### `enabled`: 布尔值

是否启用认证。

:::code-group

```toml [features.toml] {2}
[authentication]
enabled = false
```

:::

#### `prevent_proxy_connections`: 布尔值

是否阻止代理连接。

:::code-group

```toml [features.toml] {3}
[authentication]
enabled = true
prevent_proxy_connections = true
```

:::

#### `auth_url`: 字符串（可选）

设置用于认证的会话服务器 URL。如果未指定，则使用 Mojang 的会话服务器进行认证。

##### 占位符

| 占位符             | 描述      |
|-----------------|---------|
| `{username}`    | 用户名   |
| `{server_hash}` | 哈希值 |

:::code-group

```toml [features.toml] {2}
[authentication]
auth_url = "[自定义认证服务器地址]"
```

:::

#### `prevent_proxy_connection_auth_url`: 字符串（可选）

如果启用了`prevent_proxy_connections`，则用于会话服务器URL。如果未指定，则使用 Mojang 的会话服务器进行认证。

##### 占位符

| 占位符             | 描述      |
|-----------------|---------|
| `{username}`    | 用户名   |
| `{server_hash}` | 哈希值 |
| `{ip}`          | IP地址 |

:::code-group

```toml [features.toml] {2}
[authentication]
prevent_proxy_connection_auth_url = "[自定义认证服务器地址]"
```

:::

### 玩家档案

#### `allow_banned_players`: 布尔值

允许被 Mojang 封禁的玩家加入服务器。

:::code-group

```toml [features.toml] {2}
[authentication.player_profile]
allow_banned_players = true
```

:::

#### `allowed_actions`: 字符串数组

如果启用了`allow_banned_players`，允许的操作。

:::code-group

```toml [features.toml] {3}
[authentication.player_profile]
allow_banned_players = true
allowed_actions = ["FORCED_NAME_CHANGE", "USING_BANNED_SKIN"]
```

:::

### 纹理

#### `enabled`: 布尔值

是否过滤/验证玩家纹理（例如皮肤/披风）。

:::code-group

```toml [features.toml] {2}
[authentication.textures]
enabled = true
```

:::

#### `allowed_url_schemes`: 字符串数组

允许的纹理 URL 方案。

:::code-group

```toml [features.toml] {3}
[authentication.textures]
enabled = true
allowed_url_schemes = ["http", "https"]
```

:::

#### `allowed_url_domains`: 字符串数组

允许的纹理 URL 域名。

:::code-group

```toml [features.toml] {3}
[authentication.textures]
enabled = true
allowed_url_domains = [".minecraft.net", ".mojang.com"]
```

:::

### 纹理类型

#### `skin`: 布尔值

是否使用玩家皮肤。

:::code-group

```toml [features.toml] {3}
[authentication.textures.types]
skin = true
```

:::

#### `cape`: 布尔值

是否使用玩家披风。

:::code-group

```toml [features.toml] {3}
[authentication.textures.types]
cape = true
```

:::

#### `elytra`: 布尔值

是否使用玩家鞘翅。

:::code-group

```toml [features.toml] {3}
[authentication.textures.types]
elytra = true
```

:::

## 默认配置

默认情况下，认证已启用并使用 Mojang 的服务器。以下是默认配置：
:::code-group

```toml [features.toml]
[authentication]
enabled = true
prevent_proxy_connections = false

[authentication.player_profile]
allow_banned_players = false
allowed_actions = ["FORCED_NAME_CHANGE", "USING_BANNED_SKIN"]

[authentication.textures]
enabled = true
allowed_url_schemes = ["http", "https"]
allowed_url_domains = [".minecraft.net", ".mojang.com"]

[authentication.textures.types]
skin = true
cape = true
elytra = true
```

:::