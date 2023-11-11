# 工具类型

TS在全局内置了很多`Utility Types`，来对已有类型做一些处理，然后获得我们想要的新类型:

`type --> [type utils] --> newType`

1 `Partial<Type>`
-------------

作用：它会将`Type`内所有属性置为可选，返回一个给定类型`Type`的子集。

示例：

```js
interface Todo {
  title: string;
  description: string;
}

// 场景：只想更新toTo部分属性，Partial的使用就比较优雅了
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

我们看看`Partial`背后是如何实现的：

```js
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

上面定义涉及的知识点：

-   泛型`<T>`

-   `keyof`运算符：获取T的所有键

-   `[P in keyof T]`：遍历T的所有key，映射类型、索引签名

-   `?`：可选

2 `Required<Type>`
--------------

作用：`Required`与上面的`Partial`相反，构建返回一个`Type`的所有属性为必选的新类型。

示例：

```js
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 }; // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

我们看看`Required`背后的实现：

```js
/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

上面定义涉及的知识点：

在TS2.8版本改善了对映射类型修饰符的支持。

在TS2.8版本之前，支持对映射类型的属性添加`readonly`、`?`的修饰符，但是并没有提供移除修饰符的能力。默认它的修饰符是跟映射类型保持一致的，有兴趣的可以看这个PR以及它fix的issue。那现在映射类型它支持通过`+`或者`-`来添加or移除`readonly`或者`?`修饰符。

我们看一个示例：

```js
type A = { readonly a? : number, b: string };
type MockRequired<T> = {
    -readonly [P in keyof T]-?: T[P] // 这里可以不需要-?
};

const test: MockRequired<A> = { //  我希望a是必须的
    a: 10,
    b: 'b'
};

test.a = 20; // 我希望可以修改a
```

到这里我们就理解`-?`的含义了。

3 `Readonly<Type>`
--------------

作用：将`Type`所有属性置为只读。示例：

```js
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello"; // Cannot assign to 'title' because it is a read-only property.
```

我们看看`Readonly`背后的实现：

```js
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

这里有上面的知识铺垫就比较好理解了，只需要知道映射类型支持修饰符`readonly`、`?`。

另外这里补充下`readonly`的含义跟JS的`const`不能修改的含义一样，指的是不能重写(重写赋值)。

这个方法对于`Object.freeze`的定义非常适用：

```js
function freeze<Type>(obj: Type): Readonly<Type>;
```

4 `Record<Keys,Type>`
-----------------

作用：构建一个对象类型，该对象类型的`key`来自`Keys`，并且其`key`对应的`value`是`Type`。所以这个方法非常适用于将一个类型的属性映射到另外一个类型。

示例：

```js
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris; // (property) boris: CatInfo
```

我们看看`Record`背后定义。

```js
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

上面涉及的新的知识点：`keyof any`。

我们先看一段代码：

```js
type A = keyof any;

type EqualA = string | number | symbol; // A其实等价于EqualA

type Is = A extends EqualA ? true : false;

const is: Is = false; // Type 'false' is not assignable to type 'true'.
```

因此如果我们这样使用就会提示报错了：

```js
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred" | false; // false导致

const cats: Record<CatName, CatInfo> = { // Error: Type 'string | boolean' does not satisfy the constraint 'string | number | symbol'. Type 'boolean' is not assignable to type 'string | number | symbol'.
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

5 `Pick<Type, Keys>`
----------------

`Keys`的类型有要求：`string literal or union of string literals`。

作用：构建返回一个根据`Keys`从类型`Type`拣选所需的属性的新类型。

代码示例：

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = { // 只需要Keys: title and completed
  title: "Clean room",
  completed: false,
};

todo;
```

同样我们看看其背后的实现：这里就没有新的知识点了。

```js
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

6 `Omit<Type, Keys>`
----------------

这里就不重复介绍，可以看我之前文章：TypeScript学习之Omit。

7 `Exclude<Type, ExcludedUnion>`
----------------------------

作用：从`Type`中排除可以分配给`ExcludedUnion`的类型。

示例：

```js
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number
```

我们看看`Exclude`背后的实现：

```js
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
```

涉及知识点：

`T extends U ? never : T`这里的`extends`可与`class的extends`不是一回事，这里指的是条件类型。这里不做过多的扩展，重点通过一个概念**分布式条件类型**来理解上面`Exclude`的写法。

```js
type A = 'a' | 'b' | 'c';
type B = 'a';

