import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c,b as s,f as l,a as r}from"./app-90f462c1.js";const d={},o=r(`<h1 id="sass-和-scss-有什么区别" tabindex="-1"><a class="header-anchor" href="#sass-和-scss-有什么区别" aria-hidden="true">#</a> Sass 和 SCSS 有什么区别</h1><ol><li><p>文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名</p></li><li><p>语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(😉，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。</p></li></ol><p>例子：</p><p>Sass 语法：</p><div class="language-Sass line-numbers-mode" data-ext="Sass"><pre class="language-Sass"><code>$font-stack: Helvetica, sans-serif  //定义变量
$primary-color: #333 //定义变量

body
  font: 100% $font-stack
  color: $primary-color
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Scss 语法：</p><div class="language-Scss line-numbers-mode" data-ext="Scss"><pre class="language-Scss"><code>$font-stark Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass-scss-和-less-区别" tabindex="-1"><a class="header-anchor" href="#sass-scss-和-less-区别" aria-hidden="true">#</a> sass/scss 和 less 区别</h2>`,8),t={href:"https://www.cnblogs.com/wangpenghui522/p/5467560.html",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。",-1),m=s("p",null,"Less也是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量，继承，运算， 函数. Less 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可在服务端运行 (借助 Node.js)。",-1);function u(p,S){const e=n("ExternalLinkIcon");return i(),c("div",null,[o,s("p",null,[s("a",t,[l(e)])]),v,m])}const _=a(d,[["render",u],["__file","sass-vs-scss.html.vue"]]);export{_ as default};
