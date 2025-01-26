import { defineConfig } from "vitepress"
import zhThemeConfig from "./configs/zhThemeConfig"
import enThemeConfig from "./configs/enThemeConfig"

const vitePressConfigs = defineConfig({
  title: "NoteNest",
  description: "我的学习笔记",
  lang: "zh-CN",
  base: "/NoteNest/",
  srcDir: "src",
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
  },
  head: [["link", { rel: "icon", href: "/NoteNest/favicon.ico" }]],
  themeConfig:{
  },
  // 多语言配置
  locales:{
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig:zhThemeConfig
    },
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   themeConfig:enThemeConfig
    // }
  },

})

export default vitePressConfigs
