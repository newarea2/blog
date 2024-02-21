import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  { text: '配置', link: '/build-tool/vite/config' },
  { text: '依赖预构建', link: '/build-tool/vite/dependency-pre-bundling' },
  { text: '部署', link: '/build-tool/vite/deploy' },
  { text: '如何解决跨域问题', link: '/build-tool/vite/cors' },
  {
    text: '常用插件',
    collapsible: true,
    prefix: '/build-tool/vite/plugin',
    children: [
      { text: 'unplugin-auto-import', link: 'unplugin-auto-import' },
      { text: 'unplugin-vue-components', link: 'unplugin-vue-components' },
      { text: 'vite-plugin-style-import', link: 'vite-plugin-style-import' },
      { text: 'vite-plugin-svg-icons', link: 'vite-plugin-svg-icons' },
    ]
  },
]

export default sidebar