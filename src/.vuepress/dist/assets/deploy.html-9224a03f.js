import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-72775176.js";const i={},t=e(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><p>路由和 vite 配置中都可以设置 base：</p><p>路由</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/xxx/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite 配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/vite/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-两处都不设置" tabindex="-1"><a class="header-anchor" href="#_1-两处都不设置" aria-hidden="true">#</a> 1 两处都不设置</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><h3 id="_1-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_1-1-开发环境" aria-hidden="true">#</a> 1.1 开发环境</h3><p>点击按钮可以正常切换页面，刷新也正常。</p><h3 id="_1-2-生产环境" tabindex="-1"><a class="header-anchor" href="#_1-2-生产环境" aria-hidden="true">#</a> 1.2 生产环境</h3><h4 id="任意位置" tabindex="-1"><a class="header-anchor" href="#任意位置" aria-hidden="true">#</a> 任意位置</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\study\\vite-ts\\dist</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-html-内" tabindex="-1"><a class="header-anchor" href="#nginx-html-内" aria-hidden="true">#</a> nginx html 内</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\soft\\nginx-1.22.0\\html\\vite</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html/vite<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-vite-中设置-base" tabindex="-1"><a class="header-anchor" href="#_2-vite-中设置-base" aria-hidden="true">#</a> 2 vite 中设置 base</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><h3 id="_2-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_2-1-开发环境" aria-hidden="true">#</a> 2.1 开发环境</h3><p>点击按钮可以正常切换页面，但是不能刷新。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/03.png" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure><p>可以发现 index.html 中所需的相关资源文件自动被加上了一个前缀。</p><p>刷新：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/04.png" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><h3 id="_2-2-生产环境" tabindex="-1"><a class="header-anchor" href="#_2-2-生产环境" aria-hidden="true">#</a> 2.2 生产环境</h3><h4 id="任意位置-1" tabindex="-1"><a class="header-anchor" href="#任意位置-1" aria-hidden="true">#</a> 任意位置</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\study\\vite-ts\\dist</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#用于匹配首页</span>
    location / <span class="token punctuation">{</span>
        root   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#用于匹配首页资源</span>
    location /vite <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-html-内-1" tabindex="-1"><a class="header-anchor" href="#nginx-html-内-1" aria-hidden="true">#</a> nginx html 内</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\soft\\nginx-1.22.0\\html\\vite</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html/vite<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location /vite <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>   html/vite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-路由设置-base" tabindex="-1"><a class="header-anchor" href="#_3-路由设置-base" aria-hidden="true">#</a> 3 路由设置 base</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/05.png" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><h3 id="_3-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_3-1-开发环境" aria-hidden="true">#</a> 3.1 开发环境</h3><p>点击按钮可以正常切换页面，刷新也正常。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/06.png" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/07.png" alt="07" tabindex="0" loading="lazy"><figcaption>07</figcaption></figure><h3 id="_3-2-生产环境" tabindex="-1"><a class="header-anchor" href="#_3-2-生产环境" aria-hidden="true">#</a> 3.2 生产环境</h3><h4 id="任意位置-2" tabindex="-1"><a class="header-anchor" href="#任意位置-2" aria-hidden="true">#</a> 任意位置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-html-内-2" tabindex="-1"><a class="header-anchor" href="#nginx-html-内-2" aria-hidden="true">#</a> nginx html 内</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html/vite<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-两处都设置" tabindex="-1"><a class="header-anchor" href="#_4-两处都设置" aria-hidden="true">#</a> 4 两处都设置</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/08.png" alt="08" tabindex="0" loading="lazy"><figcaption>08</figcaption></figure><h3 id="_4-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_4-1-开发环境" aria-hidden="true">#</a> 4.1 开发环境</h3><p>点击按钮可以正常切换页面，刷新也正常。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/09.png" alt="09" tabindex="0" loading="lazy"><figcaption>09</figcaption></figure><h3 id="_4-2-生产环境" tabindex="-1"><a class="header-anchor" href="#_4-2-生产环境" aria-hidden="true">#</a> 4.2 生产环境</h3><h4 id="任意位置-3" tabindex="-1"><a class="header-anchor" href="#任意位置-3" aria-hidden="true">#</a> 任意位置</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\study\\vite-ts\\dist</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location /vite <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>  D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-html-内-3" tabindex="-1"><a class="header-anchor" href="#nginx-html-内-3" aria-hidden="true">#</a> nginx html 内</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\soft\\nginx-1.22.0\\html\\vite</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html/vite<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location /vite <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>  html/vite<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-两处都设置-base-不相同" tabindex="-1"><a class="header-anchor" href="#_5-两处都设置-base-不相同" aria-hidden="true">#</a> 5 两处都设置，base 不相同</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/10.png" alt="10" tabindex="0" loading="lazy"><figcaption>10</figcaption></figure><h3 id="_5-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_5-1-开发环境" aria-hidden="true">#</a> 5.1 开发环境</h3><p>浏览器输入localhost:3000，显示如下，点击按钮可以正常切换页面，但是不能刷新</p><p>localhost:3000 -&gt; localhost:3000/a -&gt; localhost:3000/b/a</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/11.png" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230424/12.png" alt="12" tabindex="0" loading="lazy"><figcaption>12</figcaption></figure><h3 id="_5-2-生产环境" tabindex="-1"><a class="header-anchor" href="#_5-2-生产环境" aria-hidden="true">#</a> 5.2 生产环境</h3><h4 id="任意位置-4" tabindex="-1"><a class="header-anchor" href="#任意位置-4" aria-hidden="true">#</a> 任意位置</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\study\\vite-ts\\dist</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment"># 返回 index.html</span>
    location / <span class="token punctuation">{</span>
        root   D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 使 index.html 所需资源能被正确引用</span>
    location /a <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>  D:<span class="token punctuation">\\</span>study<span class="token punctuation">\\</span>vite-ts<span class="token punctuation">\\</span>dist<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#配和路由history模式、解决不能刷新的问题</span>
    location /b <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-html-内-4" tabindex="-1"><a class="header-anchor" href="#nginx-html-内-4" aria-hidden="true">#</a> nginx html 内</h4><p>vue打包文件dist内的文件的存放路径 <code>D:\\soft\\nginx-1.22.0\\html\\c</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment"># 返回 index.html</span>
    location / <span class="token punctuation">{</span>
        root   html/c<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 使 index.html 所需资源能被正确引用</span>
    location /a <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>  html/c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#配和路由history模式、解决不能刷新的问题</span>
    location /b <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 base: ‘/a/’，碰到 history: createWebHistory() （情况2）或者 当 base: ‘/a’，碰到 history: createWebHistory()（情况5）开发环境下会出现不能刷新的问题。</p><p>实际情况一般使用情况 1、4，有时也可以根据情况使用 2、3。</p><p><strong>设置 base: ‘/vite/’ 的作用:</strong></p><p>给 index.html 中所引用的资源路径添加前缀。</p><p><strong>设置 history: createWebHistory(‘/vite/’) 的作用：</strong></p><p>给所有路由 path 添加一个前缀。</p><p><strong>部署到根目录和非根目录的区别：</strong></p><p>部署到根目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {
    index index.html index.htm
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署到非根目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /sub {
    index index.html index.htm
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),l=[t];function c(p,d){return a(),s("div",null,l)}const r=n(i,[["render",c],["__file","deploy.html.vue"]]);export{r as default};
