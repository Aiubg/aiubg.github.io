import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid"
import { defineConfig } from "vitepress"

const navOptions = [
  {
    text: "考研数学",
    items: [
      {
        text: "高等数学",
        link: "/考研数学/高等数学/高等数学介绍",
      },
      { text: "概率论", link: "/考研数学/概率论/" },
      { text: "线性代数", link: "/考研数学/线性代数/" },
    ],
  },
  {
    text: "考研英语",
    link: "/考研英语/考研英语介绍",
  },
  {
    text: "期末",
    link: "/other/热力发电厂",
  },
]

const sidebarOptions = {
  "/考研数学/高等数学/": [
    {
      text: "高等数学",
      link: "/考研数学/高等数学/高等数学介绍",
      items: [
        {
          text: "函数 极限 连续",
          link: "/考研数学/高等数学/函数 极限 连续/函数 极限 连续.md",
          items: [
            {
              text: "函数",
              link: "/考研数学/高等数学/函数 极限 连续/函数.md",
            },
            {
              text: "极限",
              link: "/考研数学/高等数学/函数 极限 连续/极限.md",
            },
            {
              text: "连续",
              link: "/考研数学/高等数学/函数 极限 连续/函数的连续性.md",
            },
          ],
        },
        {
          text: "导数与微分",
          link: "/考研数学/高等数学/导数与微分.md",
        },
        {
          text: "微分中值定理及其应用",
          link: "/考研数学/高等数学/微分中值定理及其应用.md",
        },
        {
          text: "不定积分",
          link: "/考研数学/高等数学/不定积分.md",
        },
        {
          text: "定积分与反常积分",
          items: [
            {
              text: "定积分",
              link: "/考研数学/高等数学/定积分与反常积分/定积分.md",
            },
            {
              text: "反常积分",
              link: "/考研数学/高等数学/定积分与反常积分/反常积分.md",
            },
          ],
        },
        {
          text: "定积分的应用",
          link: "/考研数学/高等数学/定积分的应用.md",
        },
        {
          text: "微分方程",
          link: "/考研数学/高等数学/微分方程.md",
        },
        {
          text: "多元函数微分学",
          items: [
            {
              text: "多元函数的基本概念",
              link: "/考研数学/高等数学/多元函数微分学/多元函数的基本概念.md",
            },
            {
              text: "多元函数的极限与最值",
              link: "/考研数学/高等数学/多元函数微分学/多元函数的极限与最值.md",
            },
            {
              text: "多元函数微分法",
              link: "/考研数学/高等数学/多元函数微分学/多元函数微分法.md",
            },
          ],
        },
      ],
    },
  ],
  "/考研数学/概率论/": [
    {
      text: "概率论",
      items: [],
    },
  ],
  "/考研数学/线性代数/": [
    {
      text: "线性代数",
      items: [],
    },
  ],
  "/考研英语/": [
    {
      text: "考研英语",
      link: "/考研英语/考研英语介绍",
      items: [
        {
          text: "如何表达一件事——简单句",
          link: "/考研英语/如何表达一件事——简单句/如何表达一件事——简单句.md",
          items: [
            {
              text: "简单句的核心",
              link: "/考研英语/如何表达一件事——简单句/简单句的核心/简单句的核心.md",
              items: [
                {
                  text: "简单句的核心构成",
                  link: "/考研英语/如何表达一件事——简单句/简单句的核心/简单句的核心构成.md",
                },
                {
                  text: "简单句的核心变化——谓语动词的变化",
                  link: "/考研英语/如何表达一件事——简单句/简单句的核心/简单句的核心变化——谓语动词的变化.md",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
const vitePressConfigs = defineConfig({
  title: "NoteNest",
  description: "我的学习笔记",
  lang: "zh-CN",
  base: "/",
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(MermaidMarkdown)
    },
  },
  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ["mermaid"],
    },
    ssr: {
      noExternal: ["mermaid"],
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "NoteNest" }],
    ["meta", { property: "og:description", content: "我的学习笔记" }],
    ["meta", { property: "og:image", content: "/logo.webp" }],
    ["meta", { property: "og:url", content: "/" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "NoteNest" }],
    ["meta", { name: "twitter:description", content: "我的学习笔记" }],
    ["meta", { name: "twitter:image", content: "/logo.webp" }],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/icon.webp",
  },
  // 多语言配置
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        outline: {
          label: "页面导航",
          level: [2,3],
        },
        search: {
          options: {
            locales: {
              root: {
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
                      closeText: "关闭",
                    },
                  },
                },
              },
            },
          },
        },
        nav: navOptions,
        sidebar: sidebarOptions,
        socialLinks: [{ icon: "github", link: "https://github.com/Aiubg" }],
      },
    }
  },
})

export default vitePressConfigs
