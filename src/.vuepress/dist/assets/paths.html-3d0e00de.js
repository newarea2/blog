import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as n,b as s,f as e,d as l}from"./app-f1b20077.js";const c={},r=n("h1",{id:"paths",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#paths","aria-hidden":"true"},"#"),s(" paths")],-1),d={href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>用于设置模块名到基于 baseUrl 的路径映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- ts-demo
    |-- .gitignore
    |-- ex.ts
    |-- package.json
    |-- pnpm-lock.yaml
    |-- tsconfig.json
    |-- hello
        |-- world.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// hello/world.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> helloWorld <span class="token operator">=</span> <span class="token string">&#39;hell&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ex.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> helloWorld <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/world&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloWorld<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hello/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>在 vite 创建的项目中如果配置了模块解析别名，需要通过 compilerOptions.paths 选项为 TypeScript 再配置一遍</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      find<span class="token operator">:</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span>
      replacement<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function k(m,b){const a=o("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[n("a",d,[s("paths"),e(a)])]),n("p",null,[n("a",u,[s("Module Resolution"),e(a)])]),v])}const _=t(c,[["render",k],["__file","paths.html.vue"]]);export{_ as default};
