# 命令
Pumpkin 支持原版命令，并允许您配置可以从哪里运行这些命令。

## 配置命令
#### `use_console`: 布尔值
是否接受来自控制台的命令。

:::code-group
```toml [features.toml] {2}
[commands]
use_console = false
```
:::

#### `log_console`: 布尔值
是否应在控制台中记录来自玩家的命令。

:::code-group
```toml [features.toml] {2}
[commands]
log_console = false
```
:::

## 默认配置
默认情况下，Pumpkin 将允许来自控制台的命令，并记录所有由玩家运行的命令。

:::code-group
```toml [features.toml]
[commands]
use_console = true
log_console = true
```
:::

