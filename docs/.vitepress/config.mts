import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Pumpkin",
    description:
        "一个使用 Rust 编写的高性能，多线程的 Minecraft 服务端核心",
    lang: "zh-CN",
    sitemap: {
        hostname: 'https://pumpkin.8aka.org'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "Pumpkin 文档",
                link: "/about/introduction",
            },
            {
                text: "笨蛋文档",
                link: "https://nitwikit.8aka.org",
            },
        ],
        sidebar: [
            {
                text: "关于我们",
                items: [
                    {text: "基本介绍", link: "/about/introduction"},
                    {text: "快速开始", link: "/about/quick-start"},
                    {text: "基准测试", link: "/about/benchmarks"},
                ],
            },
            {
                text: "配置说明",
                items: [
                    {text: "配置介绍", link: "/config/introduction"},
                    {text: "基础功能", link: "/config/basic"},
                    {text: "群组代理", link: "/config/proxy"},
                    {text: "身份验证", link: "/config/authentication"},
                    {text: "数据压缩", link: "/config/compression"},
                    {text: "资源包", link: "/config/resource-pack"},
                    {text: "操作命令", link: "/config/commands"},
                    {text: "RCON", link: "/config/rcon"},
                    {text: "PVP", link: "/config/pvp"},
                    {text: "日志记录", link: "/config/logging"},
                    {text: "Query", link: "/config/query"},
                    {text: "局域网广播", link: "/config/lan-broadcast"},
                ],
            },
            {
                text: "开发者",
                items: [
                    {text: "做出贡献", link: "/developer/contributing"},
                    {text: "基本介绍", link: "/developer/introduction"},
                    {
                        text: "网络协议",
                        link: "/developer/networking/networking",
                        items: [
                            {text: "身份验证", link: "/developer/networking/authentication"},
                            {text: "RCON", link: "/developer/networking/rcon"},
                        ]
                    },
                    {text: "世界格式", link: "developer/world"},
                ],
            },
            {
                text: "插件文档",
                items: [
                    {
                        text: "基本介绍",
                        link: "/plugin-dev/introduction",
                    },
                    {
                        text: "示例插件",
                        link: "/plugin-dev/example-plugin/introduction",
                        items: [
                            {
                                text: "环境设置",
                                link: "/plugin-dev/example-plugin/environment",
                            },
                            {
                                text: "创建项目",
                                link: "/plugin-dev/example-plugin/creating-project",
                            },
                            {
                                text: "基本逻辑",
                                link: "/plugin-dev/example-plugin/basic-logic",
                            },
                            {
                                text: "加入事件",
                                link: "/plugin-dev/example-plugin/join-event",
                            },
                        ],
                    },
                ],
            },
            {
                text: "故障排除",
                items: [
                    {
                        text: "常见问题",
                        link: "/troubleshooting/common_issues.md",
                    },
                ],
            },
        ],

        socialLinks: [
            {icon: "Github", link: "https://github.com/Pumpkin-MC/Pumpkin"},
            {icon: "Discord", link: "https://discord.gg/RNm224ZsDq"},
        ],

        logo: "/assets/favicon.ico",
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2024-present Aleksandr Medvedev, Chinese Translation by 8aka-Team",
        },
        editLink: {
            pattern:
                "https://github.com/8aka-Team/Pumpkin-Website-CN/blob/master/docs/:path",
            text: "在 GitHub 编辑此页",
        },
        lastUpdated: {
            text: "更新于",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "medium",
            },
        },
        outline: "deep",
    },
    head: [
        ["link", {rel: "shortcut icon", href: "/assets/favicon.ico"}],
        ["link", {rel: "icon", type: "image/png", href: "/assets/favicon-96x96.png", sizes: "96x96"}],
        ["link", {rel: "icon", type: "image/svg+xml", href: "/assets/favicon.svg"}],
        ["link", {rel: "apple-touch-icon", href: "/assets/apple-touch-icon.png", sizes: "180x180"}],
        ["link", {rel: "manifest", href: "/assets/site.webmanifest"}],

        ["link", {rel: "canonical", href: "https://pumpkinmc.org/"}],

        ["meta", {name: "apple-mobile-web-app-title", content: "Pumpkin"}],
    ],
});
