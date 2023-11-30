import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,a as c}from"./app-90f462c1.js";const a={},s=c(`<h1 id="git-忽略文件" tabindex="-1"><a class="header-anchor" href="#git-忽略文件" aria-hidden="true">#</a> git 忽略文件</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- git-demo
    |-- .gitignore
    |-- src
        |-- test.txt
        |-- utils
            |-- index.js
            |-- api
                |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-基础规则" tabindex="-1"><a class="header-anchor" href="#_1-基础规则" aria-hidden="true">#</a> 1 基础规则</h2><ul><li><p>每一行是一条匹配规则，每个规则路径都是相对项目根目录。以 <code>#</code> 开头的行表示注释。</p></li><li><p>开头的斜杠表示项目根目录，推荐带上，如<br><code>src/utils/api/index.js</code> 等价与 <code>/src/utils/api/index.js</code>。</p></li><li><p><code>/src/utils</code> 既表示目录，也表示文件（src下如果存在文件utils）。</p></li><li><p>末尾的斜杠表示目录，如 <code>/src/utils/</code> 只表示目录。</p></li></ul><p>如果想要忽略文件夹api下的index.js，可以这样写：</p><p><code>src/utils/api</code><br><code>src/utils/api/</code><br><code>src/utils/api/index.js</code></p><p><code>/src/utils/api</code><br><code>/src/utils/api/</code><br><code>/src/utils/api/index.js</code></p><p>可以发现，规则是需要写完整的路径名，要么具体到文件index.js本身，要么具体到index.js的父文件夹。</p><p>在了解下面规则后，上面的写法可以再简化</p><h2 id="_2-包含" tabindex="-1"><a class="header-anchor" href="#_2-包含" aria-hidden="true">#</a> 2 包含</h2><p><code>!</code> 表示包含某文件（夹），如果之前的规则排除了某文件（夹），可以通过 <code>!</code> 将其重新包含进来。但是，如果包含某文件的文件夹被排除了，即使使用 <code>!</code> 也无法重新将其包含进来。</p><h2 id="_3-量词" tabindex="-1"><a class="header-anchor" href="#_3-量词" aria-hidden="true">#</a> 3 量词</h2><p><code>*</code> 表示任意长度的字符，除了表示一个斜杠 <code>/</code>。</p><p><code>?</code> 表示任意一个字符，除了斜杠 <code>/</code>。</p><h2 id="_4-范围" tabindex="-1"><a class="header-anchor" href="#_4-范围" aria-hidden="true">#</a> 4 范围</h2><p><code>[xyz]</code>、<code>[a-zA-Z]</code> 一个字符集合。匹配方括号中的任意字符</p><h2 id="_5-连续星号" tabindex="-1"><a class="header-anchor" href="#_5-连续星号" aria-hidden="true">#</a> 5 连续星号</h2><p><code>**/api</code> 匹配任意层级路径下的文件（夹）api</p><p><code>src/**</code> 匹配目录src下任意层级的目录、文件</p><p><code>src/**/index.js</code> 这里连续星号表示0个或更多文件夹</p>`,20),r=[s];function o(n,t){return d(),i("div",null,r)}const h=e(a,[["render",o],["__file","ignore.html.vue"]]);export{h as default};
