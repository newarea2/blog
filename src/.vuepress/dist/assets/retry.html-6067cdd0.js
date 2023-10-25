import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-72775176.js";const e={},p=t(`<h1 id="重试" tabindex="-1"><a class="header-anchor" href="#重试" aria-hidden="true">#</a> 重试</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">retry</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> nTimes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if the promise fails</span>
  <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if we haven&#39;t hit the retry limit</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nTimes<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// retry again with the result of calling the retry callback</span>
      <span class="token comment">// and the new retry limit</span>
      <span class="token keyword">return</span> <span class="token function">retry</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> nTimes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// otherwise, if we hit the retry limit, rethrow the error</span>
    <span class="token keyword">throw</span> reason
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// try to save the post up to 5 times</span>
<span class="token function">retry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> post<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","retry.html.vue"]]);export{k as default};
