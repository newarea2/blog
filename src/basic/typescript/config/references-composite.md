# references

[项目引用](https://www.tslang.cn/docs/handbook/project-references.html)

[TypeScript 编译性能优化：Project Reference](https://www.51cto.com/article/715780.html)

TypeScript 3.0 时实现了 Project Reference 来优化性能。如果项目下有一些相对独立的模块，别的模块的变动不影响它，但是它却要跟着重新编译一次，这时就可以用 Project Reference 来优化了。

TypeScript 给 JavaScript 添加了一套类型系统，可以在编译期间检查出类型错误，这增加了代码的健壮性，但也多了一个编译的过程。

ts 编译速度与项目规模有关，如果项目比较大，代码很多，那就需要编译很长一段时间。

有没有什么办法可以提升 tsc 编译的性能呢？

还真有，TypeScript 3.0 的时候实现了 Project Reference 的特性，就是用于优化编译和类型检查的性能的。

那 Project Reference 是干什么的呢？

### Project Reference

想象这样一个场景。项目目录下有两个相对独立的模块 aaa 和 bbb。

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/12.png "图片")

它们是用同一个 tsconfig.json 来配置编译方式的：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/13.png "图片")

执行 tsc 就会编译所有 include 的文件到 dist 目录下：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/14.png "图片")

假设 aaa 和 bbb 都很大，编译要很久，但是两者的关联还不是特别大。

aaa 模块下的变动基本和 bbb 模块下的没啥关系，但是 aaa 变了，bbb 也要重新编译一遍，bbb 变了 aaa 也要重新编译一遍，这就很没必要。

有的同学说，那在 aaa 和 bbb 下分别放一个 tsconfig.json，各自编译各自的不就行了？

这样是可以，但是这样就是多次编译了，比较麻烦。

能不能还是一次编译，但是对一些相对独立的模块做下缓存，不要跟随别的模块一起编译呢？

可以的，这就是 Project Reference 做的事情了。

在 aaa 和 bbb 下各自创建一个 tsconfig.json，放各自的编译配置。注意这里要加一个 composite: true，这是 Project Reference 需要的：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/15.png "图片")

然后在根目录的 tsconfig.json 里加上一个 references 的配置，引入 aaa 和 bbb：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/16.png "图片")

这样再执行 tsc --build 进行编译，你会发现编译结果多了 .d.ts 的声明，还多了 tsconfig.tsbuildinfo 的文件：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/17.png "图片")

打开 tsconfig.tsbuildinfo 看一下，会发现它记录了编译了哪些文件，还记录了这些文件的 hash 值：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/18.png "图片")

看到这里，你是不是就知道为啥它能实现缓存了？

没错，就是对比文件的 hash，当编译到这个 project 的时候，会对比下 hash 有没有变化，变了才去编译。没变的就直接跳过了。

而且，别的地方可能用到这个 project 的类型，所以需要生成 d.ts 声明文件，这就是为啥我们没有指定 declaration: true 的配置，但是编译产物里还是有 d.ts。其实这是 composite 选项做的，它设置了 Project Reference 需要的一些编译选项：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/19.png "图片")

现在当你修改了 aaa 下某个模块的代码，重新编译的时候就不会编译 bbb 了，只会编译 aaa 下的那个模块。

这就是 Project Reference 的作用。

当然，这种编译模式和常规的编译模式不同，所以不是直接用 tsc 来编译，而是用 tsc --build 或者 tsc -b。

此外，Project Reference 还支持通过 prepend 指定编译顺序，比如给 bbb 添加 prepend: true，那么就会先编译 bbb，再编译当前项目，然后编译 aaa：

![图片](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/20.png "图片")

其实很容易想到，monorepo 里就可以用 Project Reference 来提升 tsc 的编译性能。因为 monorepo 下的多个 project 相互之间都比较独立，一个模块的改动一般不会影响另一个模块，所以编译的时候也应该各自做缓存。

### 总结

TypeScript 3.0 时实现了 Project Reference 来优化性能。

如果项目下有一些相对独立的模块，别的模块的变动不影响它，但是它却要跟着重新编译一次，这时就可以用 Project Reference 来优化了。

在独立的模块下添加 tsconfig.json，加上 composite 的编译选项，在入口的 tsconfig.json 里配置 references 引用这些独立的模块。然后执行 tsc --build 或者 tsc -b 来编译。

这时候就实现了编译和类型检查的性能优化。

原理是编译时会生成 tsconfig.tsbuildinfo 的文件，记录着编译的文件和它们的 hash，当再次编译的时候，如果文件 hash 没变，那就直接跳过，从而提升了编译速度。

这是 TypeScript 提供的编译性能优化机制，当项目比较大，tsc 执行的速度比较慢的时候，不妨尝试一下。
