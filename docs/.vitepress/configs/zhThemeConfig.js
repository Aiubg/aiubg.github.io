const navOptions =[{
  text: "前端",
  link: "/前端/JavaScript进阶/第一天",
},
{
  text: "课程笔记",
  link: "/课程笔记/燃烧学/选择题",
}
]
const sidebarOptions = {
  "/前端/": [
    {
      text: "JavaScript进阶",
      items: [
        { text: "第一天", link: "/前端/JavaScript进阶/第一天" },
        { text: "第二天", link: "/前端/JavaScript进阶/第二天" },
        { text: "第三天", link: "/前端/JavaScript进阶/第三天" },
        { text: "第四天", link: "/前端/JavaScript进阶/第四天" },
      ],
    },
  ],
  "/课程笔记/": [
    {
      text: "燃烧学",
      items: [
        {text: "选择题", link: "/课程笔记/燃烧学/选择题"},
        {text: "简答题", link: "/课程笔记/燃烧学/简答题"},
        {text: "计算题", link: "/课程笔记/燃烧学/计算题"},
      ],
    },
  ],
}
const socialLinkOptions = [{ icon: "github", link: "https://github.com/Aiubg" }]
const themeConfig = {
  logo: "/icon.png",
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
  nav: navOptions,
  sidebar: sidebarOptions,
  socialLinks: socialLinkOptions,
}

export default themeConfig