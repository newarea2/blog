import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: '动态使用 Icon',
    collapsible: true,
    prefix: '/basis/html/svg',
    children: [
      { text: '基础', link: 'basis' },
      { text: 'fill 和 stroke', link: 'fill-stroke' },
      { text: 'element', link: 'element' },
      { text: 'SVG 雪碧图', link: 'svg-sprite' },
      { text: 'viewbox', link: 'viewbox' },
    ]
  },
  { text: 'contenteditable', link: '/basis/html/contenteditable' },
  { text: '拖放', link: '/basis/html/drag' },
  { text: '字符实体', link: '/basis/html/entity' },
  { text: 'preload 和 prefetch', link: '/basis/html/preload-prefetch' },
]

export default sidebar