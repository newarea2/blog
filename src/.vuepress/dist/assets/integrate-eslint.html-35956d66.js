import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,f as l,d as i}from"./app-72775176.js";const c={},r=n("h1",{id:"整合-eslint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整合-eslint","aria-hidden":"true"},"#"),s(" 整合 ESLint")],-1),u={href:"https://github.com/rollup/plugins/tree/master/packages/eslint",target:"_blank",rel:"noopener noreferrer"},d=i(`<ul><li>新建 npm 项目 rollup-with-eslint</li><li>安装依赖 <code>npm i rollup @rollup/plugin-eslint -D</code>，不需要显式地安装 eslint，因为 @rollup/plugin-eslint 依赖了 eslint，执行该命令后，项目 node_modules 目录中会自动包含 eslint。</li><li>生成一个 ESLint 模板配置文件 <code>npx eslint --init</code></li></ul><p>注意 TSLint 已经废弃。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- rollup-with-eslint
    |-- .eslintrc
    |-- package-lock.json
    |-- package.json
    |-- rollup.config.js
    |-- src
        |-- foo.js
        |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> eslint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-eslint&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">eslint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">throwOnError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules/**&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lib/**&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// .eslintrc</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">2015</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./foo.js&#39;</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// foo.js</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npx rollup -c </code> 即可在打包<strong>前</strong>，对由入口文件 index.js 构成地整个依赖树进行 ESLint 校验。</p><p>如果执行 <code>npx eslint ./src/index.js</code>，只会对单一文件进行校验，而通过上述方式，只需执行一个命令就可以对多个文件进行校验。</p>`,9);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("使用的插件 "),n("a",u,[s("@rollup/plugin-eslint"),l(a)])])]),d])}const y=e(c,[["render",k],["__file","integrate-eslint.html.vue"]]);export{y as default};
