import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,a as n,b as s,f as l,d as i}from"./app-f1b20077.js";const c={},r=n("h1",{id:"整合-typescript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整合-typescript","aria-hidden":"true"},"#"),s(" 整合 TypeScript")],-1),u={href:"https://github.com/rollup/plugins/tree/master/packages/node-resolve",target:"_blank",rel:"noopener noreferrer"},d=i(`<ul><li>新建 npm 项目 rollup-with-eslint</li><li>安装依赖 <code>npm i rollup-plugin-typescript2 typescript tslib --D</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- rollup-with-eslint
    |-- tsconfig.json
    |-- package-lock.json
    |-- package.json
    |-- rollup.config.js
    |-- src
        |-- index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-commonjs&#39;</span>
<span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/index.ts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">p</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npx rollup -c </code>，生成 dist/index.js</p><p>可以发现，之前需要使用 tsc 命令，现在使用 rollup。</p>`,7);function k(v,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("使用的插件 "),n("a",u,[s("rollup-plugin-typescript2"),l(a)])])]),d])}const y=e(c,[["render",k],["__file","integrate-typescript.html.vue"]]);export{y as default};
