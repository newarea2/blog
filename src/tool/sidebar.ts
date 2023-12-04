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
      { text: '同步到 Gitee', link: 'sync-github-to-gitee' },
      { text: '部署静态文件', link: 'deploy-by-github-pages' },
      { text: '上传项目到服务器', link: 'upload-to-tencent' },
      { text: 'Github Pages', link: 'github-pages' },
      { text: 'ssh', link: 'ssh' },
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
  {
    text: 'Linux',
    collapsible: true,
    prefix: '/tool/linux',
    children: [
      { text: '用户', link: 'user' },
      { text: '文件基本属性', link: 'file-attribute' },
      { text: '文件及目录管理', link: 'file-directory' },
      { text: '开机启动', link: 'startup-item' },
      { text: '系统信息', link: 'system-infomation' },
      { text: 'vim', link: 'vim' },
      { text: '定时任务', link: 'crontab' },
      { text: 'find', link: 'find' },
      { text: '防火墙', link: 'firewall' },
      { text: '进程、端口', link: 'process-port' },
      { text: '打包、压缩', link: 'tar-zip' },
      { text: '环境变量', link: 'env' }
    ]
  },
  {
    text: 'Nginx',
    collapsible: true,
    prefix: '/tool/nginx',
    children: [
      { text: '安装', link: 'install' },
      { text: '简单使用', link: 'simple-use' },
      { text: '指定', link: 'direction' }
    ]
  },
  { text: '备案', link: '/tool/beian' },
  { text: 'CPU', link: '/tool/cpu' },
  { text: 'Photoshop', link: '/tool/photoshop' },
  { text: 'Stackblitz', link: '/tool/stackblitz' },
  { text: 'Xshell', link: '/tool/xshell' },
  { text: 'Xftp', link: '/tool/xftp' },
]

export default sidebar