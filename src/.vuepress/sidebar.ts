import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/framework/vue/': [
    {
      text: 'watch',
      collapsible: true,
      children: [
        { text: '侦听', link: '/framework/vue/watch/' },
        { text: '侦听 props', link: '/framework/vue/watch/watch-props' },
        { text: '什么时候使用 deep', link: '/framework/vue/watch/when-to-use-deep-function' }
      ]
    }
  ]
});
