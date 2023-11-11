# 各种符号的作用

## 1 空值合并运算符 `??`

表示只有左侧的值为 `null` 或 `undefined` 的时候才使用右侧的值。和 `||` 作用类似，不同之处在于，`||` 表示左侧的值只要转为布尔值为 false 时，就取后面，否则取前面。

由此可以发现，双问号 `??` 更加适合在不知道变量是否定义时，或者是否赋值时的场景来使用。

```js
const a = false
console.log(a ?? 'hello') // false
```

```js
const a = 0
console.log(a ?? 'hello') // 0
```

```js
const a = undefined
console.log(a ?? 'hello') // hello
```

```js
const a = null
console.log(a ?? 'hello') // hello
```

## 2 可选链操作符 `?.`

功能类似于 `·` 链式操作符，不同之处在于，在引用为空（`null` 或者 `undefined`）的情况下不会引起错误。

```js
var info = {name: 'Jack'}

// 下面写法会报错
// console.log(info.parent.name)

console.log(info.parent?.name) // undefined
// 等价于
console.log(info.parent ? info.parent.name : undefined)  // undefined
```

## 3 （TypeScript）非空类型断言 `!`

用于断言操作对象是非 null 和非 undefined 类型。

```ts
interface Params {
  x?: number
}

let y: number

function foo(params: Params) {
  // 因为 x 类型是 number | undefined，而 y 类型是 number，所以下面语句，TS 会编译报错
  // y = params.x

  // 可以改成：
  // y = params.x as number

  // 或
  y = params.x!
  return y
}
```

```ts
function foo(message?:string) {
  // 报错 TS2532: Object is possibly 'undefined'.
  // console.log(message.length)

  console.log(message!.length)
}

foo('hello')
```