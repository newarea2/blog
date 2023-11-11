import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'ESlint',
    collapsible: true,
    prefix: '/standardization/eslint',
    children: [
      { text: '基础', link: 'basic' },
      { text: '配置 env', link: 'config-env' },
      { text: '配置 extents', link: 'config-extents' },
      { text: '配置 globals', link: 'config-globals' },
      { text: '配置 parserOptions', link: 'config-parserOptions' },
      { text: '配置 plugins', link: 'config-plugins' },
      { text: '配置 processor', link: 'config-processor' },
      { text: '配置 rules', link: 'config-rules' },
      { text: '配置 eslint-config-* 和 eslint-plugin-* 的区别', link: 'eslint-config-vs-eslint-plugin' },
      { text: '编写插件', link: 'how-to-write-a-plugin' },
      { text: '忽略规则', link: 'ignore' },
      { text: '常用规则', link: 'rule' },
      { text: '共享配置', link: 'shareable-configs' },
      { text: '使用', link: 'use' },
    ]
  },
  {
    text: 'Prettier',
    collapsible: true,
    prefix: '/standardization/Prettier',
    children: [
      { text: '配置文件', link: 'config-file' },
      { text: '配置选项', link: 'config-option' },
      { text: '和 ESlint 的区别', link: 'difference-with-eslint' },
      { text: '忽略规则', link: 'ignore' },
      { text: '使用', link: 'use' },
      { text: 'WebStorm 设置', link: 'webstorm-setting' },
    ]
  },
  { text: 'commitlint', link: '/standardization/commitlint' },
  { text: 'commitzen', link: '/standardization/commitzen' },
  { text: 'editorconfig', link: '/standardization/editorconfig' },
  { text: 'husky', link: '/standardization/husky' },
  { text: 'lint-staged', link: '/standardization/lint-staged' },
  { text: 'stylelint', link: '/standardization/stylelint' },
  { text: 'yorkie', link: '/standardization/yorkie' },
  { text: '中文排版', link: '/standardization/chinese-copywriting-guidelines' },
]

export default sidebar