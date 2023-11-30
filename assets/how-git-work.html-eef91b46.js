import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,b as e,d as l,f as t,a as r}from"./app-90f462c1.js";const c={},m={href:"https://www.cnblogs.com/yelbosh/p/7471979.html",target:"_blank",rel:"noopener noreferrer"},o=r(`<p>每执行下 <code>git add</code>、<code>git commit</code> 命令都会在 .git/objects 文件夹中新建一个二进制文件</p><p>COMMIT_EDITMSG 文件在初始化 git 项目时并不存在，在第一次 <code>git commit</code> 后才生成。</p><p>Git 内部有一个对象数据库，向数据库中存数据的命令是 <code>git hash-object</code>；取数据的命令是 <code>git cat-file</code></p><p>.git 最初的目录结构和主要文件内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- .git
    |-- config
    |-- description
    |-- FETCH_HEAD
    |-- HEAD
    |-- hooks
    |   |-- applypatch-msg.sample
    |   |-- commit-msg.sample
    |   |-- fsmonitor-watchman.sample
    |   |-- post-update.sample
    |   |-- pre-applypatch.sample
    |   |-- pre-commit.sample
    |   |-- pre-merge-commit.sample
    |   |-- pre-push.sample
    |   |-- pre-rebase.sample
    |   |-- pre-receive.sample
    |   |-- prepare-commit-msg.sample
    |   |-- push-to-checkout.sample
    |   |-- update.sample
    |-- info
    |   |-- exclude
    |-- objects
    |   |-- info
    |   |-- pack
    |-- refs
        |-- heads
        |-- tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>description</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Unnamed repository; edit this file &#39;description&#39; to name the repository.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HEAD</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ref: refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function v(p,u){const i=s("ExternalLinkIcon");return d(),a("div",null,[e("p",null,[e("a",m,[l("Git的原理简介和常用命令"),t(i)])]),o])}const h=n(c,[["render",v],["__file","how-git-work.html.vue"]]);export{h as default};
