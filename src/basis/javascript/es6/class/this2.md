# 类方法中的 this 指向问题

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(this.name)
  }
}
const p = new Person('Callback', 27)
p.speak(); // Callback

const f = p.speak
var name = 'Jack'
f() // Cannot read properties of undefined (reading 'name')
```

通常我们会认为方法内部的 `this` 指向调用这个方法的对象，通过 `Person` 的实例 `p` 调用 `speak()` 方法，其中的 `this` 就指向 p。后面将 `speak` 赋值给常量 `f`，按理说 `f()` 方法被调用时应该输出 `window` 对象的信息，但这里却是 `undefined`。

这是因为根据 JavaScript 的语法规则，**所有在类中定义的方法都默认开启局部严格模式**。**在严格模式下，函数中的 `this` 等于 `undefined`**。如：

```js
function fn() {
  console.log(this)
}
fn() // 输出 window 对象信息

function fn1() {
  'use strict'
  console.log(this)
}
fn1() // 输出 undefined
```

参考:

[JavaScript严格模式下关于this的几种指向详解](JavaScript严格模式下关于this的几种指向详解)
