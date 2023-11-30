import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as s,d as n,f as t,a as e}from"./app-90f462c1.js";const i={},u=e('<h1 id="toref、torefs" tabindex="-1"><a class="header-anchor" href="#toref、torefs" aria-hidden="true">#</a> toRef、toRefs</h1><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2><h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2><p>将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 <code>toRef()</code> 创建的。</p>',4),r={href:"https://v3.cn.vuejs.org/api/refs-api.html#torefs",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>可用于为响应式对象上的 property 创建 ref。这样创建的 ref 与其源 property 保持同步：改变源 property 将更新 ref，反之亦然。</p><p>例1 toRefs</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>  <span class="token comment">// 这里变量 name、age 为 ref</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例2 toRef</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{info.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{name1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{name2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d={href:"http://info.name",target:"_blank",rel:"noopener noreferrer"},v={href:"http://info.name",target:"_blank",rel:"noopener noreferrer"},m={href:"http://info.name",target:"_blank",rel:"noopener noreferrer"},g=s("br",null,null,-1),b={href:"http://info.name",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"例子3 toRefs",-1),h={href:"https://cn.vuejs.org/guide/reusability/composables.html#conventions-and-best-practices",target:"_blank",rel:"noopener noreferrer"},y=e(`<p>index.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--1--&gt;</span>
  <span class="token comment">&lt;!--&lt;h2&gt;x: {{ x }}&lt;/h2&gt;--&gt;</span>
  <span class="token comment">&lt;!--&lt;h2&gt;y: {{ y }}&lt;/h2&gt;--&gt;</span>

  <span class="token comment">&lt;!--2--&gt;</span>
  <span class="token comment">&lt;!--&lt;h2&gt;x: {{ position.x }}&lt;/h2&gt;--&gt;</span>
  <span class="token comment">&lt;!--&lt;h2&gt;y: {{ position.y }}&lt;/h2&gt;--&gt;</span>

  <span class="token comment">&lt;!--3--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>x: {{ x }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>y: {{ y }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> usePosition <span class="token keyword">from</span> <span class="token string">&#39;./usePosition&#39;</span>

  <span class="token comment">// 1</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 2</span>
  <span class="token comment">// const position = usePosition()</span>

  <span class="token comment">// 3 这种方式不行</span>
  <span class="token comment">// const { x, y } = usePosition()</span>
  <span class="token comment">// 等价于，直接使用了值，不是引用的，不是响应式</span>
  <span class="token comment">// const x = usePosition().x</span>
  <span class="token comment">// const y = usePosition().y</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>usePosition.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">usePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 绑定鼠标移动事件</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    position<span class="token punctuation">.</span>x <span class="token operator">=</span> event<span class="token punctuation">.</span>x
    position<span class="token punctuation">.</span>y <span class="token operator">=</span> event<span class="token punctuation">.</span>y
  <span class="token punctuation">}</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> onMouseMove<span class="token punctuation">)</span>

  <span class="token comment">// 1</span>
  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>

  <span class="token comment">// 2</span>
  <span class="token comment">// return position</span>

  <span class="token comment">// 3</span>
  <span class="token comment">// return position</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(x,w){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[s("a",r,[n("官网"),t(a)])]),k,s("p",null,[n("当通过 Vue Devtools 修改 "),s("a",d,[n("info.name"),t(a)]),n("，可以发现 name2 也跟着变化，且变化后的值和 "),s("a",v,[n("info.name"),t(a)]),n(" 相等。同样的，当修改 name2，"),s("a",m,[n("info.name"),t(a)]),n(" 也随之变化。"),g,n(" 但是 name1 和 "),s("a",b,[n("info.name"),t(a)]),n(" 之间没有关联性，修改其中一个，另一个不会随之变化。")]),f,s("p",null,[s("a",h,[n("组合式函数"),t(a)])]),y])}const j=p(i,[["render",_],["__file","toRef-toRefs.html.vue"]]);export{j as default};
