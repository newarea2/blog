import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-f1b20077.js";const p={},t=e(`<h1 id="与-rollup-对比" tabindex="-1"><a class="header-anchor" href="#与-rollup-对比" aria-hidden="true">#</a> 与 Rollup 对比</h1><ul><li>创建一个 npm 项目 espree-test</li><li>安装 espree <code>npm i espree</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- espree-test
    |-- package-lock.json
    |-- package.json
    |-- rollup.config.js
    |-- src
        |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> espree <span class="token keyword">from</span> <span class="token string">&#39;espree&#39;</span>

<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
import { a } from &#39;./foo.js&#39;
const b = a + 1
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> ast <span class="token operator">=</span> espree<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 espree-test 目录，直接执行 <code>node ./src/index.js</code> 肯定是不行的，因为 Node 使用的是 CommonJS 规范，而 index.js 文件使用的是 ES6 模块语法。</p><p>index.js 依赖了 espree，espress 也依赖了其他依赖，这些依赖也有自己的依赖...从而形成了一颗依赖树。</p><p>Rollup 可以将整个依赖树打包成一个 js 文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-commonjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行打包命令 <code>npx rollup -c</code>，生成文件 dist/index.js，该文件可以在 Node 环境被运行，即此时可以成功执行 <code>node ./src/index.js</code></p>`,9),o=[t];function l(i,c){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","compare-with-rollup.html.vue"]]);export{u as default};