type C = Exclude<A, B>; // 'b' | 'c';

// A extends B ? never : A 等价于 ('a' | 'b' | 'c') extends B ? never : ('a' | 'b' | 'c') 等价于如下
type D = ('a' extends B ? never : 'a') | ('b' extends B ? never : 'b') | ('c' extends B ? never : 'c'); // 'b' | 'c';
```

8 `Extract<Type, Union>`
--------------------

作用：从`Type`中检出可以分配给`Union`的类型。示例：

```js
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>; // type T1 = () => void
```

我们看看`Extract`背后的定义：

```js
/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;
```

所有你阔以看到`Extract`就是跟`Exclude`取反的区别。

9 `NonNullable<Type>`
-----------------

作用：排除类型`Type`中的`null`、`undefined`。

示例：

```js
type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;// type T1 = string[]
```

看看`NonNullable`的定义：

```js
/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;
```

我们可以看到其实还是上面分布式条件类型`extends`的运用。

10 `Parameters<Type>`
----------------

作用：基于类型`Type`的参数构建一个新的元组类型。示例：

```js
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>; // type T0 = []
type T1 = Parameters<(s: string) => void>; // type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>; // type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;

// type T3 = [arg: {
//     a: number;
//     b: string;
// }]
type T4 = Parameters<any>; // type T4 = unknown[]
type T5 = Parameters<never>; // type T5 = never
type T6 = Parameters<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'. type T6 = never
type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.

// type T7 = never
```

我们再看看`Parameters`背后实现。

```js
/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

涉及知识点：

`T extends (...args: any) => any`定义了`Parameters`的泛型约束，兼容目前所有函数的类型定义。`infer P`：用于表示待推断的函数参数。

`T extends (...args: infer P) => any ? P : never`：表示如果 `T` 能赋值给 `(...args: infer P) => any`，则结果是 `(...args: infer P) => any`类型中的参数为 `P`，否则返回为 `never`。

关于`info`更多学习推荐深入理解typescript-info。

11 `ConstructorParameters<Type>`
---------------------------

作用：从构造函数类型 `Type` 的参数类型构造元组或数组类型（如果 `Type` 不是函数，则为 `never`）。示例：

```js
type T0 = ConstructorParameters<ErrorConstructor>; // type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>; // type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>; // type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>; // type T3 = unknown[]
```

看看其`ConstructorParameters`定义：

```js
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

`ConstructorParameters`跟`Parameters`的定义几乎一样，区别在于前者是表达构造函数签名的定义。

常见的构造函数类型签名有：基于`Type`或者`Interface`。

```js
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

12 `ReturnType<Type>`
----------------

作用：基于函数`Type`的返回值类型创建一个新类型。

示例：

```js
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>; // type T0 = string
type T4 = ReturnType<typeof f1>;

// type T4 = {
//     a: number;
//     b: string;
// }
```

源码定义：

```js
/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

我们可以看到其原理跟前几个差不多，区别在于`infer`推断的位置不同。

13 `InstanceType<Type>`
------------------

作用：基于函数类型`Type`的`constructor`的类型构造一个新类型。示例：

```js
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // type T0 = C

type T1 = InstanceType<any>; // type T1 = any
```

源码定义：

```js
/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
```

通过对比发现：`InstanceType` 与 `ReturnType` 的区别是它多了函数构造签名定义，与 `ConstructorParameters` 的区别是它推断的不是参数类型，而是返回值类型。

14 `ThisParameterType<Type>`
-----------------------

作用：获取函数类型`Type`中的`this`类型。如果没有返回`unknown`。

```js
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) { // n: number
  return toHex.apply(n);
}
```

源码定义：

```js
/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
```

如果想了解如何在函数中定义`this`，建议还是看官网。

15 `OmitThisParameter<Type>`
-----------------------

作用：移除函数类型`Type`中参数的`this`。

示例：

```js
function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5); // const fiveToHex: () => string

console.log(fiveToHex());
```

源码定义：

```js
/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
```

`unknown extends ThisParameterType<T>`：如果`T`函数参数中没有`this`，则直接返回`T`。否则，`T extends (...args: infer A) => infer R ? (...args: A) => R : T;`，如果`T`是后者的子类型，那么返回新的函数，函数参数为推导的`infer A`，返回值为`infer R`。否则返回`T`。