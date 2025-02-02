# 移动 pumpkin 开发

如果你是移动设备用户并且想要编辑源代码那么请看本文档！

（此页面是使用安卓设备上的 Helix 编写的）

首先，我们需要一个终端应用程序。
我们推荐使用 [Termux](https://github.com/termux/termux-app/releases)，因为它稳定且开源。
下载适合您设备架构的 APK 文件并安装 Termux。

在此之后，你需要运行一些命令。我们使用 Helix 是因为它简单易用。.
```bash
  pkg update && pkg upgrade
  pkg install build-essential git rust rust-analyzer taplo helix helix-grammar nodejs
```

如果你想做出贡献，你需要安装 GitHub。
```bash
  pkg install gh
```

我们建议安装 [Fish Shell](https://github.com/fish-shell/fish-shell)，因为它比 Bash 更友好。
```bash
  pkg install fish
  chsh -s fish
```

现在你已经安装了基本工具，但我们还需要进行一些设置。
如果你想做出贡献，你需要登录到 GitHub。
```bash
  gh auth login
```

设置 Git：将编辑器更改为 Vim，编辑凭据等，然后你需要克隆 pumpkin 仓库。
（在此之前，你可以使用 `mkdir proj` 创建一个项目目录，这会很有用）
```bash
  git clone https://github.com/Pumpkin-MC/Pumpkin.git
```

如果你想做出贡献，你需要 Fork 我们的仓库，并将上述连接中的 `Pumpkin-MC` 替换为你 GitHub 上的用户名。

现在所有设置都已完成！祝你使用愉快 :)

# FAQ

## 如何使用编辑器？
输入 `hx <path>`.

## 如何在项目中切换目录？
使用 `ls` 列出当前目录的所有文件和文件夹，使用 `cd` 切换到相应的目录。
你也可以使用 `hx <目录>` 在启动时直接切换到指定的目录。

## 我该如何在编辑器中输入文字？
输入 `i` 进入编辑模式。

## 如何退出编辑器？
按 Esc 键退出，如果不想保存已编辑的数据，输入 `:q!` 如果要保存文件输入`:wq`。

## 我可以在哪里学习如何使用这个编辑器？
输入 `hx --tutor` 或访问官方网站。

## 为什么不使用 VSCode？
1) Visual Studio Code 配置起来很麻烦，而且它只能在网页上使用，功能还很有限。
2) Rust 分析器在上面无法使用，或许模拟器可以解决这个问题，但是会严重拖慢代码编译的速度。
3) Visual Studio Code 对于安卓设备不太友好，而且最好配备鼠标，而 Helix 只需要键盘即可。
4) Visual Studio Code 在某些设备上会出现卡顿。


## 为什么输入文字这么困难？
建议购买一个蓝牙键盘，链接到手机会很方便。
