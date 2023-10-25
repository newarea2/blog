import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as p,a as n,b as a,f as e,d as t}from"./app-f1b20077.js";const c={},r=t(`<h1 id="baseurl、paths" tabindex="-1"><a class="header-anchor" href="#baseurl、paths" aria-hidden="true">#</a> baseUrl、paths</h1><h2 id="baseurl" tabindex="-1"><a class="header-anchor" href="#baseurl" aria-hidden="true">#</a> baseUrl</h2><p>用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响。下面通过示例来说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- ts-demo
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
<span class="token keyword">import</span> <span class="token punctuation">{</span> helloWorld <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hello/world&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloWorld<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果配置中的 <code>baseUrl</code> 为 <code>./</code>，ex.ts 文件通过 <code>path.resolve(&#39;./&#39;, &#39;hello/world&#39;)</code> 来解析模块名称 <code>hello/world</code>，故可以正确解析。</p><p>如果将 <code>baseUrl</code> 设为 <code>../</code>，则 ex.ts 文件无法通过 <code>path.resolve(&#39;../&#39;, &#39;hello/world&#39;)</code> 正确解析出模块 <code>hello/world</code>，从而报错：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/09.png" alt="09" tabindex="0" loading="lazy"><figcaption>09</figcaption></figure><h2 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> paths</h2>`,10),d={href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>用于设置模块名到基于 baseUrl 的路径映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- ts-demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><p>在 vite 创建的项目中如果配置了模块解析别名，需要通过 compilerOptions.paths 选项为 TypeScript 再配置一遍</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function m(k,b){const s=l("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[n("a",d,[a("paths"),e(s)])]),n("p",null,[n("a",u,[a("Module Resolution"),e(s)])]),v])}const x=o(c,[["render",m],["__file","baseUrl-paths.html.vue"]]);export{x as default};
