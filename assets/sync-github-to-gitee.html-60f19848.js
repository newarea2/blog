import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as o,b as n,d as s,f as a,a as l}from"./app-90f462c1.js";const p={},u=n("h1",{id:"将-github-代码同步到-gitee",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#将-github-代码同步到-gitee","aria-hidden":"true"},"#"),s(" 将 GitHub 代码同步到 Gitee")],-1),r=n("p",null,"由于 Github 的有时无法访问或访问慢，可能需要将 Github 代码同步到国内的 Gitee。可以使用 Github Actions，写一个工作流，每当将代码提交到 GitHub 时，自动将代码同步到 Gitee。",-1),d={href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/wangchucheng/git-repo-sync",target:"_blank",rel:"noopener noreferrer"},m=l(`<p><code>.github/workflows/sync.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> sync

<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> push
  <span class="token punctuation">-</span> delete

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sync</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Git Repo Sync
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> wangchucheng/git<span class="token punctuation">-</span>repo<span class="token punctuation">-</span>sync@v0.1.0
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token comment"># Gitee 仓库地址</span>
        <span class="token key atrule">target-url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//gitee.com/stormzhangbx/blog.git
        <span class="token comment"># Gitee 用户名</span>
        <span class="token key atrule">target-username</span><span class="token punctuation">:</span> stormzhangbx
        <span class="token comment"># 存储在 GitHub Secrets 中的 Gitee 令牌</span>
        <span class="token key atrule">target-token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=n("code",null,"secrets.GITEE_TOKEN",-1),b={href:"https://gitee.com/profile/personal_access_tokens",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const e=c("ExternalLinkIcon");return i(),o("div",null,[u,r,n("p",null,[s("关于 Github Actions 的介绍，可以参考阮一峰老师的 "),n("a",d,[s("《GitHub Actions 入门教程》"),a(e)]),s("。")]),n("p",null,[s("下面借助 "),n("a",k,[s("Git Repo Sync"),a(e)]),s(" 来实现。")]),m,n("p",null,[v,s(" 存储在 GitHub Secrets 中，是 "),n("a",b,[s("Gitee 令牌"),a(e)])])])}const f=t(p,[["render",h],["__file","sync-github-to-gitee.html.vue"]]);export{f as default};
