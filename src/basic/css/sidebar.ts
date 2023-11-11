import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'flex',
    collapsible: true,
    prefix: '/basic/css/flex',
    children: [
      { text: '基础', link: 'basic' },
      { text: 'flex-basis', link: 'flex-basis' },
      { text: 'flex-wrap-vs-flex-shrink', link: 'flex-wrap 和 flex-shrink' },
      { text: 'flex值为1', link: 'shorthand-values-for-the-flex-properties' }
    ]
  },
  {
    text: 'grid',
    collapsible: true,
    prefix: '/basic/css/grid',
    children: [
      { text: '基础', link: 'basic' },
    ]
  },
  {
    text: 'Sass',
    collapsible: true,
    prefix: '/basic/css/sass',
    children: [
      { text: 'use', link: 'use' },
    ]
  },
  { text: '2D、3D 变换', link: '/basic/css/2d-3d' },
  { text: '绝对定位', link: '/basic/css/absolute' },
  { text: '背景', link: '/basic/css/background' },
  { text: 'calc', link: '/basic/css/calc' },
  { text: '层叠性、继承性、优先级', link: '/basic/css/cascade-specificity-inheritance' },
  { text: '居中', link: '/basic/css/center' },
  { text: 'currentColor', link: '/basic/css/currentColor' },
  { text: '自定义属性', link: '/basic/css/custom-property' },
  { text: '双飞翼布局', link: '/basic/css/double-fly-wings-loyout' },
  { text: 'em、rem 和 %', link: '/basic/css/em-rem ' },
  { text: 'filter', link: '/basic/css/filter' },
  { text: 'font', link: '/basic/css/font' },
  { text: '渐变色', link: '/basic/css/gradient' },
  { text: 'height', link: '/basic/css/height' },
  { text: 'image', link: '/basic/css/image' },
  { text: 'nth-child、nth-of-type', link: '/basic/css/nth-child' },
  { text: '伪类选择器、伪元素', link: '/basic/css/pseudo-element-class' },
  { text: '圆角 radius', link: '/basic/css/radius' },
  { text: 'Sass、SCSS', link: '/basic/css/sass-vs-scss' },
  { text: '滚动条', link: '/basic/css/scrollbar' },
  { text: '表格', link: '/basic/css/table' },
  { text: '过渡和动画', link: '/basic/css/transition-animation' },
  { text: 'vw、vh、vmin、vmax', link: '/basic/css/vw-vh-vmin-vmax' }
]

export default sidebar