import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-90f462c1.js";const i={},t=e(`<h1 id="关联github仓库" tabindex="-1"><a class="header-anchor" href="#关联github仓库" aria-hidden="true">#</a> 关联github仓库</h1><p>新建的 github 仓库里面是没有内容的，可以通过如下方式将本地仓库和远程仓库关联，并推送本地内容到远程</p><p>…or create a new repository on the command line</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# setup-parcel&quot;</span> <span class="token operator">&gt;&gt;</span> README.md
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:stormzhangbx/setup-parcel.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>…or push an existing repository from the command line</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:stormzhangbx/setup-parcel.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git push -u origin master</code> 的作用</p><p><code>-u | --set-upstream</code></p><p>用 <code>-u</code>（<code>--up-stream</code>）来建立本地分支与远程某个分支的关联，下次 push 或 pull 时无需指定 <code>&lt;remote&gt; &lt;branch&gt;</code>，可以直接 <code>git push</code>、<code>git pull</code></p>`,9),o=[t];function c(r,p){return a(),s("div",null,o)}const u=n(i,[["render",c],["__file","associate-github.html.vue"]]);export{u as default};
