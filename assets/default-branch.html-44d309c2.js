import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as i}from"./app-90f462c1.js";const r={},c=i('<h1 id="github-默认主分支变成了-main" tabindex="-1"><a class="header-anchor" href="#github-默认主分支变成了-main" aria-hidden="true">#</a> Github 默认主分支变成了 main</h1><p>Github 在 2020/10/1 宣布上的所有新库都将用中性词 main 命名，取代原来的 master，而我们在本地用 <code>git init</code> 初始化的项目，主分支默认是 master。如何解决这个问题呢？</p><p>方式一</p><p>修改 github 设置，使新创建的仓库默认主分支依然是 master: Settings - Reositories - 修改默认主分支为 master</p><p>方式二</p><p>在本地使用 <code>git branch -M main</code>，强制将当前分支名重命名为 main</p><p>Github 为什么做出这个更改？</p><p>原因是像 Blacklist（黑名单）、whitelist（白名单）、master（主）、slave（从）等敏感词汇涉及种族歧视。</p>',8),n=[c];function s(o,h){return e(),a("div",null,n)}const d=t(r,[["render",s],["__file","default-branch.html.vue"]]);export{d as default};
