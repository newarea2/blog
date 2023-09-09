import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
  {
    text: '🔥 框架',
    children: [
      // 路径不要写成了 /framework/vue/watch/index，否则菜单不高亮
      { text: "Vue", link: "/framework/vue/watch/" },
      { text: "React", link: "/react/bind-this" },
      { text: "Angular", link: "/react/bind-this" },
    ]
  },
  {
    text: '组件库',
    children: [
      // 路径不要写成了 /framework/vue/watch/index，否则菜单不高亮
      { text: "Element Plus", link: "/component-library/element-plus/wrap-dialog/" },
      { text: "Arco Design", link: "/react/bind-this" },
      { text: "Ant Design", link: "/react/bind-this" },
    ]
  },
  {
    text: '基础',
    children: [
      { text: "HTML", link: "/framework/vue/watch/" },
      { text: "JavaScript", link: "/react/bind-this" },
      { text: "CSS", link: "/react/bind-this" },
      { text: "TypeScript", link: "/react/bind-this" },
      { text: "Tailwind CSS", link: "/react/bind-this" },
      { text: "Node", link: "/react/bind-this" },
      { text: "Npm", link: "/react/bind-this" },
    ]
  },
  {
    text: '构建工具',
    children: [
      { text: "Vite", link: "/build-tool/vite/config" },
      { text: "Rollup", link: "/react/bind-this" },
      { text: "Parcel", link: "/react/bind-this" },
      { text: "Webpack", link: "/react/bind-this" },
    ]
  },
  {
    text: '小程序',
    children: [
      { text: "微信", link: "/framework/vue/watch/" },
      { text: "支付宝", link: "/react/bind-this" },
      { text: "抖音", link: "/react/bind-this" },
    ]
  },
  {
    text: '依赖包',
    children: [
      {
        text: 'Node 端',
        link: ''
        // children: [
        //   { text: "Express", link: "/framework/vue/watch/" },
        //   { text: "Koa", link: "/react/bind-this" },
        //   { text: "Chalk", link: "/react/bind-this" },
        // ]
      },
      {
        text: '浏览器端',
        link: '/dependency/browser/vxe-table/install'
        // children: [
        //   { text: "Echarts", link: "/framework/vue/watch/" },
        //   { text: "Axios", link: "/react/bind-this" },
        //   { text: "Monaco Editor", link: "/react/bind-this" },
        //   { text: "Lodash", link: "/react/bind-this" },
        //   { text: "Vue-flow", link: "/react/bind-this" },
        // ]
      }
    ]
  },
  {
    text: '规范化',
    children: [
      { text: "ESLint", link: "/framework/vue/watch/" },
      { text: "Prettier", link: "/react/bind-this" },
    ]
  }
])
