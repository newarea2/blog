import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,d}from"./app-72775176.js";const o={},c=d(`<h1 id="editorconfig" tabindex="-1"><a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a> editorconfig</h1><blockquote><p>使项目代码在不同开发者和编辑器上具有一致样式</p></blockquote><p>想象如下场景，中途进入一个项目时发现该项目的<code>Tab</code>键是4个空格，而自己平时编程时<code>Tab</code>键是2个空格，并且编辑器vscode也是这样配置的，如果为了这个项目去修改编辑器配置，那么在做其他项目或者自己平时练习时又得去修改编辑器配置，这样很麻烦。editorconfig可以解决这个问题</p><p>可以用 <code>.editorconfig</code> 来定义项目的编码规范，编辑器的行为会与<code>.editorconfig</code>文件中定义的一致，并且其优先级比编辑器自身的设置要搞，在多人合作开发项目时十分有用并且必要。</p><p>vscode 原生不支持editorconfig，需要安装插件EditorConfig for VS Code，安装插件后在项目根目录下新建.editorconfig文件，.editorconfig文件可以覆盖编辑器原先的配置</p><p>下面是一份平时用的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[c];function r(s,a){return i(),n("div",null,t)}const u=e(o,[["render",r],["__file","editorconfig.html.vue"]]);export{u as default};
