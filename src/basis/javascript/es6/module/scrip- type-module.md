# script type 值为 module

在 script 标签中写 js 代码，或者使用 src 引入 js 文件时，默认是不能使用 ES6 中的模块语法。除非在 script 标签上加 `type=module` 属性。

module.js

```js
export default function add(a, b) {
  return a + b
}
```

index.js

```js
// import add from './module.js' // 必须是相对地址，否则报错 Uncaught TypeError: Failed to resolve module specifier "moduleA.js". Relative references must start with either "/", "./", or "../".
// import add from './module' // 后缀必须带上，否则找不到该资源
import add from './module.js'
console.log(add(1, 2))
```

index.html

```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- 方法 1 ： 引入module.js，然后在script标签里面调用 -->
  <script type="module">
    import add from './module.js';
    console.log(add(1, 2))
  </script>
 
 <!-- 方法 2 ： 直接引入index.js，使用src引入 -->
  <script type="module" src="./index.js"></script>
</body>
</html>
```

注意 index.html 必须通过本地服务的方式访问，不能通过 “file:///” 的形式访问