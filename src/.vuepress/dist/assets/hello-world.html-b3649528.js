import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as l,a as n,b as s,f as i,d as p}from"./app-72775176.js";const c={},r=n("h1",{id:"helloworld",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#helloworld","aria-hidden":"true"},"#"),s(" helloWorld")],-1),d={href:"https://eslint.org/docs/user-guide/getting-started",target:"_blank",rel:"noopener noreferrer"},u=p(`<ul><li>创建一个 npm 项目</li><li>生成一个 ESLint 模板配置文件 <code>npx eslint --init</code></li></ul><p>最终项目的目录结构如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- eslint-test
    |-- .eslintrc
    |-- package-lock.json
    |-- package.json
    |-- src
        |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// .eslintrc</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 eslint-test 目录，执行 <code>npx eslint ./src/index.js</code> （注意，要指定一个目标文件）或者执行 <code>npx eslint --ext .js,.jsx,.ts,.tsx</code>。</p><p>在配置文件 <code>rules</code> 属性中可以自定义规则：</p><ul><li><code>off</code> 或 0 表示关闭该规则。</li><li><code>warn</code> 或 1 表示将该规则作为一个警告打开。</li><li><code>error</code> 或 2 表示将该规则作为一个错误打开。</li></ul>`,8);function v(k,m){const e=o("ExternalLinkIcon");return t(),l("div",null,[r,n("p",null,[n("a",d,[s("Getting Started with ESLint"),i(e)])]),u])}const h=a(c,[["render",v],["__file","hello-world.html.vue"]]);export{h as default};
