import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'package',
    collapsible: true,
    prefix: '/basic/npm/package',
    children: [
      { text: 'module', link: 'module' },
      { text: 'peerDependencies', link: 'peerdependencies' },
      { text: 'type', link: 'type' },
      { text: 'types', link: 'types' },
      { text: 'unpkg', link: 'unpkg' }
    ]
  },
  { text: 'cli 命令行（一）', link: '/basic/npm/cli' },
  { text: 'cli 命令行（二）', link: '/basic/npm/cli01' },
  { text: 'dependencies、devDependencies', link: '/basic/npm/dependencies-vs-devdependencies' },
  { text: '安装（一）', link: '/basic/npm/install' },
  { text: '安装（二）', link: '/basic/npm/install01' },
  { text: '完整性', link: '/basic/npm/integrity' },
  { text: 'npm link', link: '/basic/npm/npm-link' },
  { text: '包管理机制', link: '/basic/npm/npm-mechanism' },
  { text: 'npx', link: '/basic/npm/npx' },
  { text: 'package lock', link: '/basic/npm/package-lock' },
  { text: '发布 npm 包', link: '/basic/npm/publish-package' },
  { text: '使用 rollup 打造自己的 npm 包', link: '/basic/npm/write-package-use-rollup' }
]

export default sidebar