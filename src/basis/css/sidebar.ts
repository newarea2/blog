import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'flex',
    collapsible: true,
    prefix: '/basis/css/flex',
    children: [
      { text: '基础', link: 'basis' },
      { text: 'flex-basis', link: 'flex-basis' },
      { text: 'flex-wrap-vs-flex-shrink', link: 'flex-wrap 和 flex-shrink' },
      { text: 'flex值为1', link: 'shorthand-values-for-the-flex-properties' }
    ]
  },
  {
    text: 'grid',
    collapsible: true,
    prefix: '/basis/css/grid',
    children: [
      { text: '基础', link: 'basis' },
    ]
  },
  {
    text: 'Sass',
    collapsible: true,
    prefix: '/basis/css/sass',
    children: [
      { text: 'use', link: 'use' },
    ]
  },
  { text: '2D、3D 变换', link: '/basis/css/2d-3d' },
  { text: '绝对定位', link: '/basis/css/absolute' },
  { text: '背景', link: '/basis/css/background' },
  { text: 'calc', link: '/basis/css/calc' },
  { text: '层叠性、继承性、优先级', link: '/basis/css/cascade-specificity-inheritance' },
  { text: '居中', link: '/basis/css/center' },
  { text: 'currentColor', link: '/basis/css/currentColor' },
  { text: '自定义属性', link: '/basis/css/custom-property' },
  { text: '双飞翼布局', link: '/basis/css/double-fly-wings-loyout' },
  { text: 'em、rem 和 %', link: '/basis/css/em-rem ' },
  { text: 'filter', link: '/basis/css/filter' },
  { text: 'font', link: '/basis/css/font' },
  { text: '渐变色', link: '/basis/css/gradient' },
  { text: 'height', link: '/basis/css/height' },
  { text: 'image', link: '/basis/css/image' },
  { text: 'nth-child、nth-of-type', link: '/basis/css/nth-child' },
  { text: '伪类选择器、伪元素', link: '/basis/css/pseudo-element-class' },
  { text: '圆角 radius', link: '/basis/css/radius' },
  { text: 'Sass、SCSS', link: '/basis/css/sass-vs-scss' },
  { text: '滚动条', link: '/basis/css/scrollbar' },
  { text: '表格', link: '/basis/css/table' },
  { text: '过渡和动画', link: '/basis/css/transition-animation' },
  { text: 'vw、vh、vmin、vmax', link: '/basis/css/vw-vh-vmin-vmax' }
]

export default sidebar