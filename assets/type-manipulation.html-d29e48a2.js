import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-90f462c1.js";const e={},p=t(`<h1 id="类型操作" tabindex="-1"><a class="header-anchor" href="#类型操作" aria-hidden="true">#</a> 类型操作</h1><p>通过组合各种类型操作符，我们可以以简洁、可维护的方式表达复杂的操作和值。在本节中，我们将介绍根据现有类型或值来表达新类型的方法。</p><ul><li><strong>泛型</strong> - 带参数的类型</li><li><strong>keyof 类型操作符</strong> - 使用keyof操作符创建新类型</li><li><strong>typeof 类型操作符</strong> - 使用typeof操作符创建新类型</li><li><strong>索引访问类型</strong> - 使用Type[&#39;a&#39;]语法访问类型的子集</li><li><strong>条件类型</strong> - 类型类似于类型系统中的 if 语句</li><li><strong>映射类型</strong> - 通过映射现有类型中的每个属性来创建类型</li><li><strong>模板文字类型</strong> - 通过模板文字字符串更改属性的映射类型</li></ul><h2 id="_1-泛型" tabindex="-1"><a class="header-anchor" href="#_1-泛型" aria-hidden="true">#</a> 1 泛型</h2><p>指在定义函数、接口、类或类型的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p><p><strong>泛型函数</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createArray</span><span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createArray</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型接口</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Config<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getData</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> myGetData<span class="token operator">:</span>Config<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> getData<span class="token punctuation">;</span>
<span class="token function">myGetData</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型类</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    zeroValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型类型</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> <span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type <span class="token operator">=</span> identity<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-keyof" tabindex="-1"><a class="header-anchor" href="#_2-keyof" aria-hidden="true">#</a> 2 keyof</h2><p><code>keyof T</code> 表示类型T所有公共属性的字面量的联合类型，其返回类型是一个<strong>联合类型</strong>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">COLORS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  blue<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 首先通过typeof操作符获取Colors变量的类型，然后通过keyof操作符获取该类型的所有键，</span>
<span class="token comment">// 即字符串字面量联合类型 &#39;red&#39; | &#39;blue&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Colors</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> <span class="token constant">COLORS</span> 
<span class="token keyword">let</span> color<span class="token operator">:</span> Colors<span class="token punctuation">;</span>
color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span> <span class="token comment">// Ok</span>
color <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span> <span class="token comment">// Ok</span>

<span class="token comment">// Type &#39;&quot;yellow&quot;&#39; is not assignable to type &#39;&quot;red&quot; | &quot;blue&quot;&#39;.</span>
color <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-typeof" tabindex="-1"><a class="header-anchor" href="#_3-typeof" aria-hidden="true">#</a> 3 typeof</h2><p>TypeScript 扩展了 typeof 的作用，</p><p>JavaScript 中的 typeof，用法为 <code>typeof 变量名</code> 或者 <code>typeof 值</code>，返回一个字符串，如 <code>string</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> message<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 扩展的 typeof，用法为 <code>type T = typeof 变量名</code>，返回一个类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">t1</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> message
<span class="token keyword">type</span> <span class="token class-name">t2</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token keyword">typeof</span> <span class="token string">&#39;hello&#39;</span> <span class="token comment">// 报错 Identifier expected</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-索引访问类型" tabindex="-1"><a class="header-anchor" href="#_4-索引访问类型" aria-hidden="true">#</a> 4 索引访问类型</h2><p><code>T[K]</code> 表示对象 T 的属性K所表示的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;musion&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">35</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getValues</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> keys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> keys<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=&gt;</span> person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getValues</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;musion&#39;, 35]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getValues</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述例子中，可以看到 <code>getValues(persion, [&#39;gender&#39;])</code> 打印出来的是<code>[undefined]</code>，但是 TS 编译器并没有给出报错信息，那么如何使用 TS 对这种模式进行类型约束呢？这里就要用到了索引访问类型，改造一下 getValues 函数:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValues</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> keys<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> keys<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=&gt;</span> person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;musion&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">35</span>
<span class="token punctuation">}</span>

<span class="token function">getValues</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;musion&#39;]</span>
<span class="token function">getValues</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 报错：</span>
<span class="token comment">// Argument of Type &#39;&quot;gender&quot;[]&#39; is not assignable to parameter of type &#39;(&quot;name&quot; | &quot;age&quot;)[]&#39;.</span>
<span class="token comment">// Type &quot;gender&quot; is not assignable to type &quot;name&quot; | &quot;age&quot;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-条件类型" tabindex="-1"><a class="header-anchor" href="#_5-条件类型" aria-hidden="true">#</a> 5 条件类型</h2><blockquote><p>SomeType extends OtherType ? TrueType : FalseType;</p></blockquote><p>条件类型有点像 JavaScript 中的三元表达式，当左侧的类型可分配给右侧的类型时，将在第一个分支（“真”分支）中获得类型；否则，将在后一个分支（“假”分支）中获得类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">live</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">woof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
type Example1 <span class="token operator">=</span> Dog <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token operator">?</span> number <span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// type Example1 = number</span>
 
type Example2 <span class="token operator">=</span> RegExp <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token operator">?</span> number <span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// type Example2 = string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-映射类型" tabindex="-1"><a class="header-anchor" href="#_6-映射类型" aria-hidden="true">#</a> 6 映射类型</h2><p>TypeScript 提供了从旧类型中创建新类型的一种方式 — 映射类型。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。TS 内置了一些映射类型（实际上是一些语法糖），让我们可以方便地进行类型映射，可以在 TypeScript 包中的 typescript/lib/lib.es5.d.ts 中找到他们的定义：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 将传入的属性变为只读选项</span>
<span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将传入的属性变为可选项：keyof T 拿到 T 所有属性名, 然后 in 进行遍历, 将值赋给 P, 最后 T[P] 取得相应属性的值.</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token keyword">type</span> <span class="token class-name">PersonPartial</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">ReadonlyPerson</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-模板文字类型" tabindex="-1"><a class="header-anchor" href="#_7-模板文字类型" aria-hidden="true">#</a> 7 模板文字类型</h2><p>比如参数枚举值如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;top-left&quot; | &quot;top-center&quot; | &quot;top-right&quot; | &quot;middle-left&quot; | &quot;middle-center&quot; | &quot;middle-right&quot; | &quot;bottom-left&quot; | &quot;bottom-center&quot; | &quot;bottom-right&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果全量列举每一个值，不仅繁琐，而且容易出错，此时模板文字类型就派上用场了:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">VerticalAlignment</span> <span class="token operator">=</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;middle&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">HorizontalAlignment</span> <span class="token operator">=</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">setToolTipPosition</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>VerticalAlignment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>HorizontalAlignment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token function">setToolTipPosition</span><span class="token punctuation">(</span><span class="token string">&quot;top-left&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// ok!</span>
<span class="token function">setToolTipPosition</span><span class="token punctuation">(</span><span class="token string">&quot;top-middel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
<span class="token function">setToolTipPosition</span><span class="token punctuation">(</span><span class="token string">&quot;top-pot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// error! </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","type-manipulation.html.vue"]]);export{k as default};
