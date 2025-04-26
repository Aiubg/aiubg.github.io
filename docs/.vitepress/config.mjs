import { defineConfig } from "vitepress"
import zhThemeConfig from "./config/zhThemeConfig"

const vitePressConfigs = defineConfig({
  title: "NoteNest",
  description: "我的学习笔记",
  lang: "zh-CN",
  base: "/",
  srcDir: "src",
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig:{
  },
  // 多语言配置
  locales:{
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig:zhThemeConfig
    }
  },

})

export default vitePressConfigs
