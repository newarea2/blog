import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c,a as n,b as s,f as i,d as o}from"./app-f1b20077.js";const l={},u=n("h1",{id:"修改滚动条样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改滚动条样式","aria-hidden":"true"},"#"),s(" 修改滚动条样式")],-1),r={href:"https://www.cnblogs.com/lfhy/p/6796653.html",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>滚动条的css样式主要由下面四个伪元素组成：</p><ul><li>::-webkit-scrollbar 定义了滚动条整体的样式；</li><li>::-webkit-scrollbar-track 轨道部分；</li><li>::-webkit-scrollbar-thumb 滑块部分；</li><li>::-webkit-scrollbar-button 两端按钮；</li></ul><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/06.png" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><p>例子1：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*---滚动条大小--*/</span>
<span class="token selector">::-webkit-scrollbar</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>8px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*---滚动条默认显示样式--*/</span>
<span class="token selector">::-webkit-scrollbar-thumb</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*---鼠标点击滚动条显示样式--*/</span>
<span class="token selector">::-webkit-scrollbar-thumb:hover</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#aaa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/07.png" alt="07" tabindex="0" loading="lazy"><figcaption>07</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/08.png" alt="08" tabindex="0" loading="lazy"><figcaption>08</figcaption></figure><p>例子2：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/09.png" alt="09" tabindex="0" loading="lazy"><figcaption>09</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/10.png" alt="10" tabindex="0" loading="lazy"><figcaption>10</figcaption></figure><p>例子3：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/*对垂直流动条有效*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/*对水平流动条有效*/</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滚动条的轨道颜色、内阴影及圆角*/</span>
<span class="token selector">::-webkit-scrollbar-track</span><span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> rosybrown<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滑块颜色、内阴影及圆角*/</span>
<span class="token selector">::-webkit-scrollbar-thumb</span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #E8E8E8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义两端按钮的样式*/</span>
<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/05.png" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><p>例子4：</p><p>该样式比较适用与大数据展示系统</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #116091<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #80cbfd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/11.png" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure>`,18);function k(b,v){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[n("a",r,[s("CSS3自定义滚动条样式 -webkit-scrollbar"),i(a)])]),d])}const h=t(l,[["render",k],["__file","scrollbar.html.vue"]]);export{h as default};
