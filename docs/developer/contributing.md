### 为Pumpkin做出贡献
我们感谢您对为Pumpkin做出贡献的兴趣！本文档概述了提交错误报告、功能建议和代码更改的指南。

### 开始
如果您需要进一步的帮助或有其他问题，请随时[discord](https://discord.gg/wT8XjrjKkf).告知，我会尽力为您提供支持。

### 如何贡献？
您可以以以下几种方式为Pumpkin做出贡献：

#### 报告错误
  如果您遇到一个错误，请先在issue上搜索现有的问题。

  如果您找不到重复的问题，请打开一个新的问题。

  按照模板并提供错误的清晰描述，包括如果可能的话，提供重现它的步骤。 

  截图、日志或代码片段也可能很有帮助。

#### 功能建议
  您有没有关于如何改进Pumpkin的想法？通过在issue上打开一个issue来分享您的想法。

  详细描述提议的功能，包括其好处和潜在的问题等。

#### 贡献代码
  要开始为Pumpkin贡献代码，请在GitHub上Fork仓库。

1. 如果您还没有GitHub账户，请先创建一个。

2. 前往Pumpkin的 [GitHub组织](https://github.com/Pumpkin-MC) 页面并点击“Fork”按钮。

> 创建一个Fork意味着您现在拥有了Pumpkin源代码的副本（这并不意味着您拥有版权）。

  现在您有了可以编辑的副本，您将需要一些开发工具。

3. 如果您需要安装Git，可以访问 [Git](https://git-scm.com/downloads) 下载适用于您操作系统的版本。

4. Git是一个分布式版本控制系统，可以帮助您更好地管理代码和协作开发。安装完成后，您就可以开始使用Git来克隆、编辑和提交代码了。

- 要开始使用git，请访问 [Git入门](https://docs.github.com/en/get-started/getting-started-with-git)

- 可选：如果您想要一个图形化工具来与Github交互，可以安装 [Github-Desktop](https://desktop.github.com/download/)

> 如果您不习惯使用命令行，Github Desktop可能会更容易上手，但并不适合每个人。

- 要开始使用Github Desktop，请访问 [开始使用 GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop)

- 如果您想要贡献代码，请在以下网址安装Rust： [rust-lang.org](https://www.rust-lang.org/).

- 如果您想要贡献文档，请安装 [NodeJS](https://nodejs.org/en)

### 获取Minecraft源代码

在Pumpkin开发时，我们严重依赖官方Minecraft客户端，并利用现有的服务器逻辑。我们经常参考官方Minecraft源代码。

获取Minecraft源代码的最简单方法是使用Fabric Yarn。在运行以下命令之前，请确保您已安装 [Gradle](https://gradle.org/install/)：

```
git clone https://github.com/FabricMC/yarn.git
cd yarn
./gradlew decompileVineflower
```
反编译后，您可以在以下位置找到源代码： `build/namedSrc`.

### 附加信息
我们鼓励您对现有的问题和拉取请求（PR）发表评论，分享您的想法并提供反馈。

如果您需要帮助，请随时在issue中提问或联系项目维护者。

在提交大型贡献之前，请考虑打开一个issue、discussions或在我们的Discord上与我们讨论您的方法。