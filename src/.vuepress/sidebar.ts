import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/framework/vue/': [
    {
      text: 'Pinia',
      collapsible: true,
      children: [
        { text: 'Pinia', link: '/framework/vue/pinia/pinia' },
        { text: '在组件外使用 Pinia', link: '/framework/vue/pinia/use-pinia-outside-component' }
      ]
    },
    {
      text: 'Vue Router',
      collapsible: true,
      children: [
        { text: 'meta', link: '/framework/vue/vue-router/meta' },
        { text: '常用类型', link: '/framework/vue/vue-router/common-type' },
        { text: '组合式 API', link: '/framework/vue/vue-router/composition' },
        { text: '重定向、别名', link: '/framework/vue/vue-router/redirect-alias' },
      ]
    },
    {
      text: '侦听',
      collapsible: true,
      children: [
        { text: '侦听', link: '/framework/vue/watch/' },
        { text: '侦听 props', link: '/framework/vue/watch/watch-props' },
        { text: '什么时候使用 deep', link: '/framework/vue/watch/when-to-use-deep-function' }
      ]
    },
    {
      text: '响应式',
      collapsible: true,
      children: [
        { text: 'ref、reactive的区别', link: '/framework/vue/reactivity/difference-between-ref-and-reactive' },
        { text: 'ref 自动解包', link: '/framework/vue/reactivity/ref-unwrapping' },
        { text: 'reactive 原理', link: '/framework/vue/reactivity/reactive' },
        { text: 'toRefs', link: '/framework/vue/reactivity/toRefs' },
        { text: '如何对 reactive 定义的数组进行赋值', link: '/framework/vue/reactivity/assign-value-to-array-defined-by-reactive' },
      ]
    },
    {
      text: 'v-model',
      collapsible: true,
      children: [
        { text: '传递基本类型数据', link: '/framework/vue/v-model/transfer-basic-type-data' },
        { text: '传递引用类型数据', link: '/framework/vue/v-model/transfer-reference-type-data' }
      ]
    },
    {
      text: '透传 Attributes',
      collapsible: true,
      children: [
        { text: 'inheriAttrs', link: '/framework/vue/fallthrough-attributes/inheriAttrs' },
        { text: '巧用 v-bind、v-on', link: '/framework/vue/fallthrough-attributes/v-bind-v-on' }
      ]
    },
    {
      text: '渲染函数',
      collapsible: true,
      children: [
        { text: '渲染函数', link: '/framework/vue/render-function/render-function' },
        { text: '函数式组件', link: '/framework/vue/render-function/functional-components' },
      ]
    },
    {
      text: '组件间通信',
      collapsible: true,
      children: [
        { text: '组件间通信总结', link: '/framework/vue/communication-between-components/summary' },
        { text: 'provide、inject', link: '/framework/vue/communication-between-components/provide-inject' },
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
      children: [
        { text: '如何运行 Jest 单元测试', link: '/framework/vue/source-code/jest' },
        { text: '单独使用某个功能', link: '/framework/vue/source-code/using-a-function-alone' },
        { text: 'mini-vue', link: '/framework/vue/source-code/mini-vue' },
        { text: 'proxy 和 defineProperty 区别', link: '/framework/vue/source-code/proxy-defineProperty' },
        { text: '源码结构', link: '/framework/vue/source-code/source-code-structure' },
        { text: '虚拟节点', link: '/framework/vue/source-code/virtual-dom' },
      ]
    },
  ],
  '/component-library/element-plus/': [
    {
      text: '封装 el-dialog',
      collapsible: true,
      children: [
        { text: '封装 el-dialog', link: '/component-library/element-plus/wrap-dialog/' },
        { text: '比较原始的方式', link: '/component-library/element-plus/wrap-dialog/old' },
        { text: '通过计算属性', link: '/component-library/element-plus/wrap-dialog/computed' },
        { text: '通过 $attrs', link: '/component-library/element-plus/wrap-dialog/attrs' }
      ]
    },
    {
      text: '多条件过滤',
      link: '/component-library/element-plus/multiple-conditions-filter/'
    },
    {
      text: '前端分页',
      link: '/component-library/element-plus/pagination'
    }
  ],
  '/dependency/browser/': [
    {
      text: 'vxe-table',
      collapsible: true,
      children: [
        { text: '安装', link: '/dependency/browser/vxe-table/install' },
      ]
    }
  ],
  '/build-tool/': [
    {
      text: 'Vite',
      collapsible: true,
      children: [
        { text: '配置', link: '/build-tool/vite/config' },
        { text: '依赖预构建', link: '/build-tool/vite/dependency-pre-bundling' },
        { text: '部署', link: '/build-tool/vite/deploy' },
      ]
    }
  ]
});
