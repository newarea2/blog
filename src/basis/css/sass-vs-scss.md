# Sass 和 SCSS 有什么区别

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名

2. 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

例子：

Sass 语法：

```Sass
$font-stack: Helvetica, sans-serif  //定义变量
$primary-color: #333 //定义变量

body
  font: 100% $font-stack
  color: $primary-color
```

Scss 语法：

```Scss
$font-stark Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## sass/scss 和 less 区别

[](https://www.cnblogs.com/wangpenghui522/p/5467560.html)

Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。

Less也是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量，继承，运算， 函数.  Less 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可在服务端运行 (借助 Node.js)。
