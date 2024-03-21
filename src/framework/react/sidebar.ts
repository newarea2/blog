import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Ant Design Pro',
    collapsible: true,
    prefix: '/framework/react/ant-design-pro',
    children: [
      { text: '基础', link: 'basic' },
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