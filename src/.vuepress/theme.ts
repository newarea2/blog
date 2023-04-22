import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar } from './navbar';
import { enSidebar } from './sidebar';

export default hopeTheme({
  pure: true,
  breadcrumb: false,
  pageInfo: false,
  hostname: 'https://vuepress-theme-hope-docs-demo.netlify.app',

  iconAssets: 'iconfont',

  // TODO
  logo: '/logo.svg',
  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/theme-docs/src',

  navbar: enNavbar,
  sidebar: enSidebar,

  metaLocales: {
    editLink: 'Edit this page on GitHub',
  },

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
      '/zh/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: 'Waline',
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },
  }
});
