import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-f1b20077.js";const p={},t=e(`<h1 id="eslint-config-和-eslint-plugin-的区别" tabindex="-1"><a class="header-anchor" href="#eslint-config-和-eslint-plugin-的区别" aria-hidden="true">#</a> eslint-config-* 和 eslint-plugin-* 的区别</h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>应该有很多同学在配置<code>eslint文件</code>的时候，会有这样的疑问，为什么每种校验模块包要分成 <code>config/plugin</code> 两个版本，并且有时候在<code>plugins</code>引入了插件，还可以再以extends方式去使用插件，既然插件这么全能，为何要有 <code>eslint-config-*</code> 呢？</p><h3 id="探索" tabindex="-1"><a class="header-anchor" href="#探索" aria-hidden="true">#</a> 探索</h3><h4 id="eslint-config-的配置形式" tabindex="-1"><a class="header-anchor" href="#eslint-config-的配置形式" aria-hidden="true">#</a> eslint-config-* 的配置形式</h4><h5 id="以-eslint-config-airbnb-为参考" tabindex="-1"><a class="header-anchor" href="#以-eslint-config-airbnb-为参考" aria-hidden="true">#</a> 以 eslint-config-airbnb 为参考</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint-config-airbnb-base&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./rules/react&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./rules/react-a11y&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span>resolve<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现就是一个简单的<code>.eslintrc</code>对象，再往它 ---&gt; <code>继承的文件</code> 里去看</p><h5 id="以-rules-react-为参考" tabindex="-1"><a class="header-anchor" href="#以-rules-react-为参考" aria-hidden="true">#</a> 以 ./rules/react 为参考</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span>无数规则声明s<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是很神奇，继承链的顶端忽然之间就没那么神秘了。其实就是一个 常规的<code>.eslintrc</code>文件，那我们可以理解最终被 <code>eslint</code>所识别的配置文件就是所有继承文件的属性合并，并且子类覆盖父类。</p><h3 id="eslint-plugin-的配置形式" tabindex="-1"><a class="header-anchor" href="#eslint-plugin-的配置形式" aria-hidden="true">#</a> eslint-plugin-* 的配置形式</h3><h4 id="以eslint-plugin-react-为参考对象" tabindex="-1"><a class="header-anchor" href="#以eslint-plugin-react-为参考对象" aria-hidden="true">#</a> 以eslint-plugin-react 为参考对象</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引用规则的验证逻辑块</span>
<span class="token keyword">const</span> allRules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;boolean-prop-naming&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./lib/rules/boolean-prop-naming&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;button-has-type&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./lib/rules/button-has-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出的对象</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  deprecatedRules<span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> allRules<span class="token punctuation">,</span>
  <span class="token literal-property property">configs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">recommended</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;react&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;react/display-name&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;react/jsx-key&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;react&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> activeRulesConfig
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recommended、all 中捆绑了不同的配置，从而可知</p><ul><li><code>eslint-config-*</code> 只能提供一套配置，而 <code>eslint-plugin-*</code> 可以提供多套配置</li><li><code>eslint-plugin-*</code> 中可以自定义 rule、environment、processor 等，而 <code>eslint-config-*</code> 不可以</li><li><code>eslint-plugin-*</code> 功能大而全，<code>eslint-config-*</code> 功能则比较单一</li></ul>`,16),i=[t];function o(l,c){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","eslint-config-vs-eslint-plugin.html.vue"]]);export{d as default};
