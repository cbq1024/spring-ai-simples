import {defineConfig} from 'vitepress'

export default defineConfig({
    base: "/spring-ai-simples/",
    title: "Spring Ai Simples",
    description: "study project for spring AI",
    markdown: {
        math: true,
        lineNumbers: true
    },

    themeConfig: {
        outline: [1, 4],
        lastUpdated: true,
        sidebar: [
            {
                text: '🤬 Spring AI',
                link: '/spring/index.md',
                collapsed: true,
                items: [
                    {text: '🤪 Spring AI 概述', link: '/spring/1-overview.md'},
                    {text: '😀 Spring AI quickstart', link: '/spring/2-quickstart.md'},
                ]
            },
            {
                text: "版本信息 😶‍🌫️",
                link: "/CHANGELOG",
            },
        ],
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '🤬 开发',
                items: [
                    {text: '🤪 Spring AI 概述', link: '/spring/1-overview.md'},
                    {text: '😀 Spring AI quickstart', link: '/spring/2-quickstart.md'},
                    {text: '🥸 Index ', link: '/spring/index.md'},
                ]
            },
            {
                text: "版本信息 😶‍🌫️",
                link: "/CHANGELOG",
            },
        ],
        footer: {
            copyright: "Copyright © 2024-present cbq1024",
        },
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/cbq1024"}
        ],
    }
})
