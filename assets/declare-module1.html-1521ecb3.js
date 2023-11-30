import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,b as n,d as s,f as c,a as i}from"./app-90f462c1.js";const l={},r=n("h1",{id:"declare-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#declare-module","aria-hidden":"true"},"#"),s(" declare module")],-1),d=n("h2",{id:"重写类型的动态查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重写类型的动态查找","aria-hidden":"true"},"#"),s(" 重写类型的动态查找")],-1),u={href:"https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E9%87%8D%E5%86%99%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8A%A8%E6%80%81%E6%9F%A5%E6%89%BE",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>在你的项目里，你可以通过 declare module &#39;somePath&#39; 声明一个全局模块的方式，来解决查找模块路径的问题。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// global.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// some variable declarations</span>
  <span class="token keyword">export</span> <span class="token keyword">var</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// anyOtherTsFileInYourProject.ts</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// TypeScript 将假设（在没有做其他查找的情况下）</span>
<span class="token comment">// foo 是 { bar: number }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展原有模块" tabindex="-1"><a class="header-anchor" href="#扩展原有模块" aria-hidden="true">#</a> 扩展原有模块</h2><p>如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 declare module 扩展原有模块</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// types/moment-plugin/index.d.ts</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;moment&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> moment<span class="token punctuation">.</span>CalendarKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/index.ts</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;moment-plugin&#39;</span><span class="token punctuation">;</span>

moment<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了可以在声明文件中通过 import 导入另一个声明文件中的类型之外，还有一个语法也可以用来导入另一个声明文件，那就是三斜线指令。</p><h2 id="声明多个模块的类型" tabindex="-1"><a class="header-anchor" href="#声明多个模块的类型" aria-hidden="true">#</a> 声明多个模块的类型</h2><p>一般一个声明文件只是对一个模块进行类型声明。</p><p>declare module 也可用于在一个文件中一次性声明多个模块的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// types/foo-bar.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
        foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/index.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> f<span class="token operator">:</span> Foo<span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(v,b){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,d,n("p",null,[n("a",u,[s("参考"),c(a)])]),k])}const g=e(l,[["render",m],["__file","declare-module1.html.vue"]]);export{g as default};
