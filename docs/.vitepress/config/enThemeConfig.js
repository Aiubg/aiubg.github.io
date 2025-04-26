const navOptions = []
const sidebarOptions = {
 
}
const socialLinkOptions = [{ icon: "github", link: "https://github.com/Aiubg" }]
const themeConfig = {
  logo: "/icon.webp",
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