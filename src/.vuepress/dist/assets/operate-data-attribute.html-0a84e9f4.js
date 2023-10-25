import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,d as a}from"./app-72775176.js";const n={},d=a(`<h1 id="获取、设置自定义属性data的值" tabindex="-1"><a class="header-anchor" href="#获取、设置自定义属性data的值" aria-hidden="true">#</a> 获取、设置自定义属性data的值</h1><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;div id=&quot;tree&quot; data-leaves=&quot;47&quot; data-plant-height=&quot;2.4m&quot;&gt;&lt;/div&gt;

&lt;script&gt;
const tree = document.getElementById(&#39;tree&#39;)

// 1获取值
// 1.1 通过getAttribute()
console.log(tree.getAttribute(&#39;data-leaves&#39;))
console.log(tree.getAttribute(&#39;data-plant-height&#39;))
// 1.2 通过dataset
console.log(tree.dataset.leaves)
console.log(tree.dataset.plantHeight)

// 设置值
tree.setAttribute(&#39;data-leaves&#39;, &#39;48&#39;)
tree.dataset.plantHeight =&#39;3m&#39;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[d];function l(r,c){return t(),i("div",null,s)}const u=e(n,[["render",l],["__file","operate-data-attribute.html.vue"]]);export{u as default};
