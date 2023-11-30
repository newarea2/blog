import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as p,b as s,d as n,f as e,a as c}from"./app-90f462c1.js";const l={},u=s("h1",{id:"husky",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#husky","aria-hidden":"true"},"#"),n(" husky")],-1),r=s("p",null,"husky 可以让我们向项目中方便添加 git hooks。",-1),d={href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhuanlan.zhihu.com/p/366786798",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/jiaoshou/p/12222665.html",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>创建一个 husky 项目 husky-test</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> husky-test
<span class="token builtin class-name">cd</span> husky-test
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">git</span> init
<span class="token function">npm</span> i husky <span class="token parameter variable">-D</span>
npx husky <span class="token function">install</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npm test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>npm husky install</code> 的作用是生成 <code>.husky/_/.gitignore</code> 和 <code>.husky/_/husky.sh</code></p><p><code>npx husky add .husky/commit-msg &#39;npm test&#39;</code> 的作用是生成 <code>.husky/pre-commit</code></p><p>目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- husky-test
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- .husky # 通过命令 npx husky-init 生成的
    |   |-- pre-commit # pre-commit hooks
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky-test&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// husky.sh
<span class="token comment">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

<span class="token function">npm</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目创建了一个 pre-commit hooks，每次提交代码之前会执行命令<code>npm test</code></p><p>添加git hooks，运行一下命令创建git hooks</p><p><code>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</code><br> 如果没成功，就执行 <code>husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</code><br> 或 <code>.\\node_modules\\.bin\\husky.cmd add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</code></p><p>运行完该命令后我们会看到 <code>.husky/</code> 目录下新增了一个名为 pre-commit 的 shell 脚本。</p>`,12);function h(b,y){const a=o("ExternalLinkIcon");return i(),p("div",null,[u,r,s("p",null,[s("a",d,[n("官网"),e(a)])]),s("p",null,[s("a",k,[n("husky使用总结"),e(a)])]),s("p",null,[s("a",m,[n("GitHook 工具 —— husky介绍及使用"),e(a)])]),v])}const _=t(l,[["render",h],["__file","husky.html.vue"]]);export{_ as default};
