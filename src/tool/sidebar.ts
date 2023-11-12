import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Git',
    collapsible: true,
    prefix: '/tool/git',
    children: [
      { text: '关联远程仓库', link: 'associate-github' },
      { text: '常用命令', link: 'common-command' },
      { text: '分支管理策略', link: 'git-flow' },
      { text: '分支管理策略1', link: 'git-flow1' },
      { text: '工作原理', link: 'how-git-work' },
      { text: '忽略规则', link: 'ignore' },
      { text: 'Linux 系统安装 Git', link: 'install' },
      { text: 'git pull 和 git fetch', link: 'pull-vs-fetch' },
      { text: 'tag', link: 'tag' },
    ]
  },
  {
    text: 'Github',
    collapsible: true,
    prefix: '/tool/github',
    children: [
      { text: '默认分支', link: 'default-branch' },
      { text: 'Github Actions', link: 'github-actions' },
      { text: 'Github Pages', link: 'github-pages' },
      { text: 'ssh', link: 'ssh' },
      { text: '同步到 Gitee', link: 'sync-github-to-gitee' }
    ]
  },
  {
    text: 'VSCode',
    collapsible: true,
    prefix: '/tool/vscode',
    children: [
      { text: '将 VSCode 添加至右键菜单', link: 'add-vscode-to-the-comtext-menu' },
      { text: '自定义折叠代码区别', link: 'fold-code' },
      { text: '常用插件', link: 'plugin' },
      { text: '常用配置', link: 'setting' },
      { text: '常用快捷键', link: 'shortcut-key' }
    ]
  },
  { text: '备案', link: '/tool/beian' },
  { text: 'CPU', link: '/tool/cpu' },
  { text: 'Photoshop', link: '/tool/photoshop' },
  { text: 'Stackblitz', link: '/tool/stackblitz' },
  { text: 'xshell', link: '/tool/xshell' }
]

export default sidebar