import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-90f462c1.js";const t={},l=e(`<h1 id="javascript-命名规范" tabindex="-1"><a class="header-anchor" href="#javascript-命名规范" aria-hidden="true">#</a> JavaScript 命名规范</h1><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1 变量</h2><p>驼峰式命名，前缀为形容词</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 好的命名</span>
<span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> tableTitle <span class="token operator">=</span> <span class="token string">&#39;学生表&#39;</span>

<span class="token comment">// 不好的命名</span>
<span class="token keyword">let</span> setCount <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> getTitle <span class="token operator">=</span> <span class="token string">&#39;学生表&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-常量" tabindex="-1"><a class="header-anchor" href="#_2-常量" aria-hidden="true">#</a> 2 常量</h2><p>使用<strong>大写字母</strong>和<strong>下划线</strong>来组合命名，下划线用来分割单词</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 好的命名</span>
<span class="token keyword">const</span> <span class="token constant">MAX_COUNT</span> <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// 不好的命名</span>
<span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数、方法" tabindex="-1"><a class="header-anchor" href="#_3-函数、方法" aria-hidden="true">#</a> 3 函数、方法</h2><p>驼峰式命名，前缀为动词</p><p>常用前缀及含义</p><table><thead><tr><th style="text-align:left;">前缀</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">can</td><td style="text-align:left;">判断是否可执行某个动作</td></tr><tr><td style="text-align:left;">has</td><td style="text-align:left;">判断是否含有某个值</td></tr><tr><td style="text-align:left;">is</td><td style="text-align:left;">判断是否为某个值</td></tr><tr><td style="text-align:left;">get</td><td style="text-align:left;">获取某个值</td></tr><tr><td style="text-align:left;">set</td><td style="text-align:left;">设置某个值</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">加载某些数据</td></tr><tr><td style="text-align:left;">del、delete</td><td style="text-align:left;">删除</td></tr><tr><td style="text-align:left;">rm、remove</td><td style="text-align:left;">移除</td></tr><tr><td style="text-align:left;">add</td><td style="text-align:left;">增加</td></tr><tr><td style="text-align:left;">insert</td><td style="text-align:left;">插入</td></tr><tr><td style="text-align:left;">update</td><td style="text-align:left;">修改</td></tr><tr><td style="text-align:left;">select</td><td style="text-align:left;">选择</td></tr><tr><td style="text-align:left;">query</td><td style="text-align:left;">获取</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 好的命名</span>
<span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 不好的命名</span>
<span class="token keyword">function</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-类、构造函数" tabindex="-1"><a class="header-anchor" href="#_4-类、构造函数" aria-hidden="true">#</a> 4 类、构造函数</h2><p>帕斯卡式命名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 好的命名</span>
<span class="token keyword">class</span> <span class="token class-name">Persion</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 不好的命名</span>
<span class="token keyword">class</span> <span class="token class-name">persion</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-类的成员" tabindex="-1"><a class="header-anchor" href="#_5-类的成员" aria-hidden="true">#</a> 5 类的成员</h2><p>类的成员包括：</p><ul><li>公共属性和方法： 跟变量和函数命名一样。</li><li>私有属性和方法：前缀为下划线_, 后面跟公共属性和方法一样的命名方式。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token comment">// 私有方法</span>
  <span class="token function">_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 公共方法</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 公共方法</span>
  <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-注释" tabindex="-1"><a class="header-anchor" href="#_6-注释" aria-hidden="true">#</a> 6 注释</h2><p>单行注释</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置标题</span>
<span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>多行注释</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */</span>
<span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数、方法注释</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数说明
 * @关键字
 **/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[l];function c(d,p){return s(),a("div",null,i)}const u=n(t,[["render",c],["__file","name-convention.html.vue"]]);export{u as default};
