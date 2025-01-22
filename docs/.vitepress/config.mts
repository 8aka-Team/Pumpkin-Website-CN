import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Pumpkin",
    description:
        "一个用Rust编写的高性能Minecraft服务器核心",
    lang: "zh-CN",
    sitemap: {
        hostname: 'https://pumpkin.yizhan.wiki'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "文档",
                link: "/about/introduction",
            },
        ],
        sidebar: [
            {
                text: "关于",
                items: [
                    { text: "介绍", link: "/about/introduction" },
                    { text: "快速开始", link: "/about/quick-start" },
                    { text: "基准测试", link: "/about/benchmarks" },
                ],
            },
            {
                text: "配置",
                items: [
                    { text: "介绍", link: "/config/introduction" },
                    { text: "基础", link: "/config/basic" },
                    { text: "代理", link: "/config/proxy" },
                    { text: "认证", link: "/config/authentication" },
                    { text: "压缩", link: "/config/compression" },
                    { text: "资源包", link: "/config/resource-pack" },
                    { text: "命令", link: "/config/commands" },
                    { text: "RCON", link: "/config/rcon" },
                    { text: "PVP", link: "/config/pvp" },
                    { text: "日志", link: "/config/logging" },
                    { text: "查询", link: "/config/query" },
                    { text: "局域网广播", link: "/config/lan-broadcast" },
                ],
            },
            {
                text: "开发者",
                items: [
                    { text: "贡献", link: "/developer/contributing" },
                    { text: "介绍", link: "/developer/introduction" },
                    {
                        text: "网络",
                        link: "/developer/networking/networking",
                        items: [
                            { text: "认证", link: "/developer/networking/authentication" },
                            { text: "RCON", link: "/developer/networking/rcon" },
                        ]
                    },
                    { text: "世界", link: "developer/world" },
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
            { icon: "github", link: "https://github.com/Pumpkin-MC/Pumpkin" },
            { icon: "discord", link: "https://discord.gg/RNm224ZsDq" },
        ],

        logo: "/assets/favicon.ico",
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2024-present Aleksandr Medvedev",
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
        ["link", { rel: "shortcut icon", href: "/assets/favicon.ico" }],
        ["link", { rel: "icon", type: "image/png", href: "/assets/favicon-96x96.png", sizes: "96x96" }],
        ["link", { rel: "icon", type: "image/svg+xml", href: "/assets/favicon.svg" }],
        ["link", { rel: "apple-touch-icon", href: "/assets/apple-touch-icon.png", sizes: "180x180" }],
        ["link", { rel: "manifest", href: "/assets/site.webmanifest" }],

        ["link", { rel: "canonical", href: "https://pumpkinmc.org/" }],

        ["meta", { name: "apple-mobile-web-app-title", content: "Pumpkin" }],

        ["script", { async: '', src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" }],
        ['script', {}, `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-QK7NXQQ2ZP');`]

    ],
});
