---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Pumpkin'
  text: 'Minecraft 服务器'
  tagline: 让每个人都能托管快速高效的 Minecraft 服务器。
  image:
    src: /assets/icon.png
    alt: Pumpkin
  actions:
    - theme: brand
      text: 快速开始
      link: /about/quick-start
    - theme: alt
      text: 配置
      link: /config/introduction
    - theme: alt
      text: 开发者指南
      link: /developer/introduction
    - theme: alt
      text: 加入QQ群
      link: https://qm.qq.com/q/aaz3qS5Sec
  
features:
  # Need to add the svg here instead of using src because then it won't have the box around it
  - icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 146 146"><g transform="translate(53 53)"><path stroke="#000" stroke-linejoin="round" d="M-8.5-14.5h13c8 0 8 8 0 8h-13Zm-31 37h40v-11h-9v-8h10c11 0 5 19 14 19h25v-19h-6v2c0 8-9 7-10 2s-5-9-6-9c15-8 6-24-6-24h-47v11h10v26h-15Z"/><g mask="url(#a)"><circle r="43" fill="none" stroke="#000" stroke-width="9"/><path id="b" stroke="#000" stroke-linejoin="round" stroke-width="3" d="m46 3 5-3-5-3z"/><use href="#b" transform="rotate(11.3)"/><use href="#b" transform="rotate(22.5)"/><use href="#b" transform="rotate(33.8)"/><use href="#b" transform="rotate(45)"/><use href="#b" transform="rotate(56.3)"/><use href="#b" transform="rotate(67.5)"/><use href="#b" transform="rotate(78.8)"/><use href="#b" transform="rotate(90)"/><use href="#b" transform="rotate(101.3)"/><use href="#b" transform="rotate(112.5)"/><use href="#b" transform="rotate(123.8)"/><use href="#b" transform="rotate(135)"/><use href="#b" transform="rotate(146.3)"/><use href="#b" transform="rotate(157.5)"/><use href="#b" transform="rotate(168.8)"/><use href="#b" transform="rotate(180)"/><use href="#b" transform="rotate(191.3)"/><use href="#b" transform="rotate(202.5)"/><use href="#b" transform="rotate(213.8)"/><use href="#b" transform="rotate(225)"/><use href="#b" transform="rotate(236.3)"/><use href="#b" transform="rotate(247.5)"/><use href="#b" transform="rotate(258.8)"/><use href="#b" transform="rotate(270)"/><use href="#b" transform="rotate(281.3)"/><use href="#b" transform="rotate(292.5)"/><use href="#b" transform="rotate(303.8)"/><use href="#b" transform="rotate(315)"/><use href="#b" transform="rotate(326.3)"/><use href="#b" transform="rotate(337.5)"/><use href="#b" transform="rotate(348.8)"/><path id="c" stroke="#000" stroke-linejoin="round" stroke-width="6" d="m-7-42 7 7 7-7z"/><use href="#c" transform="rotate(72)"/><use href="#c" transform="rotate(144)"/><use href="#c" transform="rotate(216)"/><use href="#c" transform="rotate(288)"/></g><mask id="a"><path fill="#fff" d="M-60-60H60V60H-60z"/><circle id="d" cy="-40" r="3"/><use href="#d" transform="rotate(72)"/><use href="#d" transform="rotate(144)"/><use href="#d" transform="rotate(216)"/><use href="#d" transform="rotate(288)"/></mask></g></svg> 
    title: Rust编写
    details: Pumpkin 100% 用Rust编写，确保内存安全和无与伦比的性能。
  - icon: 📋
    title: 功能完整
    details: 支持所有原生功能(包括红石特性)，您将不会有任何适应问题。
  - icon: ⚙️
    title: 高度DIY
    details: 高度自定义，能够禁用不需要的功能。
  - icon: ⚙️
    title: 超强扩展
    details: 预计集成extism框架，支持多达十几种语言扩展。
---
