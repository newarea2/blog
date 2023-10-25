import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,d}from"./app-72775176.js";const o={},s=d(`<h1 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo" aria-hidden="true">#</a> monorepo</h1><p>当仓库多项目，<code>monorepo</code> 就是把多个工程放到一个 git 仓库中进行管理，因此他们可以共享同一套构建流程、代码规范也可以做到统一，特别是如果存在模块间的相互引用的情况，查看代码、修改bug、调试等会更加方便。</p><p>在一个终端中执行命令，有时需要对不用的 package 执行操作，为了避免来回进入多个不同 package，可以在项目根目录下使用 <code>--filter</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- pnpm-workspace
    |-- package.json
    |-- pnpm-lock.yaml
    |-- pnpm-workspace.yaml
    |-- packages
        |-- add-one
        |-- add-two
        |-- adder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想在 add-one 下安装 dayjs，有两种方式：</p><p>方式一：</p><p>进入目录 pnpm-workspace/packages/add-one 下，执行 <code>pnpm install dayjs</code></p><p>方式二：</p><p>在根目录 pnpm-workspace 下执行 <code>pnpm install dayjs --filter &#39;add-one&#39;</code></p>`,9),c=[s];function i(p,r){return n(),a("div",null,c)}const m=e(o,[["render",i],["__file","monorepo.html.vue"]]);export{m as default};
