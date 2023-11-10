import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'package',
    collapsible: true,
    prefix: '/basis/npm/package',
    children: [
      { text: 'module', link: 'module' },
      { text: 'peerDependencies', link: 'peerdependencies' },
      { text: 'type', link: 'type' },
      { text: 'types', link: 'types' },
      { text: 'unpkg', link: 'unpkg' }
    ]
  },
  { text: 'cli 命令行（一）', link: '/basis/npm/cli' },
  { text: 'cli 命令行（二）', link: '/basis/npm/cli01' },
  { text: 'dependencies、devDependencies', link: '/basis/npm/dependencies-vs-devdependencies' },
  { text: '安装（一）', link: '/basis/npm/install' },
  { text: '安装（二）', link: '/basis/npm/install01' },
  { text: '完整性', link: '/basis/npm/integrity' },
  { text: 'npm link', link: '/basis/npm/npm-link' },
  { text: '包管理机制', link: '/basis/npm/npm-principle' },
  { text: 'npx', link: '/basis/npm/npx' },
  { text: 'package lock', link: '/basis/npm/package-lock' },
  { text: '发布 npm 包', link: '/basis/npm/publish-package' },
  { text: '使用 rollup 打造自己的 npm 包', link: '/basis/npm/write-package-use-rollup' }
]

export default sidebar