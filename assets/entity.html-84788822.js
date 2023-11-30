import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as n,b as e,d as o,f as i,a as r}from"./app-90f462c1.js";const l={},p=e("h1",{id:"字符实体",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#字符实体","aria-hidden":"true"},"#"),o(" 字符实体")],-1),h={href:"https://www.qqxiuzi.cn/bianma/zifushiti.php",target:"_blank",rel:"noopener noreferrer"},s=r('<h2 id="_1-为什么会有字符实体" tabindex="-1"><a class="header-anchor" href="#_1-为什么会有字符实体" aria-hidden="true">#</a> 1 为什么会有字符实体</h2><p>浏览器在逐字解析html文档时，当遇到 <code>&lt;</code>，会认为是一个元素标签的开头。例如遇到 <code>&lt;h1&gt;</code>就知道接下来要渲染一个标题，而不会将 <code>&lt;h1&gt;</code> 这几个字符显示在浏览器上。</p><p>如果我想要在浏览器上显示 <code>&lt;h1&gt;</code> 这几个字符，就得使用字符实体，如 <code>&amp;lt;h1&amp;gt;</code> 或 <code>&amp;#60;th1&amp;#62;</code>。</p><p>另外，标准键盘能输入的字符是有限的，可以使用字符实体来表示标准键盘难以输入的字体。</p><h2 id="_2-如何书写字符实体" tabindex="-1"><a class="header-anchor" href="#_2-如何书写字符实体" aria-hidden="true">#</a> 2 如何书写字符实体</h2><p>字符实体是以 <code>&amp;</code> 开头，以 <code>;</code> 结尾的一段文本，包括两种形式</p><ul><li>使用实体名 - <code>&amp;entity_name;</code></li><li>使用实体编号 - <code>&amp;#entity_number;</code>， 以「&amp;#」开头的后接十进制数字，以「&amp;#x」开头的后接十六进制数字</li></ul><p>上述两种方式的异同点：</p><ul><li>都是以 <code>&amp;</code> 开头，以 <code>;</code> 结尾</li><li>使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。</li></ul><p>上面中的 entity_number 其实是字符的 Unicode 的整数（十进制或十六进制）表示，如</p><ul><li><code>&amp;#65;</code>、<code>&amp;#x41;</code> 都表示 <code>A</code></li><li><code>&amp;#20013;</code> 、<code>&amp;#x4E2D;</code> 都表示 <code>中</code></li></ul>',11);function m(_,u){const c=d("ExternalLinkIcon");return t(),n("div",null,[p,e("p",null,[e("a",h,[o("HTML字符实体转换"),i(c)])]),s])}const b=a(l,[["render",m],["__file","entity.html.vue"]]);export{b as default};
