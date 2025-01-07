const navOptions = [{
  text: "Frontend",
  link: "/frontend/JavaScriptAdvanced/Day1",
}]
const sidebarOptions = {
  "/frontend/": [
    {
      text: "JavaScript Advanced",
      items: [
        { text: "Day 1", link: "/frontend/JavaScriptAdvanced/Day1" },
        { text: "Day 2", link: "/frontend/JavaScriptAdvanced/Day2" },
        { text: "Day 3", link: "/frontend/JavaScriptAdvanced/Day3" },
        { text: "Day 4", link: "/frontend/JavaScriptAdvanced/Day4" },
      ],
    },
    {
      text: "Vue Basics",
      items: [
        { text: "Day 1", link: "/frontend/Vue/1" },
        { text: "Day 2", link: "/frontend/Vue/Day2" },
        { text: "Day 3", link: "/frontend/Vue/Day3" },
        { text: "Day 4", link: "/frontend/Vue/Day4" },
      ],
    },
  ],
}
const socialLinkOptions = [{ icon: "github", link: "https://github.com/Aiubg" }]
const themeConfig = {
  logo: "/icon.png",
  langMenuLabel: "Languages",
  returnToTopLabel: "Back to top",
  sidebarMenuLabel: "Menu",
  darkModeSwitchLabel: "Theme",
  lightModeSwitchTitle: "Switch to light mode",
  darkModeSwitchTitle: "Switch to dark mode",
  docFooter: {
    prev: "Previous",
    next: "Next",
  },
  outline: {
    label: "Page Navigation",
  },
  search: {
    provider: "local",
    options: {
      locales: {
        root: {
          translations: {
            button: {
              buttonText: "Search Docs",
              buttonAriaLabel: "Search Docs",
            },
            modal: {
              noResultsText: "No results found",
              resetButtonTitle: "Clear search",
              footer: {
                selectText: "Select",
                navigateText: "Navigate",
                closeText: "Close",
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