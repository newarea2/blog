# `import/require` 仅仅是导入类型

以下导入语法：

```ts
import foo = require('foo');
```

它实际上只做了两件事：

-   导入 foo 模块的所有类型信息；
-   确定 foo 模块运行时的依赖关系。

你可以选择仅加载类型信息，而没有运行时的依赖关系。

如果你没有把导入的名称当做变量声明空间来用，在编译成 JavaScript 时，导入的模块将会被完全移除。这最好用例子来解释，下面我们将会给出一些示例。

## 例子 1

```ts
import foo = require('foo');
```

将会编译成 JavaScript：

这是正确的，一个没有被使用的空文件。

## 例子 2

```ts
import foo = require('foo');
var bar: foo;
```

将会被编译成：

```js
let bar;
```

这是因为 foo （或者其他任何属性如：`foo.bas`）没有被当做一个变量使用。

## 例子 3

```ts
import foo = require('foo');
const bar = foo;
```

将会被编译成（假设是 commonjs）：

```js
const foo = require('foo');
const bar = foo;
```

这是因为 `foo` 被当做变量使用了。