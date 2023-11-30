import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-90f462c1.js";const p={},e=t(`<h1 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h1><p>目录</p><ul><li><a href="#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D">绝对定位</a><ul><li><a href="#1-%E6%9C%80%E5%88%9D%E5%8C%85%E5%90%AB%E5%9D%97%E6%98%AF-html">1 最初包含块是 html</a></li><li><a href="#2-display-%E7%B1%BB%E4%BC%BC-inline-block">2 display 类似 inline-block</a></li><li><a href="#3-%E7%88%B6%E5%85%83%E7%B4%A0%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%9C%89%E7%B1%BB%E4%BC%BC%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E4%BD%9C%E7%94%A8">3 父元素绝对定位，有类似清除浮动的作用</a></li><li><a href="#4-%E5%AD%90%E5%85%83%E7%B4%A0%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E7%88%B6%E5%85%83%E7%B4%A0%E4%BC%9A%E5%A1%8C%E9%99%B7">4 子元素绝对定位，父元素会塌陷</a></li><li><a href="#5-%E7%88%B6%E5%AD%90%E5%85%83%E7%B4%A0%E7%9A%84%E8%BE%B9%E7%95%8C%E9%97%AE%E9%A2%98">5 父子元素的边界问题</a></li><li><a href="#6-%E5%B8%83%E5%B1%80">6 布局</a></li></ul></li></ul><h2 id="_1-最初包含块是-html" tabindex="-1"><a class="header-anchor" href="#_1-最初包含块是-html" aria-hidden="true">#</a> 1 最初包含块是 html</h2><p>如果祖先元素找不到 position 为 relative，absolute，fixed，则相对最初的包含块定位。最初的包含块指的是 html。当仅设置<code>position: absolute;</code>而没有设置<code>top</code>、<code>right</code>、<code>bottom</code>、<code>left</code>时，此时元素跟设置<code>position: absolute;</code>之前的位置一样，只是元素已不再文档流中，不占据文档流空间。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>···
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>测试绝对定位最初包含块<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei01.png" alt="图1" tabindex="0" loading="lazy"><figcaption>图1</figcaption></figure><h2 id="_2-display-类似-inline-block" tabindex="-1"><a class="header-anchor" href="#_2-display-类似-inline-block" aria-hidden="true">#</a> 2 display 类似 inline-block</h2><p>元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。绝对定位后元素的 width 不能再 100%父元素，此时更像是“inline-block”,长度由内容撑开。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>···
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sytle</span><span class="token punctuation">&gt;</span></span>
  .d1 {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid red;
  }
  .d2 {
    position: absolute;
    background-color: green;
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试绝对定位元素宽度width是否扩展至父元素!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei02.png" alt="图2" tabindex="0" loading="lazy"><figcaption>图2</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>···
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sytle</span><span class="token punctuation">&gt;</span></span>
  .d1 {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid red;
  }
  .d2 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: green;
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试绝对定位元素宽度width是否扩展至父元素!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei03.png" alt="图3" tabindex="0" loading="lazy"><figcaption>图3</figcaption></figure><p>通过与上例比较，可以看出position:absolute;和position:absolute;top:0;left:0的区别。仅仅position:absolute;的元素还是在其父元素内部，但加了top,left后就不一定还在父元素内了。</p><h2 id="_3-父元素绝对定位-有类似清除浮动的作用" tabindex="-1"><a class="header-anchor" href="#_3-父元素绝对定位-有类似清除浮动的作用" aria-hidden="true">#</a> 3 父元素绝对定位，有类似清除浮动的作用</h2><p>父元素绝对定位了，子元素设置了浮动，子元素却把父元素撑开了，其实这就能理解为绝对定位和浮动其实是把元素飘到另一个“平行世界”，在这个世界或者说层面上，绝对定位与浮动的元素是实体的，是要互相碰撞的，所以会撑开。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei04.png" alt="图4" tabindex="0" loading="lazy"><figcaption>图4</figcaption></figure><h2 id="_4-子元素绝对定位-父元素会塌陷" tabindex="-1"><a class="header-anchor" href="#_4-子元素绝对定位-父元素会塌陷" aria-hidden="true">#</a> 4 子元素绝对定位，父元素会塌陷</h2><p>设置为绝对定位的元素框从文档流完全删除，因此其父元素会塌陷，有点类似浮动。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sytle</span><span class="token punctuation">&gt;</span></span>
  .d1 {
    border: 1px solid red;
  }
  .d2 {
    position: absolute;
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试绝对定位塌陷<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei05.png" alt="图5" tabindex="0" loading="lazy"><figcaption>图5</figcaption></figure><h2 id="_5-父子元素的边界问题" tabindex="-1"><a class="header-anchor" href="#_5-父子元素的边界问题" aria-hidden="true">#</a> 5 父子元素的边界问题</h2><p>子绝父相，当子元素top: 0; left:0; 时，子元素与父元素接触的边界是子元素外边距（或者边框、内边距、内容区，反正以最外层为边界）；父元素与子元素接触的边界是父元素的边框（或者说绝对定位子元素在父元素的内容区+内边距区内）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>···
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sytle</span><span class="token punctuation">&gt;</span></span>
  .d1 {
    position:relative;
    width: 500px;
    height: 500px;
    padding: 40px
    border: 50px solid #c0c0c0;
  }
  .d2 {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 20px
    border: 10px solid red;
    top: 0;
    left: 0;
    background: yellow;
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>d1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei06.png" alt="图6" tabindex="0" loading="lazy"><figcaption>图6</figcaption></figure><h2 id="_6-布局" tabindex="-1"><a class="header-anchor" href="#_6-布局" aria-hidden="true">#</a> 6 布局</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei07.png" alt="图7" tabindex="0" loading="lazy"><figcaption>图7</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/jueduidingwei08.png" alt="图8" tabindex="0" loading="lazy"><figcaption>图8</figcaption></figure>`,28),i=[e];function l(c,o){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","absolute.html.vue"]]);export{r as default};
