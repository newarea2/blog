import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,f as r,d as c}from"./app-f1b20077.js";const i={},l=n("h1",{id:"重定向、别名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重定向、别名","aria-hidden":"true"},"#"),s(" 重定向、别名")],-1),d={href:"https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h2><p><strong>重定</strong>向类似 Nginx 中的代理，访问路由 <code>/a</code>，实际上跳转到路由 <code>/b</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置了重定向 <code>redirect</code> 就无需配置 <code>component</code> 或 <code>components</code> 配置，因为重定向记录永远不会到达</p><h2 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h2><p><strong>别名</strong>类似人的小名、外号，如王五，小名小王，当喊王五、小王叫的是同一个人。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(k,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",d,[s("重定向和别名"),r(a)])]),u])}const g=e(i,[["render",v],["__file","redirect-alias.html.vue"]]);export{g as default};
