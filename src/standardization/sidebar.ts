import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Eslint',
    collapsible: true,
    prefix: '/standardization/eslint',
    children: [
      { text: '基础', link: 'basis' },
      { text: '结合 async/await', link: 'async-await' },
      { text: 'axios', link: 'axios' },
      { text: '过滤值为空字符串的参数', link: 'filter-empty-string' },
      { text: '拦截器', link: 'interceptors' },
    ]
  },
  {
    text: 'Echarts',
    collapsible: true,
    prefix: '/standardization/browser/echarts',
    children: []
  },
  {
    text: 'Monaco Editor',
    collapsible: true,
    prefix: '/standardization/browser/vxe-table',
    children: []
  },
  {
    text: 'Vxe Table',
    collapsible: true,
    prefix: '/standardization/browser/monaco-editor',
    children: [
      { text: '基础', link: 'basis' },
    ]
  },
  { text: 'highlightjs', link: '/standardization/browser/highlightjs' },
  { text: 'Vue Flow', link: '/standardization/browser/vue-flow' },
  { text: 'Lodash', link: '/standardization/browser/lodash' }
]

export default sidebar