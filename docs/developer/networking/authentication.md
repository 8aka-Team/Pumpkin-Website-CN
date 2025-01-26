### 认证

### 为什么需要认证

Minecraft是最受欢迎的游戏之一，而且很容易在不付费的情况下玩到。实际上，你支付的并不是游戏本身，而是Minecraft账户。
那些没有购买游戏却在线上玩的人，使用的是[离线账户](#cracked-accounts)。

#### 离线账户

- 不需要花费任何金钱。
  每个人都可以设置自己的昵称且不需要考虑冲突。
  没有唯一的UUID。
  没有皮肤/披风。
  不安全。

问题在于每个人都可以随意给自己命名，这使得他们可以以管理员的身份加入服务器。
离线账户也经常被用于机器人操作和DDOS服务攻击。

### 离线服务器

默认情况下，配置中的`online_mode`是启用的。
这启用了身份验证，禁用了[离线账户](#cracked-accounts)。
如果您想要允许使用离线账户，您可以在`configuration.toml`中禁用`online_mode`。

### Mojang身份验证如何工作

为了确保玩家拥有高级权限的账户：

1. 拥有高级账户的客户端向Mojang会话服务器发送登录请求。
2. Mojang的服务器验证客户端的凭证并将玩家添加到他们的服务器中。
3. 我们的服务器向会话服务器发送请求，以检查玩家是否已加入会话服务器。
4. 如果请求成功，它将提供有关玩家的更多信息（例如，UUID、名称、皮肤/披风等）。


### 自定义认证服务器

Pumpkin确实支持自定义认证服务器。您可以在`features.toml`中替换认证URL。

#### Pumpkin身份验证如何工作

1. **GET请求:** Pumpkin向指定的认证URL发送GET请求。
2. **状态码200:** 如果认证成功，服务器会以状态码200响应。
3. **解析JSON游戏档案:** Pumpkin解析响应中返回的JSON游戏档案。

#### 游戏档案

```rust
struct GameProfile {
    id: UUID,
    name: String,
    properties: Vec<Property>,
    profile_actions: Option<Vec<ProfileAction>>, // Optional, only present when actions are applied
}
```

##### 属性

```rust
struct Property {
    name: String,
    value: String, // Base64 encoded
    signature: Option<String>, // Optional, Base64 encoded
}
```

##### 档案操作

```rust
enum ProfileAction {
    FORCED_NAME_CHANGE,
    USING_BANNED_SKIN,
}
```
