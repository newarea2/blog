import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as r,a as e,b as i,f as d,d as t}from"./app-f1b20077.js";const o={},c=e("h1",{id:"配置文件-tsconfig-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置文件-tsconfig-json","aria-hidden":"true"},"#"),i(" 配置文件 tsconfig.json")],-1),u={href:"https://www.staging-typescript.org/zh/tsconfig#include",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.typescriptlang.org/zh/tsconfig",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>本篇主要介绍 TypeScript 中的 tsconfig.json 文件的作用以及配置参数。主要介绍文件选项和编译选项两部分.</p><p>如果一个目录下存在一个 <code>tsconfig.json</code> 文件，那么它意味着这个目录是 TypeScript 项目的根目录。<code>tsconfig.json</code> 文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：</p><ul><li>不带任何输入文件的情况下调用 <code>tsc</code>，编译器会从当前目录开始去查找 <code>tsconfig.json文</code> 件，逐级向上搜索父目录。</li><li>不带任何输入文件的情况下调用 <code>tsc</code>，且使用命令行参数 <code>--project</code>（或 <code>-p</code> ）指定一个包含 <code>tsconfig.json</code> 文件的目录。</li></ul><p>当命令行上指定了输入文件时，tsconfig.json 文件会被忽略。</p><h2 id="_1-文件选项" tabindex="-1"><a class="header-anchor" href="#_1-文件选项" aria-hidden="true">#</a> 1 文件选项</h2><h3 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files</h3><p>它的含义是编译器需要编译的相对或绝对文件路径的单个文件列表。当项目只有少量文件时，该选项就很有用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;files&quot;: [
    &quot;src/index.ts&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时执行 <code>tsc</code> 命令，编译器会编译 <code>src/index.ts</code> 文件。</p><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p>它的含义是编译器需要编译的文件或者目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;include&quot;: [
    &quot;src&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时执行 <code>tsc</code> 命令，编译器会编译 <code>src</code> 目录下的所有 <code>ts</code> 文件。</p><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h3><p>它的含义是编译器需要排除的文件或者目录。默认会排除 <code>node_modules</code> 目录下的所有文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exclude&quot;: [
    &quot;src/lib&quot;
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果 <code>files</code> 和 <code>includes</code> 都没有指定，编译器默认包含当前目录下所有的 <code>ts</code> 文件。（<code>.ts</code>、<code>.d.ts</code>、<code>.tsx</code>）</li><li>如果 <code>exclude</code> 存在，<code>exclude</code> 配置优先级高于 <code>files</code> 和 <code>includes</code> 配置</li><li><code>exclude</code> 和 <code>includes</code> 配置支持 glob 通配符：<code>*</code>、<code>?</code>、<code>**</code></li></ul><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><p>我们可以把一些配置抽离出一个配置文件，在 <code>tsconfig.json</code> 文件引入，方便以后管理与维护。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// tsconfig.json

{
  &quot;extends&quot;: &quot;./base.json&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主配置文件中，设置文件选项会覆盖调继承文件中的相同的配置项。</p><h3 id="compileonsave" tabindex="-1"><a class="header-anchor" href="#compileonsave" aria-hidden="true">#</a> compileOnSave</h3><p>它可以让 IDE 在保存文件时，编译器自动编译。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;compileOnSave&quot;: true
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前只有个别 IDE 支持。</p><h2 id="_2-编译选项" tabindex="-1"><a class="header-anchor" href="#_2-编译选项" aria-hidden="true">#</a> 2 编译选项</h2><p>大致配置如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
    /* 基本选项 */
    &quot;target&quot;: &quot;es5&quot;,                       // 指定 ECMAScript 目标版本: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;
    &quot;module&quot;: &quot;commonjs&quot;,                  // 指定使用模块: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;
    &quot;lib&quot;: [],                             // 指定要包含在编译中的库文件
    &quot;allowJs&quot;: true,                       // 允许编译 javascript 文件
    &quot;checkJs&quot;: true,                       // 报告 javascript 文件中的错误
    &quot;jsx&quot;: &quot;preserve&quot;,                     // 指定 jsx 代码的生成: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;
    &quot;declaration&quot;: true,                   // 生成相应的 &#39;.d.ts&#39; 文件
    &quot;sourceMap&quot;: true,                     // 生成相应的 &#39;.map&#39; 文件
    &quot;outFile&quot;: &quot;./&quot;,                       // 将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中
    &quot;outDir&quot;: &quot;./&quot;,                        // 指定输出目录
    &quot;rootDir&quot;: &quot;./&quot;,                       // 用来控制输出目录结构 --outDir.
    &quot;removeComments&quot;: true,                // 删除编译后的所有的注释
    &quot;noEmit&quot;: true,                        // 不生成输出文件
    &quot;importHelpers&quot;: true,                 // 从 tslib 导入辅助工具函数
    &quot;isolatedModules&quot;: true,               // 将每个文件作为单独的模块 （与 &#39;ts.transpileModule&#39; 类似）.

    /* 严格的类型检查选项 */
    &quot;strict&quot;: true,                        // 启用所有严格类型检查选项
    &quot;noImplicitAny&quot;: true,                 // 在表达式和声明上有隐含的 any类型时报错
    &quot;strictNullChecks&quot;: true,              // 启用严格的 null 检查
    &quot;noImplicitThis&quot;: true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    &quot;alwaysStrict&quot;: true,                  // 以严格模式检查每个模块，并在每个文件里加入 &#39;use strict&#39;

    /* 额外的检查 */
    &quot;noUnusedLocals&quot;: true,                // 有未使用的变量时，抛出错误
    &quot;noUnusedParameters&quot;: true,            // 有未使用的参数时，抛出错误
    &quot;noImplicitReturns&quot;: true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    &quot;noFallthroughCasesInSwitch&quot;: true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    &quot;moduleResolution&quot;: &quot;node&quot;,            // 选择模块解析策略： &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)
    &quot;baseUrl&quot;: &quot;./&quot;,                       // 用于解析非相对模块名称的基目录
    &quot;paths&quot;: {},                           // 模块名到基于 baseUrl 的路径映射的列表
    &quot;rootDirs&quot;: [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    &quot;typeRoots&quot;: [],                       // 包含类型声明的文件列表，默认 node_modules/@types
    &quot;types&quot;: [],                           // 需要包含的类型声明文件名列表
    &quot;allowSyntheticDefaultImports&quot;: true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    &quot;sourceRoot&quot;: &quot;./&quot;,                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    &quot;mapRoot&quot;: &quot;./&quot;,                       // 指定调试器应该找到映射文件而不是生成文件的位置
    &quot;inlineSourceMap&quot;: true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    &quot;inlineSources&quot;: true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    &quot;experimentalDecorators&quot;: true,        // 启用装饰器
    &quot;emitDecoratorMetadata&quot;: true          // 为装饰器提供元数据的支持
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们会逐个分析上面的配置项。</p><h3 id="incremental" tabindex="-1"><a class="header-anchor" href="#incremental" aria-hidden="true">#</a> incremental</h3><p>它的含义是增量编译，TypeScript 编译器在第一次编译后会生成一个可以编译信息的文件，在之后的编译之后会根据这个文件提高编译的速度。该文件默认会在根目录下名称为 <code>tsconfig.tsbuildinfo</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;program&quot;: {
    &quot;fileInfos&quot;: {
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.d.ts&quot;: {
        &quot;version&quot;: &quot;49ff9798f592c8b7e628fd881401e68810c1b3589ecd7a41b32b3c287374cde0&quot;,
        &quot;signature&quot;: &quot;49ff9798f592c8b7e628fd881401e68810c1b3589ecd7a41b32b3c287374cde0&quot;
      },
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.es5.d.ts&quot;: {
        &quot;version&quot;: &quot;ff5688d6b2fcfef06842a395d7ff4d5730d45b724d4c48913118c889829052a1&quot;,
        &quot;signature&quot;: &quot;ff5688d6b2fcfef06842a395d7ff4d5730d45b724d4c48913118c889829052a1&quot;
      },
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.dom.d.ts&quot;: {
        &quot;version&quot;: &quot;2d53f3741e5a4f78a90f623387d71a1cc809bb258f10cdaec034b67cbf71022f&quot;,
        &quot;signature&quot;: &quot;2d53f3741e5a4f78a90f623387d71a1cc809bb258f10cdaec034b67cbf71022f&quot;
      },
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.webworker.importscripts.d.ts&quot;: {
        &quot;version&quot;: &quot;fe4e59403e34c7ff747abe4ff6abbc7718229556d7c1a5b93473fb53156c913b&quot;,
        &quot;signature&quot;: &quot;fe4e59403e34c7ff747abe4ff6abbc7718229556d7c1a5b93473fb53156c913b&quot;
      },
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.scripthost.d.ts&quot;: {
        &quot;version&quot;: &quot;b9faa17292f17d2ad75e34fac77dd63a6403af1dba02d39cd0cbb9ffdf3de8b9&quot;,
        &quot;signature&quot;: &quot;b9faa17292f17d2ad75e34fac77dd63a6403af1dba02d39cd0cbb9ffdf3de8b9&quot;
      },
      &quot;./src/index.ts&quot;: {
        &quot;version&quot;: &quot;a0e2a405f15ab7f6218e22c622acc2706d51eae2aa90f302f81f68628e22cd55&quot;,
        &quot;signature&quot;: &quot;ec8f4696ee1308e5fbc9f50626f5677f0f15bd7c228311cbcc0669233461fa1d&quot;
      }
    },
    &quot;options&quot;: {
      &quot;incremental&quot;: true,
      &quot;configFilePath&quot;: &quot;./tsconfig.json&quot;
    },
    &quot;referencedMap&quot;: {},
    &quot;exportedModulesMap&quot;: {},
    &quot;semanticDiagnosticsPerFile&quot;: [
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.d.ts&quot;,
      &quot;./src/index.ts&quot;,
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.es5.d.ts&quot;,
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.dom.d.ts&quot;,
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.webworker.importscripts.d.ts&quot;,
      &quot;../../../../../usr/local/lib/node_modules/typescript/lib/lib.scripthost.d.ts&quot;
    ]
  },
  &quot;version&quot;: &quot;3.6.2&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsbuildinfofile" tabindex="-1"><a class="header-anchor" href="#tsbuildinfofile" aria-hidden="true">#</a> tsBuildInfoFile</h3><p>可以修改增量编译文件的存储文件夹和文件名</p><h3 id="diagnostics" tabindex="-1"><a class="header-anchor" href="#diagnostics" aria-hidden="true">#</a> diagnostics</h3><p>打印编译信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Files:            6
Lines:        24817
Nodes:       111372
Identifiers:  41045
Symbols:      27914
Types:         8268
Memory used: 68338K
I/O read:     0.01s
I/O write:    0.00s
Parse time:   0.42s
Bind time:    0.23s
Check time:   1.13s
Emit time:    0.02s
Total time:   1.80s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h3><p>设置目标语言的版本（即编译后生成哪个版本的 JS），可设置为 <code>ES3</code>、<code>ES5</code> 和 <code>ES2015</code> 等等，默认为 <code>ES3</code>。</p><h3 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h3><p>设置生成代码的模块标准，可以设置为 <code>CommonJS</code>、<code>AMD</code> 和 <code>UMD</code> 等等。</p><h3 id="outfile" tabindex="-1"><a class="header-anchor" href="#outfile" aria-hidden="true">#</a> outFile</h3><p>将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中。</p><p>我们创建两个文件，分别为 <code>index.ts</code> 和 <code>amd.ts</code>，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// ./src/index.ts
import a = require(&#39;./amd&#39;)

let str: string = &#39;abc&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// ./src/amd.ts

let amd: number = 0

export = amd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.ts</code> 引入 <code>amd.ts</code>，我们再设置一下 <code>tsconfig.json</code> 文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
    &quot;module&quot;: &quot;amd&quot;,
    &quot;outFile&quot;: &quot;./app.js&quot;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在命令行执行 <code>tsc</code> 命令，编译器会将两个 <code>ts</code> 文件合并编译成一个 <code>app.js</code> 文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define(&quot;amd&quot;, [&quot;require&quot;, &quot;exports&quot;], function (require, exports) {
    &quot;use strict&quot;;
    var amd = 0;
    return amd;
});
define(&quot;index&quot;, [&quot;require&quot;, &quot;exports&quot;], function (require, exports) {
    &quot;use strict&quot;;
    exports.__esModule = true;
    var str = &#39;abc&#39;;
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> lib</h3><p>指定 <code>ts</code> 需要引用的库，即声明文件，若 <code>target</code> 设置为 <code>es5</code> 时，<code>lib</code> 默认为 <code>[&quot;dom&quot;, &quot;es5&quot;, &quot;scripthost&quot;]</code>。</p><p>例如，我们想在 <code>ts</code> 中使用 es2019 的方法。可以在 <code>lib</code> 配置里添加 <code>es2019</code>。</p><h3 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h3><p>允许编译器编译 JS 文件（js、jsx）。</p><h3 id="checkjs" tabindex="-1"><a class="header-anchor" href="#checkjs" aria-hidden="true">#</a> checkJs</h3><p>允许在 JS 文件中报错，通常与 allowJS 一起使用。</p><h3 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir" aria-hidden="true">#</a> outDir</h3><p>指定输出目录</p><h3 id="rootdir" tabindex="-1"><a class="header-anchor" href="#rootdir" aria-hidden="true">#</a> rootDir</h3><p>指定输入文件目录</p><h3 id="declaration" tabindex="-1"><a class="header-anchor" href="#declaration" aria-hidden="true">#</a> declaration</h3><p>编译器编译时，允许生成声明文件（<code>.d.ts</code>）。</p><h3 id="declarationdir" tabindex="-1"><a class="header-anchor" href="#declarationdir" aria-hidden="true">#</a> declarationDir</h3><p>指定声明文件的生成的目录。</p><h3 id="emitdeclarationonly" tabindex="-1"><a class="header-anchor" href="#emitdeclarationonly" aria-hidden="true">#</a> emitDeclarationOnly</h3><p>编译器编译时，只允许生成声明文件。</p><h3 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> sourceMap</h3><p>编译器编译时，生成目标文件的 sourceMap 文件。</p><h3 id="inlinesourcemap" tabindex="-1"><a class="header-anchor" href="#inlinesourcemap" aria-hidden="true">#</a> inlineSourceMap</h3><p>编译器编译时，将 sourceMap 生成在 <code>js</code> 文件中。</p><h3 id="declarationmap" tabindex="-1"><a class="header-anchor" href="#declarationmap" aria-hidden="true">#</a> declarationMap</h3><p>编译器编译时，生成声明文件的 sourceMap。</p><h3 id="typeroots" tabindex="-1"><a class="header-anchor" href="#typeroots" aria-hidden="true">#</a> typeRoots</h3><p>设置声明文件目录，默认 <code>node_modules/@types</code></p><h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> types</h3><p>这是声明文件包，如果设置了某一个声明文件，那么编译器只会加载这个声明文件。</p><h3 id="removecomments" tabindex="-1"><a class="header-anchor" href="#removecomments" aria-hidden="true">#</a> removeComments</h3><p>是否删除注释</p><h3 id="noemit" tabindex="-1"><a class="header-anchor" href="#noemit" aria-hidden="true">#</a> noEmit</h3><p>执行 <code>tsc</code> 不会输出任何文件</p><h3 id="noemitonerror" tabindex="-1"><a class="header-anchor" href="#noemitonerror" aria-hidden="true">#</a> noEmitOnError</h3><p>发生错误时不输出文件</p><h3 id="noemithelpers" tabindex="-1"><a class="header-anchor" href="#noemithelpers" aria-hidden="true">#</a> noEmitHelpers</h3><p>设置为 <code>true</code> 时，不生成 <code>helper</code> 函数。先看下面示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class B {}

class A extends B {}

export = A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建了一个模块。然后在控制台执行 <code>tsc</code>，下面就是编译后的结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var __extends = (this &amp;&amp; this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &amp;&amp; function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null &amp;&amp; _super.apply(this, arguments) || this;
    }
    return A;
}(B));
module.exports = A;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会自动生成 <code>__extends</code>。</p><p>如果我们将 noEmitHelpers 这个配置设置为 <code>true</code> 之后。编译后的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null &amp;&amp; _super.apply(this, arguments) || this;
    }
    return A;
}(B));
module.exports = A;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的编译后的结果中 <code>__extends</code> 未定义。<code>ts</code> 已经为开发者定义了一个配置项，方便解决该问题。 就是接下来要介绍的配置 <code>importHelpers</code>。</p><h3 id="importhelpers" tabindex="-1"><a class="header-anchor" href="#importhelpers" aria-hidden="true">#</a> importHelpers</h3><p>通过 <code>tslib</code> 引入 <code>helper</code> 函数，文件必须是模块。编译结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var tslib_1 = require(&quot;tslib&quot;);
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var A = /** @class */ (function (_super) {
    tslib_1.__extends(A, _super);
    function A() {
        return _super !== null &amp;&amp; _super.apply(this, arguments) || this;
    }
    return A;
}(B));
module.exports = A;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若提示 <code>tslib</code> 未找到时，可以手动安装它。</p><h3 id="downleveliteration" tabindex="-1"><a class="header-anchor" href="#downleveliteration" aria-hidden="true">#</a> downlevelIteration</h3><p>降级遍历器的实现，下面是一个 <code>es6</code> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = [1, 2, 3]
let b = [4, ...a]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们打开这项配置，进行编译后结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var __read = (this &amp;&amp; this.__read) || function (o, n) {
    var m = typeof Symbol === &quot;function&quot; &amp;&amp; o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- &gt; 0) &amp;&amp; !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r &amp;&amp; !r.done &amp;&amp; (m = i[&quot;return&quot;])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this &amp;&amp; this.__spread) || function () {
    for (var ar = [], i = 0; i &lt; arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var a = [1, 2, 3];
var b = __spread([4], a);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会生成两个 <code>helper</code> 函数。</p><h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict" aria-hidden="true">#</a> strict</h3><p>表示开启所有严格的类型检查，若 <code>strict</code> 为 true，<code>alwaysStrict</code>、<code>noImplicitAny</code>、<code>strictNullChecks</code>、<code>strictFunctionTypes</code>、<code>strictPropertyInitialization</code>、<code>strictBindCallApply</code> 和 <code>noImplicitThis</code> 选项默认都为 true。</p><h3 id="alwaysstrict" tabindex="-1"><a class="header-anchor" href="#alwaysstrict" aria-hidden="true">#</a> alwaysStrict</h3><p>在代码中注入 <code>use strict</code>。</p><h3 id="noimplicitany" tabindex="-1"><a class="header-anchor" href="#noimplicitany" aria-hidden="true">#</a> noImplicitAny</h3><p>不允许隐式的 <code>any</code> 类型。</p><h3 id="strictnullchecks" tabindex="-1"><a class="header-anchor" href="#strictnullchecks" aria-hidden="true">#</a> strictNullChecks</h3><p>不允许把 <code>null</code>、<code>undefined</code> 赋值给其他类型变量。</p><h3 id="strictfunctiontypes" tabindex="-1"><a class="header-anchor" href="#strictfunctiontypes" aria-hidden="true">#</a> strictFunctionTypes</h3><p>不允许函数参数双向协变。</p><h3 id="strictpropertyinitialization" tabindex="-1"><a class="header-anchor" href="#strictpropertyinitialization" aria-hidden="true">#</a> strictPropertyInitialization</h3><p>类的实例属性必须初始化。</p><p>启用 strictNullChecks 和 strictPropertyInitialization</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BadGreeter</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token comment">// Property &#39;name&#39; has no initializer and is not definitely assigned in the constructor.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strictbindcallapply" tabindex="-1"><a class="header-anchor" href="#strictbindcallapply" aria-hidden="true">#</a> strictBindCallApply</h3><p>严格的 <code>bind</code>、<code>call</code>、<code>apply</code> 检查。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add (a: number, b: number) {
  return a + b
}

add.call(undefined, 1, &#39;2&#39;)
// Error: Argument of type &#39;&quot;2&quot;&#39; is not assignable to parameter of type &#39;number&#39;.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noimplicitthis" tabindex="-1"><a class="header-anchor" href="#noimplicitthis" aria-hidden="true">#</a> noImplicitThis</h3><p>不允许 <code>this</code> 有隐式的 <code>any</code> 类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class A {
  name: string = &#39;abc&#39;
  getName () {
    return function () {
      console.log(this.name)
    }
  }
}
// Error: &#39;this&#39; implicitly has type &#39;any&#39; because it does not have a type annotation.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nounusedlocals" tabindex="-1"><a class="header-anchor" href="#nounusedlocals" aria-hidden="true">#</a> noUnusedLocals</h3><p>检查只声明，未使用的局部变量</p><h3 id="nounusedparameters" tabindex="-1"><a class="header-anchor" href="#nounusedparameters" aria-hidden="true">#</a> noUnusedParameters</h3><p>检查未使用的函数参数</p><h3 id="nofallthroughcasesinswitch" tabindex="-1"><a class="header-anchor" href="#nofallthroughcasesinswitch" aria-hidden="true">#</a> noFallthroughCasesInSwitch</h3><p>防止 switch 语句贯穿</p><h3 id="noimplicitreturns" tabindex="-1"><a class="header-anchor" href="#noimplicitreturns" aria-hidden="true">#</a> noImplicitReturns</h3><p>每个分支都要有返回值</p><h3 id="esmoduleinterop" tabindex="-1"><a class="header-anchor" href="#esmoduleinterop" aria-hidden="true">#</a> esModuleInterop</h3><p>允许 <code>export =</code> 方式导出，也可以用 <code>import =</code> 的方式导入。</p><h3 id="allowumdglobalaccess" tabindex="-1"><a class="header-anchor" href="#allowumdglobalaccess" aria-hidden="true">#</a> allowUmdGlobalAccess</h3><p>允许在模块中访问 UMD 全局变量</p><h3 id="moduleresolution" tabindex="-1"><a class="header-anchor" href="#moduleresolution" aria-hidden="true">#</a> moduleResolution</h3><p>模块解析策略，这里提供两种解析策略 <code>node</code> 和 <code>classic</code>，<code>ts</code> 默认使用 <code>node</code> 解析策略。</p><ul><li><strong>classic</strong> 模块解析策略</li></ul><p>适用于 <code>AMD</code>、<code>System</code>、<code>ES2015</code></p><p>如果一个模块使用相对方式导入时，<code>ts</code> 就会依次解析同级目录 <code>.ts</code>、<code>.d.ts</code> 文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /root/src/moduleA.ts

import { b } from &#39;./moduleB&#39;

/**
 * /root/src/moduleB.ts
 * /root/src/moduleB.d.ts
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用非相对方式导入时如下， <code>ts</code> 会从当前目录的 <code>node_modules</code> 目录里查找，如果未找到，会依次向上级目录查找。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /root/src/moduleA.ts

import { b } from &#39;moduleB&#39;

/**
 * /root/src/node_modules/moduleB.ts
 * /root/src/node_modules/moduleB.d.ts
 *
 * /root/node_modules/moduleB.ts
 * /root/node_modules/moduleB.d.ts
 *
 * /node_modules/moduleB.ts
 * /node_modules/moduleB.d.ts
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>node</strong> 模块解析策略</li></ul><p>使用相对方式导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /root/src/moduleA.ts

import { b } from &#39;./moduleB&#39;

/**
 * /root/src/moduleB.ts
 * /root/src/moduleB.tsx
 * /root/src/moduleB.d.ts
 * /root/src/moduleB/package.json ( types 属性)
 * /root/src/moduleB/index.ts
 * /root/src/moduleB/index.tsx
 * /root/src/moduleB/index.d.ts
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用非相对方式导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /root/src/moduleA.ts

import { b } from &#39;moduleB&#39;

/**
 * /root/src/node_modules/moduleB.ts
 * /root/src/node_modules/moduleB.tsx
 * /root/src/node_modules/moduleB.d.ts
 * /root/src/node_modules/package.json ( types 属性)
 * /root/src/node_modules/index.ts
 * /root/src/node_modules/index.tsx
 * /root/src/node_modules/index.d.ts
 *
 * 依次向上目录查找
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="baseurl" tabindex="-1"><a class="header-anchor" href="#baseurl" aria-hidden="true">#</a> baseUrl</h3><p>解析非相对模块的基地址，默认为当前目录</p><h3 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> paths</h3><p>路径映射，相对于 baseUrl。比如示例中我们想引入 jquery 精简版本，可以制定它的相对路径。</p><h3 id="rootdirs" tabindex="-1"><a class="header-anchor" href="#rootdirs" aria-hidden="true">#</a> rootDirs</h3><p>将多个目录放在一个虚拟目录下，用于运行时。</p><p>比如 我们创建量以下两个文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /util/a.ts
let a: string = &#39;A&#39;
export = a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// /src/index.ts
import a from &#39;./a&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意在引入 <code>a</code> 时，是引入的当前目录。因为当 <code>rootDirs</code> 设置了 <code>src</code> 和 <code>util</code> 目录时，编译器默认它们属于同级目录。</p><h3 id="listemittedfiles" tabindex="-1"><a class="header-anchor" href="#listemittedfiles" aria-hidden="true">#</a> listEmittedFiles</h3><p>打印输出的文件。</p><h3 id="listfiles" tabindex="-1"><a class="header-anchor" href="#listfiles" aria-hidden="true">#</a> listFiles</h3><p>重点 esModuleInterop、allowSyntheticDefaultImports、importHelpers、downlevelIteration</p><p>target、module、lib的区别</p><ul><li>target 设置源码的环境，从而绝对编译时哪些 JS 特性会被降级，哪些会被保留</li><li>module 决定源码被编译成何种模块语法的代码</li><li>使用哪些内建类型。如值为 <code>[ES5]</code>，则在编写源码时，如输入 <code>Math.</code>，编辑器会有输入自动。</li></ul>`,163);function p(h,q){const n=a("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[e("a",u,[i("Compiler Options"),d(n)])]),e("p",null,[e("a",v,[i("官网（中文）"),d(n)])]),e("p",null,[e("a",m,[i("官网"),d(n)])]),b])}const g=s(o,[["render",p],["__file","config-file.html.vue"]]);export{g as default};
