import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-90f462c1.js";const t={},p=e(`<h1 id="常见符号" tabindex="-1"><a class="header-anchor" href="#常见符号" aria-hidden="true">#</a> 常见符号</h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> |</h2><p>用于定义联合类型，表示取值可以为多种类型中的一种。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> &amp;</h2><p>扩展类型别名</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Bear</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span> 
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token function">getBear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bear<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
bear<span class="token punctuation">.</span>honey<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","symbol.html.vue"]]);export{u as default};
