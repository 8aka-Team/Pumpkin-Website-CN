# Pumpkin插件开发
::: warning
Pumpkin插件API仍处于非常早期的开发阶段，可能会随时更改。
如果您遇到任何问题，请联系我们 [discord](https://discord.gg/aaNuD6rFEe)
:::

Pumpkin插件与服务端深度集成，允许实现许多在其他服务端上不可能实现的功能。

根据官方[discord](https://discord.gg/aaNuD6rFEe)讨论，未来预计使用Extism框架，当然也可以直接使用Rust

我们还有个JAVA到Rust的代码转换器[j2rust](https://github.com/Snowiiii/j2rust)

使用 WebAssembly 构建的跨语言框架支持如下语言开发：

```
解释语言：JavaScript/TypeScript，Ruby，Python，PHP

编译语言：Go，C#，Java，Elixir，C/C++，OCaml，Zig，Haskell，D
```
详情请查看 [Extism文档](https://extism.org/docs/overview)



Pumpkin插件API在许多方面受到了Spigot/Bukkit插件API的启发，因此，如果您之前有这些API的经验，并且有Rust开发经验，您应该能够轻松编写Pumpkin插件：:smile:
