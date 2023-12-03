刚开始可能觉得 TypeScritp 会很麻烦，会多写很多代码，这只是因为对TypeScript 掌握的还不够，在我看来掌握 TypeScript 至少具有以下好处：

- 减少、避免错误的发生
- 使 IDE 具有代码提示功能
- 各大框架都基本集成了 Typescript，不会 TypeScript，看框架源码会很吃力
- 个人进阶必会技能，面试加分

TypeScript 只是在编译阶段对源码进行检测、编译，编译生成的代码依旧是浏览器能够“读懂”的，不会包含 TypeScript 中的特性语法，如源码 `let name: string = 'Jack'`，输出`let name = 'Jack'`

**从头开始创建一个 TypeScript 项目**

1. 新建文件夹test，进入其中，执行`npm init -y`
2. 执行`tsc --init`，在项目根目录下自动生成配置文件 tsconfig.json:

  ```json
  {
    "compilerOptions": {
      /* Visit https://aka.ms/tsconfig.json to read more about this file */

      /* Basic Options */
      // "incremental": true,                         /* Enable incremental compilation */
      "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
      "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
      // "lib": [],                                   /* Specify library files to be included in the compilation. */
      // "allowJs": true,                             /* Allow javascript files to be compiled. */
      // "checkJs": true,                             /* Report errors in .js files. */
      // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
      // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
      // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
      // "sourceMap": true,                           /* Generates corresponding '.map' file. */
      // "outFile": "./",                             /* Concatenate and emit output to single file. */
      // "outDir": "./",                              /* Redirect output structure to the directory. */
      // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      // "composite": true,                           /* Enable project compilation */
      // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
      // "removeComments": true,                      /* Do not emit comments to output. */
      // "noEmit": true,                              /* Do not emit outputs. */
      // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
      // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
      // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

      /* Strict Type-Checking Options */
      "strict": true,                                 /* Enable all strict type-checking options. */
      // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
      // "strictNullChecks": true,                    /* Enable strict null checks. */
      // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
      // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
      // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
      // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
      // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

      /* Additional Checks */
      // "noUnusedLocals": true,                      /* Report errors on unused locals. */
      // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
      // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
      // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
      // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
      // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

      /* Module Resolution Options */
      // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
      // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
      // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
      // "typeRoots": [],                             /* List of folders to include type definitions from. */
      // "types": [],                                 /* Type declaration files to be included in compilation. */
      // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
      "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
      // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

      /* Source Map Options */
      // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
      // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
      // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

      /* Experimental Options */
      // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
      // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

      /* Advanced Options */
      "skipLibCheck": true,                           /* Skip type checking of declaration files. */
      "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
    }
  }
  ```

  生成的配置文件中有一些默认的配置和一些说明描述，修改配置如下：

  ```json
  {
    "compilerOptions": {
      "target": "es5",   /* 编译之后生成的js文件需要遵循的标准 */
      "noImplicitAny": false, /* 为false时，如果编译器无法根据变量的使用来判断类型时，将用any类型代替。为true时，将进行强类型检查，无法推断类型时，提示错误 */
      "module": "commonjs", /* 遵循的JavaScript模块规范 */
      "removeComments": true, /* 编译生成的JavaScript文件是否移除注释 */
      "sourceMap": false, /* 编译时是否生成对应的source map文件。这个文件主要用于前端调试。当前端js文件被压缩引用后，出错时可借助同名的source map文件查找源文件中错误位置 */
      "outDir": "js" /* 编译输出JavaScript文件存放的文件夹 */
    },
    "include":["ts"], /* 编译时需要包含的文件夹 */
    "exclude": ["js"] /* 编译时需要剔除的文件夹 */
  }
  ```

当 `target` 设置为 `"es3"` 或 `es5`，`module` 默认使用 `"commonjs"`，当 `target` 为其他值时，`module` 默认`"es2015"`

`module` 选项用来手动指定生成哪种模块化系统的代码，可设置的值有 `"none"`、`"commonjs"`、`"amd"`、`"udm"`、`"es2015"`（写成 `"es6"`、`"ES6"`、`"ES2015"`也可以）、`"es2020"`、`"ESNext"`

3. 新增目录 ts、js 及源码文件 demo.ts、app.ts，

  ![01](http://image.newarea.site/20230713/01.png)

  - /ts：TypeScript源码文件存放的文件夹

  - /js：编译之后生成的JavaScript文件存放的文件夹

  demo.ts

  ```ts
  class Demo {
    a: number;
    b: number;

    constructor(a: number, b: number) {
      this.a = a
      this.b = b
    }

    sum(): number {
      return this.a + this.b
    }
  }

  export { Demo }
  ```

  app.ts

  ```ts
  import { Demo } from './models/demo'

  const demo = new Demo(1, 2)
  console.log(demo.sum())
  ```

4. 在项目根目录下执行`tsc`即可，将使用根目录下的配置文件进行编译，会在文件夹 js 下面生成相应的文件夹及文件，如下：

  ![02](http://image.newarea.site/20230713/02.png)

  demo.js

  ```js
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Demo = void 0;
  var Demo = (function () {
      function Demo(a, b) {
          this.a = a;
          this.b = b;
      }
      Demo.prototype.sum = function () {
          return this.a + this.b;
      };
      return Demo;
  }());
  exports.Demo = Demo;
  ```

  app.js

  ```js
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var demo_1 = require("./models/demo");
  var demo = new demo_1.Demo(1, 2);
  console.log(demo.sum());
  ```

上述第4步，如果在根目录下执行的命令是`tsc ts/app.ts`，编译后的文件将放在相应源文件同目录下，js 文件夹下将不会有编译产物，如下，也就是说此时并没有使用配置文件

![03](http://image.newarea.site/20230713/03.png)

