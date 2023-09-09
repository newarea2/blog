# 配置文件

配置文件更加灵活、方便，特别是当配置项变多时，配置文件的优势就更加明显。

rollup.config.js

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

使用配置文件

`rollup -c rollup.config.js`

或者修改package.json

```json
{
  "scripts": {
    "rollup": "rollup -c rollup.config.js"
  }
}
```

注意：可以使用简写 `rollup -c`，直接使用 `rollup` 不会执行打包。

配置文件 `rollup.config.js` 通常使用 ES6 模块语法，配置文件在被使用前会被 Rollup 转化为 CommonJS 模块语法（如果要跳过 Rollup 转化，把配置文件后缀改成 `.mjs` 即可）；也可以直接编写 CommonJS 模块语法的配置文件，但要求配置文件后缀是 `.cjs`，且 Node 版本 13+。

结合插件 `@rollup/plugin-typescript`，也可以使用 TypeScript 书写配置文件：

`rollup --config rollup.config.ts --configPlugin typescript`

配置文件不会被 bable 处理，所以只能使用 ES2015 特性（除了 `export default` 语法）。

配置参数[列表](https://rollupjs.org/guide/en/#configuration-files)、[含义](https://rollupjs.org/guide/en/#command-line-flags)、[详情](https://rollupjs.org/guide/en/#big-list-of-options)