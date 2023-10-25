import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as i,a as n,b as s,f as l,d as c}from"./app-72775176.js";const o={},r=n("h1",{id:"类型别名vs接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型别名vs接口","aria-hidden":"true"},"#"),s(" 类型别名VS接口")],-1),d={href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",target:"_blank",rel:"noopener noreferrer"},u=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">g</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>书写上的区别：</p><ul><li>类型别名通过<code>type</code>关键字定义，而接口通过<code>interface</code>定义;</li><li>类型别名后面需要跟上<code>=</code>，而接口不需要;</li><li>类型别名中使用的是<code>,</code>，而接口是<code>;</code></li></ul><p>关键区别在于，与始终可扩展的接口相比，类型别名无法重新打开以添加​​新属性。</p><h2 id="_1-接口" tabindex="-1"><a class="header-anchor" href="#_1-接口" aria-hidden="true">#</a> 1 接口</h2><h3 id="_1-1-新增属性" tabindex="-1"><a class="header-anchor" href="#_1-1-新增属性" aria-hidden="true">#</a> 1.1 新增属性</h3><p>新建一个新接口继承并已有接口</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bear</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token function">getBear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
bear<span class="token punctuation">.</span>name
bear<span class="token punctuation">.</span>honey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个新接口继承已有类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bear</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向已有接口添加新字段</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  ts<span class="token operator">:</span> TypeScriptAPI
<span class="token punctuation">}</span>

<span class="token keyword">const</span> src <span class="token operator">=</span> <span class="token string">&#39;const a = &quot;Hello World&quot;&#39;</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>ts<span class="token punctuation">.</span><span class="token function">transpileModule</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-修改属性" tabindex="-1"><a class="header-anchor" href="#_1-2-修改属性" aria-hidden="true">#</a> 1.2 修改属性</h3><p>无法<strong>修改</strong>已有接口中某属性的类型，下面写法是错误的</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    address<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误信息如下</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/10.png" alt="10" tabindex="0" loading="lazy"><figcaption>10</figcaption></figure><p>但是像下面这样写是没问题的</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-类型" tabindex="-1"><a class="header-anchor" href="#_2-类型" aria-hidden="true">#</a> 2 类型</h2><h3 id="_2-1-新增属性" tabindex="-1"><a class="header-anchor" href="#_2-1-新增属性" aria-hidden="true">#</a> 2.1 新增属性</h3><p>通过 <code>&amp;</code> 新建一个新类型扩展已有类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Bear</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  honey<span class="token operator">:</span> <span class="token builtin">boolean</span> 
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token function">getBear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bear<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
bear<span class="token punctuation">.</span>honey<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-修改属性" tabindex="-1"><a class="header-anchor" href="#_2-2-修改属性" aria-hidden="true">#</a> 2.2 修改属性</h3><p>使用 <code>Omit</code> 和 <code>&amp;</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然下面写法不报错，但不管位置1处写的什么类型，类型 B 中属性 age 的类型始终是 <code>number</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 位置1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>类型别名创建后无法更改</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Window</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Window</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  ts<span class="token operator">:</span> TypeScriptAPI
<span class="token punctuation">}</span>

 <span class="token comment">// Error: Duplicate identifier &#39;Window&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function k(v,m){const a=p("ExternalLinkIcon");return t(),i("div",null,[r,n("p",null,[n("a",d,[s("Differences Between Type Aliases and Interfaces"),l(a)])]),u])}const y=e(o,[["render",k],["__file","type-alias-vs-interface.html.vue"]]);export{y as default};
