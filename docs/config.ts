import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

export default defineAdditionalConfig({
  themeConfig: {
    nav: [
      { text: 'Product', link: '/product/' },
      { text: 'Guide', link: '/guide/overview/' },
      { text: 'Developers', link: '/developers/source/' },
      { text: 'Privacy', link: '/privacy/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/overview/' },
            { text: 'Availability', link: '/guide/availability/' },
            { text: 'Project status', link: '/guide/project-status/' },
            { text: 'FAQ', link: '/guide/faq/' },
          ],
        },
      ],
      '/developers/': [
        {
          text: 'Developers',
          items: [
            { text: 'Source and dependencies', link: '/developers/source/' },
            { text: 'Contributing', link: '/developers/contributing/' },
            { text: 'Compatibility', link: '/developers/compatibility/' },
          ],
        },
      ],
    } satisfies DefaultTheme.Sidebar,
    footer: {
      message: 'Motara is independent software under active development.',
      copyright: '<a href="/privacy/">Privacy</a> · <a href="/legal/open-source/">Open source and trademarks</a>',
    },
  },
})
