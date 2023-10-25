import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as a,a as n,b as e,f as s,d as t}from"./app-f1b20077.js";const u={},o=n("h1",{id:"使用-rollup-打造自己的-npm-包-全流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-rollup-打造自己的-npm-包-全流程","aria-hidden":"true"},"#"),e(" 使用 rollup 打造自己的 npm 包 (全流程)")],-1),c={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fyes1am%2Fdry",title:"https://github.com/yes1am/dry",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="_1-使用-typescript" tabindex="-1"><a class="header-anchor" href="#_1-使用-typescript" aria-hidden="true">#</a> 1. 使用 TypeScript</h2><p>安装 TypeScript: <code>yarn add typescript -D</code></p><p>生成 tsconfig.json 文件，用来配置 ts 的编译选项：<code>npx tsc --init</code></p><p><em>tsconfig.json</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;es5&quot;,                                /* Specify ECMAScript target version: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39;, &#39;ES2020&#39;, or &#39;ESNEXT&#39;. */
    &quot;module&quot;: &quot;esnext&quot;,                           /* Specify module code generation: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, &#39;es2020&#39;, or &#39;ESNext&#39;. */

    // 输出的目录
    &quot;outDir&quot;: &quot;./types&quot;,                              /* Redirect output structure to the directory. */

    /* Strict Type-Checking Options */
    &quot;strict&quot;: true,                                 /* Enable all strict type-checking options. */
    &quot;noImplicitAny&quot;: false,                       /* Raise error on expressions and declarations with an implied &#39;any&#39; type. */

    /* Module Resolution Options */
		// 模块的解析策略
    &quot;moduleResolution&quot;: &quot;node&quot;,                  /* Specify module resolution strategy: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6). */
    // &quot;allowSyntheticDefaultImports&quot;: true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    &quot;esModuleInterop&quot;: true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation

    /* Advanced Options */
    &quot;skipLibCheck&quot;: true,                           /* Skip type checking of declaration files. */
    &quot;forceConsistentCasingInFileNames&quot;: true,        /* Disallow inconsistently-cased references to the same file. */

    // 只生成类型文件，不转换代码
    &quot;declaration&quot;: true,
    &quot;emitDeclarationOnly&quot;: true,
  },
  // 只编译 src 目录下的文件
  &quot;include&quot;: [
    &quot;src&quot;
  ],
  &quot;exclude&quot;: [
    &quot;test&quot;
  ]
}

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-编写源码并导出" tabindex="-1"><a class="header-anchor" href="#_2-编写源码并导出" aria-hidden="true">#</a> 2. 编写源码并导出</h2><p>在 src 目录中使用 TypeScript 编写源码，并在 <code>src/index.ts</code>  中将需要的内容进行导出</p><h2 id="_3-添加-eslint-用于规范源代码" tabindex="-1"><a class="header-anchor" href="#_3-添加-eslint-用于规范源代码" aria-hidden="true">#</a> 3. 添加 ESLint 用于规范源代码</h2><p>一个库的代码，最好是有统一的代码规范，某些地方要不要空格，行尾要不要分号等等。因此我们需要 ESLint 来检查我们的代码。</p><p>安装 ESLint: <code>yarn add eslint -D</code></p><p>生成配置文件：<code>npx eslint --init</code></p><p>同时新建 <code>.eslintignore</code>  让 eslint 不检查某些文件，内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test/**
lib/**
types/**
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用-rollup-进行打包" tabindex="-1"><a class="header-anchor" href="#_4-使用-rollup-进行打包" aria-hidden="true">#</a> 4. 使用 rollup 进行打包</h2><p>到了关键的环节，我们的代码是 ESM 规范的，并且是由 TS 书写的。我们要将它打包，提供给 Node 或者浏览器直接使用，因此我们可以用 rollup 对代码进行处理。</p><p>安装 rollup: <code>yarn add rollup -D</code></p><p>新建 <code>rollup.config.js</code> 配置文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import typescript from &#39;@rollup/plugin-typescript&#39;;  // 让 rollup 认识 ts 的代码
import pkg from &#39;./package.json&#39;;

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from &#39;rollup-plugin-node-resolve&#39;;
import commonjs from &#39;@rollup/plugin-commonjs&#39;;

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = \`
if(typeof window !== &#39;undefined&#39;) {
  window._Dry_VERSION_ = &#39;\${pkg.version}&#39;
}\`

export default {
  input: &#39;./packages/index.ts&#39;,
  output: [
    {
      file: pkg.main,
      format: &#39;cjs&#39;,
      footer,
    },
    {
      file: pkg.module,
      format: &#39;esm&#39;,
      footer,
    },
    {
      file: pkg.browser,
      format: &#39;umd&#39;,
      name: &#39;Dry&#39;,
      footer,
    },
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve()
  ]
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>往 package.json 文件中新增 scripts 命令: build 和 build:types 用于打包 bundle 和 types 类型文件：</p><p><em>package.json</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;@songjp/dry&quot;,
  &quot;version&quot;: &quot;0.0.1&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;lib/bundle.cjs.js&quot;,
  &quot;module&quot;: &quot;lib/bundle.esm.js&quot;,
  &quot;browser&quot;: &quot;lib/bundle.browser.js&quot;,
  &quot;types&quot;: &quot;types/index.d.ts&quot;,
  &quot;scripts&quot;: {
    // 打包出 cjs, esm, 和 umd 的包
    &quot;build&quot;: &quot;rollup -c&quot;,
    // 打包出类型文件
    &quot;build:types&quot;: &quot;tsc&quot;
  },
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;devDependencies&quot;: {
    &quot;@rollup/plugin-commonjs&quot;: &quot;^18.0.0&quot;,
    &quot;@rollup/plugin-typescript&quot;: &quot;^8.2.1&quot;,
    &quot;rollup&quot;: &quot;^2.45.1&quot;,
    &quot;rollup-plugin-node-resolve&quot;: &quot;^5.2.0&quot;,
    &quot;typescript&quot;: &quot;^4.2.4&quot;
  },
  &quot;dependencies&quot;: {
    // 一个单纯用于测试的, 第三方 npm 包
    &quot;dayjs&quot;: &quot;^1.10.4&quot;
  }
}

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 yarn build 和 yarn build:types 可查看打包结果</p><h2 id="_5-使用-jest-对代码进行测试" tabindex="-1"><a class="header-anchor" href="#_5-使用-jest-对代码进行测试" aria-hidden="true">#</a> 5. 使用 jest 对代码进行测试</h2><p>如果没有测试用例，以后就不太敢对这个库的代码进行改动，万一改坏了呢？因此我们需要对代码添加测试用例。</p>`,24),m={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fkulshekhar%2Fts-jest",title:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer"},p=n("code",null,"yarn add jest ts-jest @types/jest -D",-1),b=t(`<p>创建 jest 配置文件: <code>npx ts-test config:init</code></p><p>在 package.json 中新增测试 scripts: test</p><p><em>package.json</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;jest&quot;,
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根目录下新建 test 目录，存放测试文件，例如 <code>test/Queue.ts</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Queue } from &#39;../packages/index&#39;;

describe(&#39;Queue&#39;, () =&gt; {
  test(&#39;Queue Methods&#39;, () =&gt; {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(&#39;john&#39;)
    queue.enqueue(&#39;jack&#39;)
    expect(queue.toString()).toBe(&#39;john,jack&#39;)
    queue.enqueue(&#39;camila&#39;)
    expect(queue.toString()).toBe(&#39;john,jack,camila&#39;)
    expect(queue.size()).toBe(3)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    queue.dequeue()
    expect(queue.toString()).toBe(&#39;camila&#39;)
  });
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 yarn test 可查看测试用例的情况</p><h2 id="_6-使用-vuepress-编写文档" tabindex="-1"><a class="header-anchor" href="#_6-使用-vuepress-编写文档" aria-hidden="true">#</a> 6. 使用 VuePress 编写文档</h2>`,8),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2F",title:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"_7-配置-husky-规范-commit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-配置-husky-规范-commit","aria-hidden":"true"},"#"),e(" 7. 配置 husky 规范 commit")],-1),q=n("p",null,'当对库提交代码时，我们希望提交的代码都是"好的"，希望在 lint 和 test 都通过之后才能进行 commit。',-1),f={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%2Ftree%2Fmaster%2Fpackages%2Fconventional-changelog-cli",title:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fhusky%2Ftree%2Fmain",title:"https://github.com/typicode/husky/tree/main",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.juejin.cn/?target=https%3A%2F%2Ftypicode.github.io%2Fhusky%2F%23%2F%3Fid%3Dmigrate-from-v4-to-v6",title:"https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v6",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;hooks&quot;: {
    &quot;pre-commit&quot;: &quot;npm test &amp;&amp; npm run foo&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在新版本中，利用 git 的新配置 <code>core.hooksPath</code> ，使得 husky 的使用方式改变了。首先在 package.json 中新增 prepare scripts:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm set-script prepare &quot;husky install&quot; &amp;&amp; npm run prepare
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新增一个 hook：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky add .husky/pre-commit &quot;这里是你需要执行的命令，比如 npm test &amp;&amp; npm run foo&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong> 每次删除 .git 目录之后，需要再次执行 <code>yarn prepare</code> , 该命令修改了当前仓库的 git 中 <code>core.hooksPath</code> 的配置，具体配置可以查看 .git/config 文件: <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0272276f0599432e922a4f90e39e652a~tplv-k3u1fbpfcp-zoom-1.image" alt="image.png" loading="lazy"></p><h2 id="_8-配置-github-action" tabindex="-1"><a class="header-anchor" href="#_8-配置-github-action" aria-hidden="true">#</a> 8. 配置 Github Action</h2>`,7),x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.github.com%2Fen%2Factions",title:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>总之 Github Action 可以帮助你自动化的做一些事情, 比如每次 push 代码时自动进行代码检查，或者每次打 tag 时，自动将代码发布到 npm 仓库去，并且部署文档。</p><p>在根目录下新建 .github/workflows/dry.yml 文件，内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: dry

on:
  push:
    tags:
      - &#39;*&#39;           # Push events to every tag not containing /
  pull_request:
    branches:
      - main
  # 或者手动触发
  workflow_dispatch:       # 设置手动触发，参考文档 https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/

jobs:
  build:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2   # 将我们提交的代码 checkout (拷贝) 一份出来
        with:
          persist-credentials: false # otherwise, the token used is the GITHUB_TOKEN, instead of your personal token
          fetch-depth: 0 # otherwise, you will failed to push refs to dest repo

      - uses: actions/setup-node@v1  # 会建立 node 环境，便于我们执行 node 脚本
      - uses: actions/cache@v2
        with:
          path: ~/.npm
          key: \${{ runner.os }}-node-\${{ hashFiles(&#39;**/package-lock.json&#39;) }}
          restore-keys: |
            \${{ runner.os }}-node-
      - name: check code   # 检查代码
        run: |
          npm install
          npm run lint
          npm run test

      - run: echo &quot;//registry.npmjs.org/:_authToken=\${{ secrets.NPM_TOKEN }}&quot; &gt; ~/.npmrc
      - name: publish                          # 发布 npm 包
        if: \${{contains(github.ref, &#39;refs/tags/&#39;)}}  # 如果有新 tag
        run: |
          npm run build
          npm run build:types
          npm run docs:build
          npm publish --access public
      - name: deploy                          # 发布文档
        if: \${{contains(github.ref, &#39;refs/tags/&#39;)}}
        uses: JamesIves/github-pages-deploy-action@4.1.1
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: docs/.vuepress/dist # The folder the action should deploy.
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的配置主要是让 Github Action 帮我们跑 lint 和 test，并且当我们 <strong>推了 tag 时</strong>( 比如 <code>git push origin --tags</code> ，意味着我们想要发布新版本)，那么就再帮我们发包到 npm 上，并且部署下最新的文档。</p><p><strong>注意：</strong> 配置文件中使用到了 secrets.NPM_TOKEN 这样一个变量，这是一个 npm 网站的 token 值，有了这个 token 就可以进行发布了。你可以在本地执行 npm login ，登录成功后通过 <code>cat ~/.npmrc</code> 查看，然后将 token 值设置到 Github 仓库中。</p><h2 id="_9-如何发布" tabindex="-1"><a class="header-anchor" href="#_9-如何发布" aria-hidden="true">#</a> 9. 如何发布</h2><p>在我们写完代码之后，如果需要发布新版本，就需要以下的一些步骤:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 打 tag
npm version patch/minor/maior

# 推代码
git push

# 推 tag 触发 CI 执行发布
git push origin --tags
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),F={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FSBoudrias%2FInquirer.js%2F",title:"https://github.com/SBoudrias/Inquirer.js/",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"git push",-1),w=t(`<h2 id="_10-如何使用" tabindex="-1"><a class="header-anchor" href="#_10-如何使用" aria-hidden="true">#</a> 10. 如何使用</h2><p>当我们的包发布之后，我们可以通过以下方式来使用我们的包: <code>yarn add @songjp/dry</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 方式1: import
import { Queue } from &#39;@songjp/dry&#39;
console.log(new Queue().isEmpty())

// 方式2: require 的方式，适用于 NodeJS
const { Queue } = require(&#39;@songjp/dry&#39;)
console.log(new Queue().isEmpty())

// 方式3: 在 HTML 文件中使用 script 标签加载，此时会在 window 上挂载一个 Dry 的变量，比如
&lt;script src=&quot;node_modules/@songjp/dry/lib/bundle.browser.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  console.log(new Dry.Queue().isEmpty())
&lt;/script&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E={href:"https://link.juejin.cn/?target=https%3A%2F%2Fyes1am.github.io%2Fdry%2F",title:"https://yes1am.github.io/dry/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://juejin.cn/post/6950557086916804645",target:"_blank",rel:"noopener noreferrer"};function N(T,I){const i=l("ExternalLinkIcon");return r(),a("div",null,[o,n("p",null,[e("本文大致梳理了使用 rollup 打造自己 npm 包的流程，其中包括测试，文档，发布等内容。大多是流程的梳理，过程细节并未一一写明，可配合 "),n("a",c,[e("源码仓库"),s(i)]),e(" 一起阅读。")]),v,n("p",null,[e("我们使用 "),n("a",m,[e("ts-jest"),s(i)]),e(" 来对代码进行测试："),p]),b,n("p",null,[e("一个库提供给别人用，最好能够有说明文档，说明这个库暴露了哪些 API，这些 API 如何使用等。因此我们需要给这个库搭建个文档站点。我们选用了 "),n("a",h,[e("VuePress"),s(i)]),e(" 来搭建文档，后续我们还会将文档部署到 Github Pages。")]),g,q,n("p",null,[e("另外，我们还可以规范 commit message 的格式，要求更有意义的 commit message 才能进行 commit，这样方便后续通过脚本生成 CHANGELOG，详情请查看: "),n("a",f,[e("conventional-changelog-cli"),s(i)])]),n("p",null,[e("因此，我们可以使用 husky 来规范 commit。详情查看 "),n("a",y,[e("官方文档"),s(i)])]),n("p",null,[e("在前两天使用的过程中，发现 husky 的使用方式变了。即 husky 有一个"),n("a",_,[e(" v4 - v6 版本的更新"),s(i)]),e("，原来的使用方式是在 package.json 中添加以下的内容:")]),k,n("p",null,[e("如果不熟悉 Github Action 的话，可以先看看 "),n("a",x,[e("Github Action 文档"),s(i)]),e("。")]),j,n("p",null,[e("这个步骤也可以优化，比如通过编写脚本来完成所有步骤。利用 "),n("a",F,[e("Inquirer.js"),s(i)]),e(" 这种交互式命令行的方式，比如通过命令行来选择新版本是 patch，minor 还是 major，得到所有的答案之后，最终在脚本中执行 "),S,e(" 的操作。")]),w,n("p",null,[e("也可以在 "),n("a",E,[e("yes1am.github.io/dry/"),s(i)]),e(" 中查看我们书写的文档，了解 @songjp/dry 如何使用。")]),n("p",null,[e("参考 "),n("a",A,[e("使用 rollup 打造自己的 npm 包 (全流程)"),s(i)])])])}const P=d(u,[["render",N],["__file","write-package-use-rollup.html.vue"]]);export{P as default};
