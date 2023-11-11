import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: '动态使用 Icon',
    collapsible: true,
    prefix: '/basic/html/svg',
    children: [
      { text: '基础', link: 'basic' },
      { text: 'fill 和 stroke', link: 'fill-stroke' },
      { text: 'element', link: 'element' },
      { text: 'SVG 雪碧图', link: 'svg-sprite' },
      { text: 'viewbox', link: 'viewbox' },
    ]
  },
  { text: 'contenteditable', link: '/basic/html/contenteditable' },
  { text: '拖放', link: '/basic/html/drag' },
  { text: '字符实体', link: '/basic/html/entity' },
  { text: 'preload 和 prefetch', link: '/basic/html/preload-prefetch' },
]

export default sidebar