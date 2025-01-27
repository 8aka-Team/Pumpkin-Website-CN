### 配置

Pumpkin 提供了一个强大的配置系统，允许用户在不依赖外部插件的情况下自定义服务端的各种行为。这为服务端的操作提供了灵活性和控制性。

### 基础 / 高级

Pumpkin 的配置分为基础配置和高级配置，基础配置用于快速更改和重要更改，而高级配置则更为复杂。

- `configuration.toml`: 简单，可以比作原版的 `server.properties`。
- `features.toml`: 设计用于集中所有 Pumpkin 的功能，使其成为一个大型配置文件。

### 服务端版本

Pumpkin 旨在支持最新的 Minecraft 版本。如果您想在其他版本上托管 Pumpkin 服务端，有一个名为 [ViaProxy](https://github.com/ViaVersion/ViaProxy) 的项目。

- 请确保允许代理连接。
- Pumpkin 和 ViaProxy 没有关联，不要提交关于它们代码的问题。此外，这是一个第三方代理，Pumpkin 不对其承担任何责任。

#### 主要特点：

- 广泛的定制：配置服务端设置、玩家行为、世界生成等。
- 性能优化：通过配置调整优化服务端性能。
- 无插件定制：无需额外插件即可实现所需的更改。

