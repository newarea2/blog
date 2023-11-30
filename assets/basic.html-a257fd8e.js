import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,b as n,d as s,f as i,a as l}from"./app-90f462c1.js";const c={},u=n("h1",{id:"vxe-table",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vxe-table","aria-hidden":"true"},"#"),s(" vxe-table")],-1),r={href:"https://github.com/xuliangzhan/vxe-table-demo",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="全局引入" tabindex="-1"><a class="header-anchor" href="#全局引入" aria-hidden="true">#</a> 全局引入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/plugins/vxe-table.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;xe-utils&#39;</span>
<span class="token keyword">import</span> VXETable <span class="token keyword">from</span> <span class="token string">&#39;vxe-table&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vxe-table/lib/style.css&#39;</span>

<span class="token comment">// 全局默认参数</span>
VXETable<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoResize</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useTable</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VXETable<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/main</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./plugins/vxe-table&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>useTable<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按需引入-使用-vite" tabindex="-1"><a class="header-anchor" href="#按需引入-使用-vite" aria-hidden="true">#</a> 按需引入（使用 Vite）</h2><p>安装 vite 插件，配置插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm vite-plugin-style-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 vite.config.ts 配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;vxe-table&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vxe-table/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vxe-table/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style.css</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/plugins/vxe-table</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> XEUtils <span class="token keyword">from</span> <span class="token string">&#39;xe-utils&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  VXETable<span class="token punctuation">,</span>
  Header<span class="token punctuation">,</span>
  Icon<span class="token punctuation">,</span>
  Column<span class="token punctuation">,</span>
  Table
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vxe-table&#39;</span>
<span class="token keyword">import</span> zhCNLocat <span class="token keyword">from</span> <span class="token string">&#39;vxe-table/es/locale/lang/zh-CN&#39;</span>

<span class="token comment">// 全局默认参数</span>
VXETable<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoResize</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）</span>
VXETable<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">i18n</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> XEUtils<span class="token punctuation">.</span><span class="token function">toFormatString</span><span class="token punctuation">(</span>XEUtils<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>zhCNLocat<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useTable</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Header<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Icon<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Column<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/main</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./plugins/vxe-table&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>useTable<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function d(v,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[s("vxe-table-demo"),i(a)])]),k])}const g=e(c,[["render",d],["__file","basic.html.vue"]]);export{g as default};
