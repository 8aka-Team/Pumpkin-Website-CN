# Pumpkin 

Pumpkin 是一个完全用 **Rust** 开发的 Minecraft 服务端，提供快速、高效和可定制的体验。它在遵循游戏核心机制的同时，优先考虑性能和玩家的乐趣。

<picture>
  <source srcset="/assets/introduction-preview-2560x1440.png" media="(min-width: 2560px)">
  <source srcset="/assets/introduction-preview-1280x720.png" media="(min-width: 1280px)">
  <source srcset="/assets/introduction-preview-640x360.png" media="(min-width: 640px)">
  <img src="/assets/introduction-preview-1280x720.png" alt="introduction-preview">
</picture>

## Pumpkin 的目标

- **性能**：通过利用多线程实现最大性能和效率。
- **兼容性**：支持最新的 Minecraft 服务端版本，并遵循原版游戏机制。
- **安全性**：通过防止已知的安全漏洞来优先考虑安全性。
- **灵活性**：高度可配置，能够禁用不必要的功能。
- **可扩展性**：为插件开发提供了基础。

## Pumpkin 不会做

- 兼容其他服务端的插件或模组
- 作为从头开始构建服务端的框架。

> [!IMPORTANT]
> Pumpkin 目前正在积极开发中。查看我们的[Github项目](https://github.com/users/Snowiiii/projects/12/views/3)以了解当前进展。

## 原版

Pumpkin 旨在尽可能接近地复制原版 Minecraft 逻辑，确保熟悉的游戏体验。然而，我们也添加了新功能以增强您的游戏体验。

### 红石

与其他为了性能妥协原版红石机制的分支不同，Pumpkin 保持了原始的红石特性。如果您想修改红石特性或寻求性能优化，您也可以通过配置文件进行更改。