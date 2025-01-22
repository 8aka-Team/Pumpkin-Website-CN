# 快速开始

**当前状态：**

预发布：目前正在开发中，尚未准备好正式发布。

要运行Pumpkin，首先需要克隆它：
```shell
git clone https://github.com/Pumpkin-MC/Pumpkin.git
cd Pumpkin
```

如果尚未安装Rust，您可能还需要[安装Rust](https://www.rust-lang.org/tools/install)。

**可选：**

如果您愿意，可以将一个原版世界放入Pumpkin/目录中。只需将世界命名为`world`。

然后运行：

> [!注意]
> 这可能需要一些时间，因为我们为发布版本启用了大量优化。
>
> 要应用特定于您的CPU的进一步优化并使用您的CPU功能，您应该设置target-cpu=native Rust标志。

```shell
cargo run --release
```

## Docker

实验性的Docker支持可用。
该镜像目前尚未发布在任何地方，但您可以使用以下命令构建并部署它：

```shell
docker compose up --build
```

运行此命令后，应该会出现一个`data/`文件夹，您可以在其中找到所有服务器文件。
在此`data/`文件夹中，您可以放入您的`world/`文件夹（确保重新启动服务器）。

## 测试服务器
Pumpkin有一个由@kralverde维护的测试服务器。它运行在Pumpkin的最新提交上。

- **IP:** pumpkin.kralverde.dev

**规格：**
- 操作系统：Debian GNU/Linux bookworm 12.7 x86_64
- 内核：Linux 6.1.0-21-cloud-amd64
- CPU：Intel Core (Haswell, no TSX) (2) @ 2.40 GHz
- 内存：4GB DIMM
