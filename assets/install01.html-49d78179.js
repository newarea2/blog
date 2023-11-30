import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c,b as e,d as a,f as r,a as t}from"./app-90f462c1.js";const i={},p=t('<h1 id="install及参数" tabindex="-1"><a class="header-anchor" href="#install及参数" aria-hidden="true">#</a> install及参数</h1><p>install命令用于安装一个包以及它所依赖的任何包</p><h2 id="_1-g" tabindex="-1"><a class="header-anchor" href="#_1-g" aria-hidden="true">#</a> 1 -g</h2><p>安装在全局的地方，所有node项目都可以使用这个module，安装路径可以通过<code>npm root -g</code>查看。</p><h2 id="_2-不带参数" tabindex="-1"><a class="header-anchor" href="#_2-不带参数" aria-hidden="true">#</a> 2 不带参数</h2><p><code>npm i</code> 或 <code>npm install</code></p><p>默认会安装两种（dependencies 字段和 devDependencies 字段中的所有模块）依赖，安装在项目目录下的node_modules目录中。</p><h2 id="_3-save-prod或是-p-save或者-s" tabindex="-1"><a class="header-anchor" href="#_3-save-prod或是-p-save或者-s" aria-hidden="true">#</a> 3 --save-prod或是-P(--save或者-S)</h2><p>安装在项目目录下的node_modules目录中，并把安装包信息写入package.json文件的dependencies字段中，表明是运行时依赖，正常使用<code>npm install</code>时，会下载dependencies和devDependencies中的模块，当使用<code>npm install –production</code>或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。</p><p>如vue、vue-router</p><h2 id="_4-save-d或者-d" tabindex="-1"><a class="header-anchor" href="#_4-save-d或者-d" aria-hidden="true">#</a> 4 --save-d或者-D</h2><p>安装在项目目录下的node_modules目录中，并安装包信息写入package.json文件的devDependencies字段中，表明是开发时依赖。</p><p>如webpack、loader类、测试类、优化类的包</p><h2 id="_5-只写包名" tabindex="-1"><a class="header-anchor" href="#_5-只写包名" aria-hidden="true">#</a> 5 只写包名</h2><p>如 <code>npm i loadsh</code>，将会把安装包信息写入package.json文件的dependencies。</p><p>如果我们开发的是一个库，当别人安装我们的包时，库 package.json 文件 devDependencies 中列出的包，是不会被 npm 下载的，即只会安装库本身，和该库package.json 文件 dependencies 中列出的包。</p>',16),l={href:"https://blog.csdn.net/csdn_yudong/article/details/83721870",target:"_blank",rel:"noopener noreferrer"};function h(_,m){const n=o("ExternalLinkIcon");return s(),c("div",null,[p,e("p",null,[a("参考 "),e("a",l,[a("npm install 你很明白吗"),r(n)])])])}const f=d(i,[["render",h],["__file","install01.html.vue"]]);export{f as default};
