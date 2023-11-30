import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c,a as i}from"./app-90f462c1.js";const s={},a=i(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><ul><li><code>git merge test</code> 将test分支合并到当前分支。注意应先检出到你想合并入的分支，然后运行 <code>git merge</code> 命令</li></ul><h2 id="分支相关" tabindex="-1"><a class="header-anchor" href="#分支相关" aria-hidden="true">#</a> 分支相关</h2><ul><li><code>git checkout -b test</code> 从当前分支新建test分支，并切换到该test分支</li></ul><p>上述命名等价于先新建test分支，再切换到test分支，即：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token builtin class-name">test</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>git checkout -b test master</code> 从指代分支创建新分支，并切换到新分支</p></li><li><p><code>git branch</code> 查看本地所有分支</p></li><li><p><code>git branch -a</code> 查看本地和远程所有分支</p></li><li><p><code>git branch -d test</code> 删除test分支。注意这是删除已经被合并的分支</p></li><li><p><code>git branch -D test</code> 强制删除test分支。注意这是删除未被合并的分支</p></li><li><p><code>git merge test</code> 将test分支合并到当前分支。注意应先检出到你想合并入的分支，然后运行 <code>git merge</code> 命令</p></li><li><p><code>git remote update origin --prune</code> 当远程分支发生改动（如新增、删除）时，本地并不能自动的获知这些改动，可以执行该命令更新下分支信息</p></li></ul>`,7),n=[a];function o(d,l){return t(),c("div",null,n)}const h=e(s,[["render",o],["__file","common-command.html.vue"]]);export{h as default};
