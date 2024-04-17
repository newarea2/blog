import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Axios',
    collapsible: true,
    prefix: '/dependency/browser/axios',
    children: [
      { text: '基础', link: 'basic' },
      { text: '结合 async/await', link: 'async-await' },
      { text: 'axios', link: 'axios' },
      { text: '过滤值为空字符串的参数', link: 'filter-empty-string' },
      { text: '拦截器', link: 'interceptors' },
    ]
  },
  {
    text: 'Echarts',
    collapsible: true,
    prefix: '/dependency/browser/echarts',
    children: []
  },
  {
    text: 'Monaco Editor',
    collapsible: true,
    prefix: '/dependency/browser/vxe-table',
    children: []
  },
  {
    text: 'Vxe Table',
    collapsible: true,
    prefix: '/dependency/browser/monaco-editor',
    children: [
      { text: '基础', link: 'basic' },
    ]
  },
  {
    text: 'Lodash',
    collapsible: true,
    prefix: '/dependency/browser/lodash',
    children: [
      { text: '常用函数', link: 'function' },
      { text: 'lodash 和 lodash-es 区别', link: 'lodash-vs-lodash-es' },
    ]
  },
  { text: 'highlightjs', link: '/dependency/browser/highlightjs' },
  { text: 'Vue Flow', link: '/dependency/browser/vue-flow' },
  { text: 'Gitalk', link: '/dependency/browser/gitalk' },
]

export default sidebar