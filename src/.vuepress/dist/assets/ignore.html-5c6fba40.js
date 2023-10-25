import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as o,a as n,b as a,f as e,d as i}from"./app-f1b20077.js";const p={},d={href:"https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file",target:"_blank",rel:"noopener noreferrer"},r=i(`<p>隐式的忽略规则：</p><ul><li><code>node_modules/</code> 将被忽略</li><li>点文件（<code>.eslintrc.*</code>除外）以及点文件夹和其内容将被忽略</li></ul><p>Eslint 中的“主动”忽略校验方式有 3 种：</p><ul><li>文件中使用注释取消校验</li><li>使用忽略文件 <code>.eslintignore</code></li><li>使用命令行参数 <code>--ignore-pattern</code></li></ul><p>.eslintignore</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!.build
.build/*
!.build/test.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eslint --ignore-pattern &#39;!.build&#39; --ignore-pattern &#39;.build/*&#39; --ignore-pattern &#39;!.build/test.js&#39; parent-folder/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="如何通过注释取消校验" tabindex="-1"><a class="header-anchor" href="#如何通过注释取消校验" aria-hidden="true">#</a> 如何通过注释取消校验</h2>`,9),u={href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="_1-全文注释" tabindex="-1"><a class="header-anchor" href="#_1-全文注释" aria-hidden="true">#</a> 1 全文注释</h3><p>取消对整个文件的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消对整个文件中指定规则的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-alert, no-console */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-块注释" tabindex="-1"><a class="header-anchor" href="#_2-块注释" aria-hidden="true">#</a> 2 块注释</h3><p>取消对某块代码的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-enable */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消对某块代码中指定规则的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-alert, no-console */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-enable no-alert, no-console */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-单行注释" tabindex="-1"><a class="header-anchor" href="#_3-单行注释" aria-hidden="true">#</a> 3 单行注释</h3><p>取消对某行代码的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line</span>

<span class="token comment">// eslint-disable-next-line</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-disable-next-line */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消对某行代码中指定规则的校验</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line no-alert</span>

<span class="token comment">// eslint-disable-next-line no-alert</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line no-alert */</span>

<span class="token comment">/* eslint-disable-next-line no-alert */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,k){const s=l("ExternalLinkIcon");return c(),o("div",null,[n("p",null,[n("a",d,[a("The .eslintignore File"),e(s)])]),r,n("p",null,[n("a",u,[a("Disabling Rules"),e(s)])]),v])}const h=t(p,[["render",m],["__file","ignore.html.vue"]]);export{h as default};
