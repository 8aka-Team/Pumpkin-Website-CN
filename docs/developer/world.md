### 世界格式

> [!IMPORTANT]
> **目前，Pumpkin仅支持Anvil世界格式，这是原版Minecraft所使用的格式。不过，未来计划支持其他世界格式，如下所述。**

已确定待合并主线的文件格式
- [线性区域文件格式（Linear region file format）](https://github.com/Pumpkin-MC/Pumpkin/pull/494)

#### 区域文件格式

Minecraft Beta 1.3 到 Release 1.2 使用了一种名为“区域文件格式”（Region file format）的Minecraft格式。

这种格式存储的文件是.mcr文件，每个文件存储一个称为区域的32x32区块组。

更多详细信息可以在 [Minecraft Wiki](https://minecraft.wiki/w/Region_file_format) 上找到。

#### Anvil文件格式

Anvil文件格式是原版Minecraft当前使用的世界格式。它在Minecraft Beta 1.9中被引入，以取代区域文件格式。

Anvil文件以.mca扩展名存储，并且与旧格式相比，提供了多项改进，包括更好的性能和对更大世界的支持。

更多详细信息可以在 [Minecraft Wiki](https://minecraft.wiki/w/Anvil_file_format)中找到。

#### Linear文件格式

线性区域文件格式（Linear region file format）是一种更现代的文件格式，它通过使用 zstd 库而不是 zlib 来节省磁盘空间。

zlib 是一种非常陈旧且过时的库，而 zstd 提供了更好的压缩效率和性能。

采用线性区域文件格式存储的文件扩展名为 .linear，这种格式在主世界和下界可以节省大约 50% 的磁盘空间，而在末地则可以节省高达 95% 的空间。

更多详细信息可以在 [LinearRegionFileFormatTools](https://github.com/xymb-endcrystalme/LinearRegionFileFormatTools)中找到。

#### Slime文件格式

Slime文件格式是由Hypixel开发的一种改进型世界存储格式，旨在解决Anvil文件格式的许多问题。

它通过替换zlib，进一步节省了存储空间，并且将整个世界保存在一个单独的文件中，这使得加载和管理世界更加高效。

此外，这种格式允许同一个文件被加载到多个实例中，从而提高了服务器的灵活性和性能。

更多详细信息可以在[Slime World Manager](https://github.com/cijaaimee/Slime-World-Manager#:~:text=Slime%20World%20Manager%20is%20a,worlds%20faster%20and%20save%20space.)的GitHub页面上找到，也可以在Hypixel的[Dev Blog #5](https://hypixel.net/threads/dev-blog-5-storing-your-skyblock-island.2190753/)中查看。

#### Schematic文件格式

与其他列出的文件格式不同，Schematic文件格式并不是用于存储Minecraft世界，而是用于第三方程序，例如MCEdit、WorldEdit和Schematica。

这种格式存储的文件是.schematic文件，并且是以NBT格式存储的，大多数情况用来储存结构等建筑信息。

更多详细信息可以在[Minecraft Wiki](https://minecraft.wiki/w/Schematic_file_format)中找到

### 世界生成

当服务器启动时，它会检查是否存在一个存档，也就是所谓的“世界”。

随后，Pumpkin会调用世界生成功能：

#### 存在存档

调用Anvil区块读取器（AnvilChunkReader）来处理给定存档的区域文件

-   如上所述，区域文件存储了32x32区块。
    > 每个区域文件的命名都对应于其在世界中的坐标。

> r.{}.{}.mca

-   从存档文件中读取位置表，表示区块的坐标。
-   从存档文件中读取时间戳表，表示区块最后一次被修改的时间。

#### 不存在存档

世界种子被设置为“0”，在未来它将被设置为基本配置中的值。

随后调用了平原生成器（PlainsGenerator），因为到目前为止，平原是唯一实现的生物群系。

-   PerlinTerrainGenerator 被调用来设置区块高度。
-   石头高度被设置为区块高度以下5格。
-   土壤高度被设置为区块高度以下2格。
-   草方块出现在土壤的顶部。
-   基岩被设置在 y = -64。
-   花朵和矮草随机分布。

SuperflatGenerator 也是可用的，但目前无法调用。

-   基岩设置在 y = -64
-   土壤设置在基岩上方两格
-   草方块设置在土壤上方一格

玩家可以放置和破坏方块，但这些更改无法在任何世界格式中保存。

再编写这个中文文档的时候，[Anvil世界](https://github.com/Pumpkin-MC/Pumpkin/pull/401)以支持保存世界格式