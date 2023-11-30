import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,b as n,d as s,f as l,a}from"./app-90f462c1.js";const u={},i=a(`<h1 id="零配置写前端项目" tabindex="-1"><a class="header-anchor" href="#零配置写前端项目" aria-hidden="true">#</a> 零配置写前端项目</h1><p>假设现在我想写一个 demo 测试下 Vue3 中渲染函数，有以下几种方式：</p><h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h2><p>下载 Vue3 的浏览器版本 vue.global.js，新建文件夹 test，结构如下：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230715/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><p>index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue.global.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token operator">=</span> Vue

<span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vNode<span class="token punctuation">)</span><span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vNode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中打开index.html，查看控制台。这种方式最原始，不够灵活。例如，如果中途想添加新的依赖，必须得手动下载资源文件，然后将资源移到项目中。</p><h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h2><p>使用官方提供的命令行工具或 Vite 创建一个 Vue 项目，在项目中通过下面方式使用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vNode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候我只想写个小demo，简单测试下某个方法，这种方式就显得很笨重，它会下载很多冗余代码。</p><h2 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h2>`,15),k={href:"https://v2.parceljs.org/getting-started/webapp/",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>初始化一个 npm 项目</p><p>安装 Parcle: <code>yarn add parcel@next -D</code></p><p>安装 Vue3: <code>yarn add vue@next</code></p><p>在项目下新建下面两个文件：</p><p>index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vNode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel serve ./src/index.html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel build ./src/index.html&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npm run start</code></p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230715/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><p>在浏览器中打开服务器地址，在打开控制台查看结果。对比上面两种方式，这种方式就很理想。零配置，而且还用热更新得功能。项目结构简单，目标明确，不会产生冗余代码。</p><p><strong>注意</strong></p><p>如果不使用 Parcel，而是通过 script 标签使用 ESM 的方式是不行的，这种方式只能 import 项目中已经存在的文件，不能导入 npm 包。</p><p>index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vNode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时通过服务器的方式打开 html 文件控制台会报错：</p><p>Uncaught TypeError: Failed to resolve module specifier &quot;vue&quot;. Relative references must start with either &quot;/&quot;, &quot;./&quot;, or &quot;../&quot;.</p>`,21);function d(v,g){const t=e("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[s("使用 "),n("a",k,[s("Parcel"),l(t)])]),r])}const h=p(u,[["render",d],["__file","no-config.html.vue"]]);export{h as default};
