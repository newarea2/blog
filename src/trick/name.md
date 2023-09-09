# 命名法

前端中有各种各样的命名法，如 JavaScript 中的变量一般使用驼峰命名法、类名使用帕斯卡命名法，文件夹名称有时使用中划线

| 命名法 | 英语 | 示例 | 使用场景 |
| :---- | :---- | :---- | :---- |
| 驼峰 | camelCase | fooBar | JS 变量名称 |
| 帕斯卡 | PascalCase | FooBar | JS 类名 |
| 中划线 | line-through、kebabCase | foo-bar | 文件夹名称、CSS 类名 |
| 下划线 | underline、underscore | foo_bar | CSS 类名 |
| 小写 | lowercase | foo | JS 变量名由单个单词组成 |
| 大写 | uppercase | FOO | JS 常量 |
| 首字母大写 | capitalize | Foo | - |

## 发音

camel [ˈkæml] 骆驼

kebab [kɪˈbæb] 烤肉串

## 一些用于转换命名法的工具

| 包名 | 描述 | 示例 |
| :---- | :---- | :---- |
| [uppercamelcase](https://github.com/samverschueren/uppercamelcase) | 将中划线/点/下划线/空格分隔的字符串转换为帕斯卡命名法 | foo-bar → FooBar |
| [camelcase](https://github.com/sindresorhus/camelcase) | 将中划线/点/下划线/空格分隔的字符串转换为帕斯卡命名法 | foo-bar → FooBar |
| [decamelize](https://github.com/sindresorhus/decamelize) | 使用**自定义分隔符**将驼峰字符串转换为小写字符串 | fooBar → foo-bar |
| [titleize](https://github.com/sindresorhus/titleize) | 将字符串中的每个单词首字母大写 | foo bar → Foo Bar |
| [humanize-string](https://github.com/sindresorhus/humanize-string) | 将驼峰化/中划线/下划线字符串转换为人性化字符串 | fooBar-Baz_Faz → Foo bar baz faz |
| [camelcase-keys](https://github.com/sindresorhus/camelcase-keys) | 将对象的key转化为驼峰命名法 | {'foo-bar': true} → {fooBar: true} |

## 手写转换方法

```ts
/**
 * camelCase('hello-world') // helloWorld
 */
export function camelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

/**
 * capitalize('hello') // Hello
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * pascalCase('hello-world') // HelloWorld
 */
export function pascalCase(str: string) {
  return capitalize(camelCase(str))
}

/**
 * kebabCase('helloWorld') // hello-world
 */
export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
```
