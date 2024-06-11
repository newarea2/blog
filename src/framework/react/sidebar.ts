import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Ant Design Pro',
    collapsible: true,
    prefix: '/framework/react/ant-design-pro',
    children: [
      { text: '基础', link: 'basic' },
      { text: '如何设置 Ant Design 的全局配置', link: 'config-provider' },
      { text: '国际化', link: 'i18n' },
      { text: '简易数据流', link: 'simple-model' },
      { text: '使用 Tailwindcss', link: 'tailwindcss' },
    ]
  },
  {
    text: 'Umi',
    collapsible: true,
    prefix: '/framework/react/umi',
    children: [
      { text: '插件', link: 'plugin' },
    ]
  },
]

export default sidebar