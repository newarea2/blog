import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Express',
    collapsible: true,
    prefix: '/dependency/node/express',
    children: [
      { text: '基础', link: 'basic' }
    ]
  },
  {
    text: 'Koa',
    collapsible: true,
    prefix: '/dependency/node/koa',
    children: []
  },
  { text: 'chalk', link: '/dependency/node/chalk' },
  { text: 'color-convert', link: '/dependency/node/color-convert' },
  { text: 'cross-env', link: '/dependency/node/cross-env' },
  { text: 'EJS', link: '/dependency/node/ejs' },
  { text: 'exaca', link: '/dependency/node/exaca' },
  { text: 'fs-extra', link: '/dependency/node/fs-extra' },
  { text: 'inquire', link: '/dependency/node/inquire' },
  { text: 'mddir', link: '/dependency/node/mddir' },
  { text: 'nodemon', link: '/dependency/node/nodemon' },
  { text: 'prettier', link: '/dependency/node/prettier' }
]

export default sidebar