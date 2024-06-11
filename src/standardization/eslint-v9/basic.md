# 基础

2024年4月5日 ESLint v9.0.0 正式发布。[ESLint v9.0.0 released](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/)。这是 ESLint 的重大版本升级，改动还是蛮大的。

## 1 不再支持 Node.js < v18.18.0 的版本

## 2 扁平配置（flat config）成为默认的配置格式

ESLint v9 采用全新的[配置系统 - flat config](https://eslint.org/blog/2024/04/eslint-config-inspector/)，之前 eslintrc 形式的配置文件已经废弃。

配置文件变成下面 3 中文件之一：

- eslint.config.js
- eslint.config.mjs
- eslint.config.cjs

配置文件导出的是一个包含一个或多个[配置对象](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects)的数组，

扁平化配置，包含哪些配置项

数组中各个配置对象是合并的吗，不同配置对象中的相同配置是如何起作用的。

预定义的配置

共享的配置

你自己的

默认会查找 `.js`、 `.mjs`、 `.cjs` 等后缀的文件

When the ESLint CLI is used, it searches for eslint.config.js from the current working directory and if not found will continue the search up the directory’s ancestors until the file is found or the root directory is hit. 



`eslint.config.js`、`eslint.config.cjs` 中需要使用 CommonJS 模块语法，`eslint.config.mjs` 中需要使用 ESM 模块语法。如：

```js
// eslint.config.js 或 eslint.config.cjs
module.exports = [
  {
    rules: {
      semi: [ 'error', 'never' ],
    }
  }
]
```

```js
// eslint.config.mjs
export default [
  {
    rules: {
      semi: [ 'error', 'never' ],
    }
  }
]
```

默认情况下，ESLint 会检测 `js`、`cjs`、`mjs` 三种后缀的文件。