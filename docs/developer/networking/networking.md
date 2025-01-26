### 网络

Pumpkin中的大多数网络代码可以在[Pumpkin-Protocol](https://github.com/Pumpkin-MC/Pumpkin/tree/master/pumpkin-protocol)找到。

服务端: 客户端→服务器

客户端: 服务器→客户端

### 结构

Pumpkin协议中的数据包是根据功能和状态组织的。

`server`: 包含服务端数据包的定义。

`client`: 包含客户端数据包的定义。

### 状态

**握手**: 客户端发送的第一个数据包。这也决定了下一个状态，通常用来指示玩家是否想要执行状态请求、加入服务器或想要被转移。

**状态**: 表示客户端想要看到一个状态响应（MOTD）。

**登录**: 登录序列。表示客户端想要加入服务器。

**配置**: 配置数据包的序列主要从服务器发送到客户端。（特性、资源包、服务器链接等）

**游玩**: 最终状态，表示玩家现在已准备好加入，也用于处理所有其他游戏数据包。

### Minecraft协议

您可以在 [Minecraft Wiki的Protocol](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol) 页面找到所有Minecraft Java数据包。在那里，您也可以看到它们属于哪个状态。
您还可以看到数据包拥有的所有信息，这些信息我们可以根据它们是服务器端还是客户端数据包来写入或读取。

### 添加客户端数据包

1. 添加数据包很容易。首先，您必须为数据包派生出serde Serialize。

```rust
#[derive(Serialize)]
```

2. 接下来，您需要使用`client_packet`宏来设置数据包，这将自动使用JSON数据包文件中的Packet ID来设置数据包ID。
```rust
#[client_packet("play:disconnect")]
```

3. 现在您可以创建结构体了。

> [!IMPORTANT]
> 请以“C”开头来命名客户端数据包。
> 如果数据包在多个状态下发送，请在数据包中添加状态。例如，有三个断开连接的数据包。
>
> -   CLoginDisconnect
> -   CConfigDisconnect
> -   CPlayDisconnect

在您的数据包结构中创建字段，以表示将要发送到客户端的数据。

> [!IMPORTANT]
> 使用描述性的字段名称和适当的数据类型。

示例:

```rust
pub struct CPlayDisconnect {
    reason: TextComponent,
    more fields...
}
```

4. 同时，不要忘了为客户端数据包实现一个新的函数，这样我们就可以通过插入值来实际发送它们。

示例:

```rust
impl CPlayDisconnect {
    pub fn new(reason: TextComponent) -> Self {
        Self { reason }
    }
}
```

5. 最后，所有内容应该整合在一起。

```rust
#[derive(Serialize)]
#[client_packet("play:disconnect")]
pub struct CPlayDisconnect {
    reason: TextComponent,
}

impl CPlayDisconnect {
    pub fn new(reason: TextComponent) -> Self {
        Self { reason }
    }
}
```

6. 您也可以手动序列化数据包，这在数据包更复杂时会很有用。

```diff
-#[derive(Serialize)]

+ impl ClientPacket for CPlayDisconnect {
+    fn write(&self, bytebuf: &mut BytesMut) {
+       bytebuf.put_slice(&self.reason.encode());
+    }
```

7. 您现在可以发送数据包了。参见 [发送数据包](#sending-packets)

### 添加服务端数据包

1. 添加数据包很容易。首先，您必须为数据包派生出serde Deserialize。您还应该使用`server_packet`宏来自动解析数据包ID。
```rust
#[derive(Deserialize)]
#[server_packet("login:move_player_pos")]
```

2. 现在您可以创建结构体了。

> [!IMPORTANT]
> 请以“S”开头来命名服务器端数据包。
> 如果数据包在多个状态下发送，请在数据包中添加状态。

在您的数据包结构中创建字段，以表示将要发送到服务器的数据。

> [!IMPORTANT]
> 使用描述性的字段名称和适当的数据类型。

示例:

```rust
pub struct SPlayerPosition {
    pub x: f64,
    pub feet_y: f64,
    pub z: f64,
    pub ground: bool,
}
```

3. 最终，所有内容应该整合在一起。

```rust
#[derive(Deserialize)]
#[server_packet("login:move_player_pos")]
pub struct SPlayerPosition {
    pub x: f64,
    pub feet_y: f64,
    pub z: f64,
    pub ground: bool,
}
```

4. 您也可以手动反序列化数据包，这在数据包更复杂时会很有用。

```diff
-#[derive(Deserialize)]

+ impl ServerPacket for SPlayerPosition {
+    fn read(bytebuf: &mut Bytes) -> Result<Self, ReadingError> {
+       Ok(Self {
+           x: bytebuf.try_get_f64()?,
+           feet_y: bytebuf.try_get_f64()?,
+           z: bytebuf.try_get_f64()?,
+           ground: bytebuf.try_get_bool()?,
+       })
+    }
```

5. 您可以监听数据包。参见 [接收数据包](#receiving-packets)

### 客户端

Pumpkin将客户端和玩家分开存储。不在游戏状态中的一切都是简单的客户端。以下是不同之处：

**客户端**

-   只能在状态/登录/传输/配置状态中
-   不是一个生物实体
-   资源消耗较小

**玩家**

-   只能在游戏状态中
-   是世界中的一个生物实体
-   拥有更多数据，消耗更多资源

#### 发送数据包

示例:

```rust
// 仅在Status状态下工作
client.send_packet(&CStatusResponse::new("{ description: "A Description"}"));
```

#### 接收数据包

对于客户端:
`src/client/mod.rs`

```diff
// Put the Packet into the right State
 fn handle_mystate_packet(
  &self,
    server: &Arc<Server>,
    packet: &mut RawPacket,
) -> Result<(), ReadingError> {
    let bytebuf = &mut packet.bytebuf;
    match packet.id.0 {
        SStatusRequest::PACKET_ID => {
                self.handle_status_request(server, SStatusRequest::read(bytebuf)?)
                    .await;
            }
+            MyPacket::PACKET_ID => {
+                self.handle_my_packet(MyPacket::read(bytebuf)?)
+                    .await;
            }
            _ => {
            log::error!(
                "Failed to handle packet id {} while in ... state",
                packet.id.0
            );
            }
    };
    Ok(())
}
```

对于玩家:
`src/entity/player.rs`

```diff
// Players only have Play State
 fn handle_play_packet(
  &self,
    server: &Arc<Server>,
    packet: &mut RawPacket,
) -> Result<(), ReadingError> {
    let bytebuf = &mut packet.bytebuf;
    match packet.id.0 {
        SChatMessage::PACKET_ID => {
            self.handle_chat_message(SChatMessage::read(bytebuf)?).await;
        }
       MyPacket::PACKET_ID => {
+           self.handle_mypacket(server, MyPacket::read(bytebuf)?).await;
        }
        _ => {
            log::error!(
                "Failed to handle packet id {} while in ... state",
                packet.id.0
            );
        }
    };
    Ok(())
}
```

### 压缩

Minecraft数据包 **可以** 使用ZLib压缩进行解码/编码。通常在应用压缩时会设置一个阈值，这会影响区块数据包。

### 移植

要移植到新的Minecraft版本，您可以在以下网址比较协议的差异 [Minecraft Wiki上的wiki.vg_merge](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?action=history)

同时更改`src/lib.rs`中的`CURRENT_MC_PROTOCOL`
