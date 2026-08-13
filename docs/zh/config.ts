import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

export default defineAdditionalConfig({
  themeConfig: {
    nav: [
      { text: '产品', link: '/zh/product/' },
      { text: '指南', link: '/zh/guide/overview/' },
      { text: '开发者', link: '/zh/developers/source/' },
      { text: '隐私政策', link: '/zh/privacy/' },
    ],
    sidebar: {
      '/zh/guide/': [
        {
          text: '指南',
          items: [
            { text: '产品概览', link: '/zh/guide/overview/' },
            { text: '可用性', link: '/zh/guide/availability/' },
            { text: '项目状态', link: '/zh/guide/project-status/' },
            { text: '常见问题', link: '/zh/guide/faq/' },
          ],
        },
      ],
      '/zh/developers/': [
        {
          text: '开发者',
          items: [
            { text: '源码与依赖', link: '/zh/developers/source/' },
            { text: '参与贡献', link: '/zh/developers/contributing/' },
            { text: '兼容性', link: '/zh/developers/compatibility/' },
          ],
        },
      ],
    } satisfies DefaultTheme.Sidebar,
    search: {
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索本站',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '未找到相关结果：',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
      },
    },
    outline: {
      label: '本页内容',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳转至正文',
    notFound: {
      title: '页面未找到',
      quote: '若不改变方向，继续前行，最终可能仍会抵达原本的目的地。',
      link: '/zh/',
      linkLabel: '前往首页',
      linkText: '返回首页',
    },
    footer: {
      message: 'Motara 是正在开发中的独立软件。',
      copyright: '<a href="/zh/privacy/">隐私政策</a> · <a href="/zh/legal/open-source/">开源与商标</a>',
    },
  },
})
