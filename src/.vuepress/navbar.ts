import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
  {
    text: '🔥 框架',
    children: [
      // 路径不要写成了 /framework/vue/watch/index，否则菜单不高亮
      { text: "Vue", activeMatch: '^/framework/vue', link: "/framework/vue/pinia/pinia" },
      // { text: "React", link: "" },
      // { text: "Angular", link: "" },
    ]
  },
  {
    text: '组件库',
    children: [
      { text: "Element Plus", activeMatch: '^/component-library/element-plus', link: "/component-library/element-plus/wrap-dialog/" },
      { text: "Arco Design", activeMatch: '^/component-library/arco-design', link: "/component-library/arco-design/icon" },
      // { text: "Ant Design", link: "" },
    ]
  },
  {
    text: '基础',
    children: [
      { text: "HTML", activeMatch: '^/basic/html', link: "/basic/html/svg/basic" },
      { text: "JavaScript", activeMatch: '^/basic/javascript', link: "/basic/javascript/blob/arraybuffer" },
      { text: "CSS", activeMatch: '^/basic/css', link: "/basic/css/flex/basic" },
      { text: "TypeScript", activeMatch: '^/basic/typescript', link: "/basic/typescript/config/basic" },
      // { text: "Tailwind CSS", activeMatch: '^/basic/tailwindCss', link: "/react/bind-this" },
      { text: "Node", activeMatch: '^/basic/node', link: "/basic/node/argv" },
      { text: "Npm", activeMatch: '^/basic/npm', link: "/basic/npm/package/module" },
    ]
  },
  {
    text: '构建工具',
    children: [
      { text: "Vite", activeMatch: '^/build-tool/vite', link: "/build-tool/vite/config" },
      { text: "Rollup", activeMatch: '^/build-tool/rollup', link: "/build-tool/rollup/config" },
      { text: "Parcel", activeMatch: '^/build-tool/parcel', link: "/build-tool/parcel/compare-with-rollup" },
      // { text: "Webpack", activeMatch: '^/build-tool/webpack', link: "/build-tool/webpack/config" },
    ]
  },
  // {
  //   text: '小程序',
  //   children: [
  //     { text: "微信", link: "/framework/vue/watch/" },
  //     { text: "支付宝", link: "/react/bind-this" },
  //     { text: "抖音", link: "/react/bind-this" },
  //   ]
  // },
  {
    text: '依赖包',
    children: [
      { text: 'Node 端', activeMatch: '^/dependency/node', link: '/dependency/node/express/basic' },
      { text: '浏览器端', activeMatch: '^/dependency/browser', link: '/dependency/browser/axios/basic' },
    ]
  },
  { text: '规范化', activeMatch: '^/standardization', link: '/standardization/eslint/basic' },
])
