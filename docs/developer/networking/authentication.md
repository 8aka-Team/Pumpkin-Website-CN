## 身份验证
### 为什么需要身份验证
离线账户，即在不联系授权或认证服务器的情况下从玩家的用户名生成的账户，可以选择任何昵称。
这意味着，如果没有额外的插件，玩家可以冒充其他玩家，包括那些具有操作权限的玩家。

### 离线服务器
默认情况下，配置中启用了`online_mode`。这启用了身份验证，禁用了离线账户。如果你想允许使用离线账户，可以在`configuration.toml`中禁用`online_mode`。

### Yggdrasil 身份验证的工作原理
1. 客户端从启动器获取身份验证 token 和 UUID。
2. 在加载过程中，客户端使用认证令牌从身份验证服务器获取数据，例如各种签名密钥和被封锁服务器的列表。
3. 当客户端加入服务器时，它向身份验证服务器发送加入请求。如果账户被封禁，Mojang 服务器可以拒绝此请求。
4. 客户端将身份信息通过数据包发送给服务器。
5. 服务器根据此身份信息向身份验证服务器发送 hasJoined 请求。成功之后将会获得玩家信息，例如皮肤。

### 自定义认身份验证服务器

Pumpkin 确实支持自定义身份验证服务器。您可以在`features.toml`中替换认证URL。

#### Pumpkin 身份验证如何工作

1. **GET 请求:** Pumpkin 向指定的身份验证 URL 发送 GET 请求。
2. **状态码200:** 如果身份验证成功，服务器会以状态码 200 响应。
3. **解析 JSON 游戏档案:** Pumpkin 解析响应中返回的 JSON 游戏档案。

#### 游戏档案

```rust
struct GameProfile {
    id: UUID,
    name: String,
    properties: Vec<Property>,
    profile_actions: Option<Vec<ProfileAction>>, // 可选的，仅在应用操作时出现
}
```

##### 属性

```rust
struct Property {
    name: String,
    value: String, // Base64 编码
    signature: Option<String>, // 可选的，Base64 编码
}
```

##### 档案操作

```rust
enum ProfileAction {
    FORCED_NAME_CHANGE,
    USING_BANNED_SKIN,
}
```
