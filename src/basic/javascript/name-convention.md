# JavaScript 命名规范

## 1 变量

驼峰式命名，前缀为形容词

```js
// 好的命名
let maxCount = 10
let tableTitle = '学生表'

// 不好的命名
let setCount = 10
let getTitle = '学生表'
```

## 2 常量

使用**大写字母**和**下划线**来组合命名，下划线用来分割单词

```js
// 好的命名
const MAX_COUNT = 10

// 不好的命名
let maxCount = 10
```

## 3 函数、方法

驼峰式命名，前缀为动词

常用前缀及含义

前缀 | 含义
:-- | :--
can | 判断是否可执行某个动作
has | 判断是否含有某个值
is | 判断是否为某个值
get | 获取某个值
set | 设置某个值
load | 加载某些数据
del、delete | 删除
rm、remove | 移除
add | 增加
insert | 插入
update | 修改
select | 选择
query | 获取

```js
// 好的命名
function getAge() {}

// 不好的命名
function age() {}
```

## 4 类、构造函数

帕斯卡式命名

```js
// 好的命名
class Persion {}

// 不好的命名
class persion {}
```

## 5 类的成员

类的成员包括： 
- 公共属性和方法： 跟变量和函数命名一样。 
- 私有属性和方法：前缀为下划线_, 后面跟公共属性和方法一样的命名方式。

```js
class Person {
  constructor() { }

  // 私有方法
  _name() {}
  // 公共方法
  getName() {
    return this._name;
  }
  // 公共方法
  setName(name) {
    this._name = name;
  }
}
```

## 6 注释

单行注释

```js
// 设置标题
setTitle()
```

多行注释

```js
/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */
setTitle()
```

函数、方法注释

```js
/**
 * 函数说明
 * @关键字
 **/
```