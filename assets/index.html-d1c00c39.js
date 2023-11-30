import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as l,b as n,d as s,f as t,w as i,a as u}from"./app-90f462c1.js";const r={},d=n("h1",{id:"监听-watch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#监听-watch","aria-hidden":"true"},"#"),s(" 监听 watch")],-1),k={href:"https://staging-cn.vuejs.org/guide/essentials/watchers.html",target:"_blank",rel:"noopener noreferrer"},v=u(`<h2 id="_1-监听-ref" tabindex="-1"><a class="header-anchor" href="#_1-监听-ref" aria-hidden="true">#</a> 1 监听 ref</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token comment">// 组件初次渲染无打印，执行 handleClick 打印 \`Tom Bob\`</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token comment">// 组件初次渲染打印 \`Bob undefined\`，执行 handleClick 打印 \`Tom Bob\`</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-监听-ref-数组" tabindex="-1"><a class="header-anchor" href="#_1-1-监听-ref-数组" aria-hidden="true">#</a> 1.1 监听 <code>ref(数组)</code></h3><h3 id="_1-2-监听-ref-对象" tabindex="-1"><a class="header-anchor" href="#_1-2-监听-ref-对象" aria-hidden="true">#</a> 1.2 监听 <code>ref(对象)</code></h3><h2 id="_2-监听计算属性" tabindex="-1"><a class="header-anchor" href="#_2-监听计算属性" aria-hidden="true">#</a> 2 监听计算属性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>value <span class="token operator">+</span> y<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token comment">// 组件初次渲染打印 \`0 undefined\`，执行 handleClick 打印 \`4 0\`</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 等价于上面，getter 函数</span>
<span class="token comment">// watch(</span>
<span class="token comment">//   () =&gt; x.value + y.value,</span>
<span class="token comment">//   (val, oldVal) =&gt; {</span>
<span class="token comment">//     console.log(val, oldVal)</span>
<span class="token comment">//   }</span>
<span class="token comment">// )</span>

<span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-监听响应式对象" tabindex="-1"><a class="header-anchor" href="#_3-监听响应式对象" aria-hidden="true">#</a> 3 监听响应式对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token comment">// 注意：\`val\` 此处和 \`oldVal\` 是相等的，因为它们是同一个对象！</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于上面</span>
<span class="token comment">// watch(</span>
<span class="token comment">//   () =&gt; info,</span>
<span class="token comment">//   (val, oldVal) =&gt; {</span>
<span class="token comment">//     console.log(1, val, oldVal)</span>
<span class="token comment">//   },</span>
<span class="token comment">//   { deep: true } // 必须deep设置为true，否则监听无效</span>
<span class="token comment">// )</span>

<span class="token comment">// 执行 handleClick1、handleClick2 都可触发监听回调，且打印的 val 和 oldVal 相同</span>
<span class="token keyword">function</span> <span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  info<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// handleClick2 里虽然有两处改动，执行 handleClick2，只会触发一次监听</span>
<span class="token keyword">function</span> <span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  info<span class="token punctuation">.</span>father<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
  info<span class="token punctuation">.</span>father<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token string">&#39;50&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有以下结论：</p><ul><li>直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发，即修改对象的子属性、孙属性，曾孙属性...都会触发监听，也就是监听对象所有属性</li><li>val 和 oldVal 相等</li><li>watch 第一个参数是 info，等价于 <code>() =&gt; info</code> + <code>deep: true</code></li><li>一个事件回调函数内 info 虽然多次变化，但只会触发一次监听</li><li>设置 <code>immediate: true</code>，组件初次渲染会触发监听，且 val 为 info 初始值，oldVal 为 undefined</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//注意：下面这样写只能在组件第一次渲染时监听到，有打印，但当info内容改变时，无法监听，没有打印</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> info<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-监听响应式对象的普通属性" tabindex="-1"><a class="header-anchor" href="#_4-监听响应式对象的普通属性" aria-hidden="true">#</a> 4 监听响应式对象的普通属性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 这不起作用，因为此时监听源是一个值</span>
<span class="token function">watch</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应该</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 提供一个 getter 函数，只有当 obj 对象的 count 属性发送变化时才触发监听</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-监听响应式对象的对象属性" tabindex="-1"><a class="header-anchor" href="#_5-监听响应式对象的对象属性" aria-hidden="true">#</a> 5 监听响应式对象的对象属性</h2><p>跟上面“3 监听响应式对象”类似</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>father<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
<span class="token comment">// watch(() =&gt; info.father, (val, oldVal) =&gt; {</span>
<span class="token comment">//   console.log(val, oldVal)</span>
<span class="token comment">// }, {deep: true})</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-监听多源数据组成的数据" tabindex="-1"><a class="header-anchor" href="#_6-监听多源数据组成的数据" aria-hidden="true">#</a> 6 监听多源数据组成的数据</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 多个来源组成的数组</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newX<span class="token punctuation">,</span> newY<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">x is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and y is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-监听-prop" tabindex="-1"><a class="header-anchor" href="#_7-监听-prop" aria-hidden="true">#</a> 7 监听 prop</h2>`,22);function m(b,h){const p=a("ExternalLinkIcon"),e=a("RouterLink");return c(),l("div",null,[d,n("p",null,[n("a",k,[s("Vue官网-侦听器"),t(p)])]),v,n("p",null,[s("详见 "),t(e,{to:"/framework/vue/watch/%E7%9B%91%E5%90%AC%20prop.html"},{default:i(()=>[s("监听 prop")]),_:1})])])}const w=o(r,[["render",m],["__file","index.html.vue"]]);export{w as default};
