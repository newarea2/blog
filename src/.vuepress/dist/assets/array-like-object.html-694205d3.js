import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-f1b20077.js";const t={},c=e(`<h1 id="类数组" tabindex="-1"><a class="header-anchor" href="#类数组" aria-hidden="true">#</a> 类数组</h1><p>类数组：拥有一个 length 属性和若干索引属性的任意对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// function getArray(a, b) {</span>
<span class="token comment">//   return [a, b]</span>
<span class="token comment">// }</span>

<span class="token comment">// function getArray (...numbers) {</span>
<span class="token comment">//   return numbers</span>
<span class="token comment">// }</span>

<span class="token comment">// function getArray () {</span>
<span class="token comment">//   return Array.from(arguments)</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// return Array.prototype.slice.call(arguments)</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[c];function o(p,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","array-like-object.html.vue"]]);export{d as default};
