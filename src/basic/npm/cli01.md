# 你还在重复的搬砖！？写个 cli 工具解放你的双手吧 - 动态生成代码模板

why
---

在我平时的授课工作里面，需要频繁的创建 koa 项目来教学演示，demo 项目之间还需要添加不同的中间件

比如：

- 项目 a 需要 koa-router、koa-static ，
- 项目 b 需要 koa-router、koa-body、koa-views

那每次都需要去敲重复的代码，这不符合我的风格呀，作为务实的程序员一定要具备自动化思维。

分析下我们的问题场景，其实每次都是重复的几个步骤，而计算机对于重复的劳动可是最擅长的。

所以必须敲个工具来解决创建 koa 的问题

> 思考：在你平时的工作里面有没有这种重复劳动的问题场景呢？

> 本教程配备了完整的**视频教程**，可点击观看:[编写基于 nodejs 的 cli 工具 - 动态生成代码模板](https://www.bilibili.com/video/BV1jK4y197Ne)

what
----

那我们的这个工具应该做成什么样子呢？

想一想我们平时用到的 vue-cli 工具，是不是和我们这里的问题场景很类似呢？

创建 vue 项目是不是一个重复的问题，它和我们创建 koa 项目本质上是一样的问题

所以我们的工具就可以设计成和 vue-cli 工具那样，通过在终端执行，可以和用户做交互，然后基于用户的选择来自动生成对应的 koa 项目模板

![2021-06-25 11_22_19.gif](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_014.gif)

> 在我们去使用社区里面优秀工具的时候，除了使用层面，还应该去吸收它解决问题的思想

how
---

我们已经定义完问题了，也明确了问题用什么形式来解决了，接下来就是撸起袖子开干啦

下面我将会以问题的形式来驱动出整个 cli 工具的实现

> 编程就是一个解决问题的过程

### 主流程

首先我们需要先明确出整个程序的主流程

其实很简单，就是把我们之前手动创建 koa 的过程给自动化

我们先看看手动是需要几个步骤

1.  先创建一个项目（也就是创建文件夹）
2.  在创建 index.js 程序入口文件
    -   编写对应的 koa 代码
3.  接着创建 package.json (也有可能是用 npm init 来生成的)
    -   编写对应的 package.json 的配置
4.  安装依赖

那怎么自动化呢？其实就是把上面的过程翻译成代码呗

```js
// 1. 创建项目文件夹
fs.mkdirSync(getRootPath());
// 2. 创建 index.js
fs.writeFileSync(`${getRootPath()}/index.js`, "index");
// 3. 创建 package.json
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  "package"
);
// 4. 安装依赖
TODO
```

这里直接使用 fs 创建对应的文件夹、index.js、package.json 文件就可以了

最后一步给了一个 TODO, 是因为我们的 package.json 的内容还没有定义好，所以也安装不了依赖，等到我们解决了 package.json 内容的问题后，在来处理这个点。

好，到目前为止，我们程序的主流程就已经定义好了

接下来就是一个逐步完善的过程了

### 如何生成代码模板

index.js 和 package.json 其实都是代码模板，我们只需要基于动态的数据生成就可以了

而在模板技术选型上，我选择了 **[ejs](https://www.npmjs.com/package/ejs)** ，当然你也可以使用你熟悉的或者你喜欢的库来生成

createIndexTemplate.js 模块的职责就是基于 template/index.ejs 来生成 index.js 的代码

```js
// template/index.ejs
const Koa = require("koa");

<% if (middleware.router) { %>
const Router = require("koa-router");
  <% } %>

......

app.listen(<%= port %>, () => {
  console.log("open server localhost:<%= port %>");
});
```

```js
// createIndexTemplate.js
import ejs from "ejs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const templateCode = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs")
  );
  return ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    port: config.port,
  });
};
```

而这里的 config 是需要基于用户来生成的

并且这里简单的设计了一下数据结构，比如里面必须要有个 middleware 对象来表示用户需要的 koa 中间件，比如还有 port 来表示用户希望的端口号

而 packege.json 代码生成的过程和 index.js 很类似，还是基于 config 来决定是否安装其对应的依赖

大家可以参考 github 中 [template/package.ejs](https://github.com/cuixiaorui/teach-koa-setup/blob/main/bin/template/package.ejs) 和 [createPackageTemplate.js](https://github.com/cuixiaorui/teach-koa-setup/blob/main/bin/createPackageTemplate.js) 的逻辑实现

> 这里的 __dirname 的获取是涉及到了在 nodejs 中使用 esm 模块的知识点，具体可参考[如何在 nodejs 中使用 esm 模块规范](https://www.bilibili.com/video/BV1WK4y1A7EE)

### 如何执行安装命令

到这里，我们的 package.json 就已经处理完成了，那是时候执行安装命令了

想一想平时我们是如何执行安装命令的？是不是执行 npm install 或者 yarn 呀

我们这里也一样，只需要执行命令即可，那执行命令可以用 nodejs 的内置模块 [child_process](http://nodejs.cn/api/child_process.html)

而我更喜欢用社区里的 [execa](https://www.npmjs.com/package/execa)，原因就是因为它的 api 更友好，好了，上代码

```js
// index.js
......
// 4. 安装依赖
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});
```

看到这里肯定有同学会问，这里的 stdio:[2,2,2] 是什么鬼，其实 2 代表的是 'inherit' ，他可以控制通过相应的标准输入输出流传入/传出父进程。

> 那为什么我们需要设置它呢？ 这个我在视频里面有详细的演示，感兴趣的话可以好好看看视频

### 如何实现命令行的用户交互

到目前为止，我们的程序的主流程总算是搞定了，接着我们只需要获取用户的输入，然后基于用户的输入来决定代码的行为就可以了

那么我们怎么实现像 vue-cli 那样的用户交互形式呢？

答案就是 [inquirer](https://www.npmjs.com/package/inquirer) 库，通过这个库就可以实现 vue-cli 那样的效果了，而其实 vue-cli 就是用得 inquirer

```js
// questions/index.js

import inquirer from "inquirer";
import packageName from "./packageName.js";
import port from "./port.js";
import middleware from "./middleware.js";

export default () => {
  return inquirer.prompt([
    /* Pass your questions in here */
    packageName(),
    port(),
    middleware(),
  ]);
};
```

```js
// .packageName.js
export default () => {
  return {
    type: "input",
    name: "packageName",
    message: "set package name",
    validate(val) {
      if (val) return true;
      return "Please enter package name";
    },
  };
};
```

```js
// ./port.js
export default () => {
  return {
    type: "input",
    name: "port",
    message: "set server port number",
    default() {
      return 8000;
    },
  };
};

```

```js
// ./middleware.js
export default () => {
  return {
    type: "checkbox",
    message: "select middleware",
    name: "middleware",
    choices: [
      {
        name: "koaRouter",
      },
      {
        name: "koaStatic",
      },
      {
        name: "koaViews",
      },
      {
        name: "koaBody",
      },
    ],
  };
};
```

packageName.js、port.js、middleware.js 其实就是对 inquirer 定义问题配置的封装，在实现代码的时候，不光要实现功能，还需要考虑到维护性以及代码的可读性，遵守单一职责，时时刻刻对代码进行重构

最后我们在 index.js 进行对 questions/index.js 的调用

```js
import questions from "./questions/index.js";
import { createConfig } from "./config.js";

const answer = await questions();
const config = createConfig(answer);
```

这里的 config 就是基于用户的选项来生成的配置，不过这里还会涉及到另外一个组织代码的方式，就是需要把程序的主逻辑和程序的输入和输出分离。

因为输入和输出总是会容易变化的，而在我们的这个小程序里面我们把主逻辑和输出绑定在了一起（这里的输出就是 fs 模块，创建文件夹和文件），因为基于实际的情况的话我们的输出是不容易变化的

但是输出就不一样了，有可能是基于 inquirer.js ，也有可能改天就换个库，或者基于 GUI 的方式来调用，所以我们这里把输入抽离出来，主逻辑只依赖 config ，而我们需要对输入得到的 answer 对象做适配处理，这个其实就是适配层

```js
export function createConfig(answer) {
  // 适配器
  const haveMiddleware = (name) => {
    return answer.middleware.indexOf(name) !== -1;
  };
  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleware("koaStatic"),
      views: haveMiddleware("koaViews"),
      router: haveMiddleware("koaRouter"),
      body: haveMiddleware("koaBody"),
    },
  };

  return inputConfig;
}
```

最后得到主程序依赖的数据结构，这个程序的逻辑基本就已经搞定了

### 如何通过 cli 的方式调用

那我们想让用户通过 cli 的方式调用的话，还应该做什么事呢？

还需要处理2个事

1.  在 package.json 里面配置 bin 字段，然后创建 bin 文件夹，把之前所有的代码都放到 bin 文件夹内
2.  在 bin/index.js 文件夹的头部写上以下注释

```js
// bin/index.js
#!/usr/bin/env node
```

这样的话，在执行这个脚本的时候，操作系统就会调用 node 来执行了

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_015.png)

> 具体的代码目录结构可参考[代码库](https://github.com/cuixiaorui/teach-koa-setup)

### 如何调试

我们在本地调用 node bin/index.js 执行起来肯定是没有任何问题了，但是我们这个程序到时候是需要让用户通过 cli 直接执行的，那我们怎么可以模拟一下测试一下呢？

我们只需要在当前的这个项目路径下，执行 npm link 即可

npm 会帮助我们把这个项目链接到 root 下，可以执行 npm root -g 来查看

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_016.png)

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_017.png)

> teach-setup-koa 通过软连接的方式指向了你的代码库

然后我们就可以像调用全局的 cli 命令一样来调用自己的这个库了

比如说，你在 package.json 里面 name 是 teach-setup-koa , 那么在你执行完 npm link 后，就可以在终端执行 teach-setup-koa 命令了

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_018.png)

一般这一步骤会帮助我们看看有没有路径引入的错误

### 如何分享到社区内给别人也使用

辛辛苦苦做完的程序，光自己用肯定不行，必须 show 出来，让同事让其他的小伙伴也都用上，那怎么办呢？

我们只要把程序发布到 npm 上就可以啦。

而发布到 npm 也很简单，只需要执行:

```sh
// 先登录
npm login

// 在发布
npm publish
```

> 如果你只是为了测试，希望你发布完可以把包删除掉 npm unpublish --force

### 如何美化输出

让程序跑起来是第一步，第二步的时候就需要对其做点小优化，比如可以在 run 到每一步骤的时候给予用户提示

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_019.png)

怎么可以做到呢？ 可以使用 [chalk](https://www.npmjs.com/package/chalk) 这个库，来给我们的 console.log 加点颜色

```js
import chalk from 'chalk'

// // 1. 创建项目文件夹
console.log(chalk.blue(`创建项目文件夹:${config.packageName}`))

// 2. 创建 index.js
console.log(chalk.blue(`创建 index.js`))
// 3. 创建 package.json
console.log(chalk.blue(`创建 package.json`))

// 4. 安装依赖
console.log(chalk.blue(`安装依赖`))
```

### 如何格式化代码

如果你现在打开我们生成的代码的话，你会发现 index.js 和 package.json 代码格式都是乱的，比如含有很多的空格

![image.png](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/pic_020.png)

大家可以想想平时是用得什么来格式化代码的，是不是用过 prettier

而 prettier 是有 api 的调用方式的，所以就可以通过 prettier 来格式化代码

```js
// createPackageTempalte.js
import prettier from "prettier"
......
return prettier.format(code, { parser: "json" });
```

最后调用 prettier.format 来格式化代码，这样你在去看看生成的 package.json 你会发现空格已经没有啦。

> index.js 的代码格式也同样使用 prettier 来解决

### 如何测试

一个合格的开源项目其实是必须要有测试的，这样用户使用起来到会放心，而我们今天设计的程序是没有测试的，至于为什么，其实是因为我偷懒了(：逃

测试是一个比较大的话题，这个有机会在和大家系统的分享

> 可以关注我的掘金号和[b站](https://space.bilibili.com/175301983)哦

总结
--

基于工作中实际的问题场景出发，定制解决方案，然后一步一步实现，其实这里想分享给大家的不只是程序实现的过程，还有这种自动化思维，如何利用程序来帮助我们提高效率。希望可以帮助到大家

对于程序来讲，最重要的是程序实现背后的思考过程，而因为受限于文字的表述方式，一些细节不能很好的表达出来，比如说重构代码、编程小技巧等，所以我还准备了视频版本，大家可以基于[视频](https://www.bilibili.com/video/BV1jK4y197Ne)来看看一个程序是如何从零到有的。

最后祝大家工作多多摸鱼，拒绝 996

资料
--

- 这个 cli 工具的代码全部开源来供大家学习: [teach-setup-koa](https://github.com/cuixiaorui/teach-koa-setup)
- 还提供了[视频版本](https://www.bilibili.com/video/BV1jK4y197Ne),录制了整个编写的过程

作者：阿崔cxr
链接：https://juejin.cn/post/6977567286013984776\
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
