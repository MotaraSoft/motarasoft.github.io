import { defineConfig } from 'vitepress'

const githubUrl = 'https://github.com/MotaraSoft/Motara'

const localSearch = {
  provider: 'local' as const,
  options: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search the site',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          selectKeyAriaLabel: 'enter',
          navigateText: 'to navigate',
          navigateUpKeyAriaLabel: 'up arrow',
          navigateDownKeyAriaLabel: 'down arrow',
          closeText: 'to close',
          closeKeyAriaLabel: 'escape',
        },
      },
    },
  },
}

export default defineConfig({
  title: 'Motara',
  description: 'Open-source desktop software for facial tracking and virtual-avatar control.',
  cleanUrls: true,
  rewrites: {
    'en/:rest*': ':rest*',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: githubUrl, ariaLabel: 'Motara on GitHub' }],
    search: localSearch,
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
    },
  },
})
