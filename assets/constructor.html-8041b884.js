import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-90f462c1.js";const t={},p=e(`<h1 id="constructor方法" tabindex="-1"><a class="header-anchor" href="#constructor方法" aria-hidden="true">#</a> constructor方法</h1><p>constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor() 方法，如果没有显示定义，一个空的 constructor() 方法会被默认添加。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 等价于</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor()方法。</p><p>constructor()方法默认返回实例对象（即this）</p><h2 id="_1-继承-子类-中的constructor方法" tabindex="-1"><a class="header-anchor" href="#_1-继承-子类-中的constructor方法" aria-hidden="true">#</a> 1 继承（子类）中的constructor方法</h2><p>如果子类显式的定义了 constructor 方法，则必须在其中调用 super 方法，否则新建实例时会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，ColorPoint继承了父类Point，但是它的构造函数没有调用super方法，导致新建实例时报错。</p><p>如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: Must call super constructor in derived class before accessing &#39;this&#39; or returning from derived constructor</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span> <span class="token comment">// 正确</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-super" tabindex="-1"><a class="header-anchor" href="#_2-super" aria-hidden="true">#</a> 2 super</h2><h3 id="_2-1-代表父类的构造函数" tabindex="-1"><a class="header-anchor" href="#_2-1-代表父类的构造函数" aria-hidden="true">#</a> 2.1 代表父类的构造函数</h3><p>作为函数调用时，代表父类的构造函数。作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>super 虽然代表了父类 A 的构造函数，但是 super 内部的 this 指的是 B 的实例，因此 super() 在这里相当于 A.prototype.constructor.call(this)。</p><h3 id="_2-2-代表父类或者父类的原型对象" tabindex="-1"><a class="header-anchor" href="#_2-2-代表父类或者父类的原型对象" aria-hidden="true">#</a> 2.2 代表父类或者父类的原型对象</h3><p>super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">p</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">p</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","constructor.html.vue"]]);export{d as default};
