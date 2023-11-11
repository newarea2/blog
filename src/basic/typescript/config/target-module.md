# target、module

## [target](https://www.typescriptlang.org/tsconfig#target)

设置目标语言的版本（即编译后生成哪个版本的 JS），可设置为 `es3`、`es5` 和 `es6`/`es2015`、`es2016`、`es2017`、`es2018`、`es2019`、`es2020`、`es2021`，默认为 `es3`。

如下面代码根据不同的 `target` 编译后产生不同的产物：

```ts
let add = (x: number, y: number): number => {
  return x + y
}
```

`target: 'es3'`

```js
"use strict";
var add = function (x, y) {
    return x + y;
};
```

`target: 'esnext'`

```js
"use strict";
let add = (x, y) => {
    return x + y;
};
```

## [module](https://www.typescriptlang.org/tsconfig#module)

设置生成代码的模块标准，可以设置为 `none`、`commonjs`、`amd`、`umd`、`es6`/`es2015` 等等

当 `target` 设置为 `es3`、`es5`，默认值 `commonjs`；其他情况，默认值为 `es6`

如，TS 源码：

```ts
import { add } from './util'

console.log(add(1, 2))
```

`module: 'es2015'`

```js
import { add } from './util';
console.log(add(1, 2));
```

`module: 'commonjs'`

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
console.log((0, util_1.add)(1, 2));
```

`module: 'amd'`

```js
define(["require", "exports", "./util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, util_1.add)(1, 2));
});
```

`module: 'umd'`

```js
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const util_1 = require("./util");
    console.log((0, util_1.add)(1, 2));
});
```