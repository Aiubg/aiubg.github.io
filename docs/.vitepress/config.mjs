import { defineConfig } from "vitepress"

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
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NoteNest' }],
    ['meta', { property: 'og:description', content: '我的学习笔记' }],
    ['meta', { property: 'og:image', content: '/logo.webp' }], // 使用 index.md 中的图片
    ['meta', { property: 'og:url', content: '/' }], // 假设部署在根目录
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'NoteNest' }],
    ['meta', { name: 'twitter:description', content: '我的学习笔记' }],
    ['meta', { name: 'twitter:image', content: '/logo.webp' }], // 使用 index.md 中的图片
  ],
  themeConfig:{
  },
  // 多语言配置
  locales:{
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig:{
        logo: "/icon.webp",
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
        },
        search: {
          provider: "local",
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
        nav: [
          {
            text: "考研数学",
            items: [
              { text: "高等数学", link: "/考研数学/高等数学/函数.md" },
              { text: "概率论", link: "/考研数学/概率论" },
              { text: "线性代数", link: "/考研数学/线性代数" },
            ],
          },
          {
            text: "考研规划",
            link: "/考研规划/考研规划",
            target: "_blank",
          },
        
        ],
        sidebar: {
          "/高等数学/": [
            {
              text: "高等数学",
              items: [{ text: "数学分析", link: "/考研数学/高等数学/函数" }],
            },
          ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/Aiubg" }],
      }
      
    }
  },

})

export default vitePressConfigs
