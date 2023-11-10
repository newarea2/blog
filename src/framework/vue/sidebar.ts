import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Pinia',
    collapsible: true,
    prefix: '/framework/vue/pinia',
    children: [
      // 像这样写成绝对路径也行
      // { text: 'Pinia 基础', link: '/framework/vue/pinia/pinia' },
      { text: 'Pinia 基础', link: 'pinia' },
      { text: '在组件外使用 Pinia', link: 'use-pinia-outside-component' }
    ]
  },
  {
    text: 'Vue Router',
    collapsible: true,
    prefix: '/framework/vue/vue-router',
    children: [
      { text: 'meta', link: 'meta' },
      { text: '常用类型', link: 'common-type' },
      { text: '组合式 API', link: 'composition' },
      { text: '重定向、别名', link: 'redirect-alias' },
    ]
  },
  {
    text: '侦听',
    collapsible: true,
    prefix: '/framework/vue/watch',
    children: [
      { text: '侦听', link: 'index' },
      { text: '侦听 props', link: 'watch-props' },
      { text: '什么时候使用 deep', link: 'when-to-use-deep-function' }
    ]
  },
  {
    text: '响应式',
    collapsible: true,
    prefix: '/framework/vue/reactivity',
    children: [
      { text: 'ref、reactive的区别', link: 'difference-between-ref-and-reactive' },
      { text: 'ref 自动解包', link: 'ref-unwrapping' },
      { text: 'reactive 原理', link: 'reactive' },
      { text: 'toRefs', link: 'toRef-toRefs' },
      { text: '如何对 reactive 定义的数组进行赋值', link: 'assign-value-to-array-defined-by-reactive' },
    ]
  },
  {
    text: 'v-model',
    collapsible: true,
    prefix: '/framework/vue/v-model',
    children: [
      { text: '传递基本类型数据', link: 'transfer-basic-type-data' },
      { text: '传递引用类型数据', link: 'transfer-reference-type-data' }
    ]
  },
  {
    text: '透传 Attributes',
    collapsible: true,
    prefix: '/framework/vue/fallthrough-attributes',
    children: [
      { text: 'inheriAttrs', link: 'inheriAttrs' },
      { text: '巧用 v-bind、v-on', link: 'v-bind-v-on' }
    ]
  },
  {
    text: '渲染函数',
    collapsible: true,
    prefix: '/framework/vue/render-function',
    children: [
      { text: '渲染函数', link: 'render-function' },
      { text: '函数式组件', link: 'functional-components' },
    ]
  },
  {
    text: '组件间通信',
    collapsible: true,
    prefix: '/framework/vue/communication-between-components',
    children: [
      { text: '组件间通信总结', link: 'summary' },
      { text: 'provide、inject', link: 'provide-inject' },
    ]
  },
  { text: '组合式函数', link: '/framework/vue/composable' },
  { text: '不同构建版本的区别', link: '/framework/vue/differences-between-different-build-versions' },
  { text: '常用类型', link: '/framework/vue/common-type' },
  { text: '解决 props 值无法赋值给 data 域的问题', link: '/framework/vue/props-assign-to-data' },
  { text: '使用 JSX', link: '/framework/vue/jsx' },
  {
    text: '源码',
    collapsible: true,
    prefix: '/framework/vue/source-code',
    children: [
      { text: '如何运行 Jest 单元测试', link: 'jest' },
      { text: '单独使用某个功能', link: 'using-a-function-alone' },
      { text: 'mini-vue', link: 'mini-vue' },
      { text: 'proxy 和 defineProperty 区别', link: 'proxy-defineProperty' },
      { text: '源码结构', link: 'source-code-structure' },
      { text: '虚拟节点', link: 'virtual-dom' },
    ]
  },
]

export default sidebar