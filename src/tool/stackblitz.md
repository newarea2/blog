# 在线编辑器 StackBlitz

## 1 哪些时候会用到

### 快速编写 demo

为了制作脑海中闪现的一个 idea 想法，之前做法是在本地创建一个 demo 项目，编辑代码、运行、查看效果。。。使用 StackBlitz，可以直接 fork 模板，不仅步骤简单，还不会在本地产生很多杂乱的 demo 项目文件夹。虽然 Chrome DevTools 能调试一些简单 JavaScript 测试代码，但这仅适用于浏览器环境，不能测试 Node 环境代码。

### 快速查看页面效果

之前如果想看前端笔记里代码片段运行效果，需要在本地创建项目、运行项目。当换了一台电脑，需要重新搭建开发环境（Node、Git、WebStorm 等）。现在只需要一个网络浏览器，无需搭建环境就可以方便快速查看代码效果。让你脱离沉重的电脑，轻装上阵。

### 高效复现 bug 

遇到开发问题、代码运行错误、或代码片段不理解，再也不用截图发送和写一大段描述，或文件夹传输，可直接复制 URL 分享，对方即可与你共享代码，实时帮你进行代码修改！


## 2 原理

传统在线 IDE 在远程服务器上运行您的整个开发环境，并将结果通过 Internet 流式传输回您的浏览器。 这种方法的问题在于，它几乎没有安全优势，并且在几乎所有方面都比本地机器提供更糟糕的体验：启动容器需要几分钟时间，容易出现网络延迟，无法离线工作，经常导致网络超时， 调试冻结/损坏的容器几乎是不可能的，点击刷新只会将您重新连接到损坏的容器。

StackBlitz 提供的 WebContainers 允许您创建全栈 Node.js 环境，该环境可在几毫秒内启动并立即处于在线状态，可以通过链接共享——只需单击一下。 该环境加载了 VS Code 强大的编辑体验、完整的终端、npm 等。 它也完全在浏览器中运行，这会产生下列这些关键的好处：

- 比本地环境更快。 构建完成速度比 yarn/npm 快 20%，包安装完成速度 >= 5 倍。
- Node.js 应用可以在浏览器中调试。 与 Chrome DevTools 的无缝集成支持本地后端调试，无需安装或扩展。
- 默认的安全级别。 所有代码执行都发生在浏览器的安全沙箱内，而不是远程虚拟机或本地二进制文件上。

同样，这些环境不在远程服务器上运行。 相反，这些运行环境都完全包含在 Web 浏览器中。 Node.js 运行时本身第一次在浏览器内部本地运行。

## 3 使用步骤

可以代码存储、编辑、运行，可以和 GitHub 仓库关联，从 GitHub 拉取最新代码，将修改后代码提交到 GitHub。

![01](/images/20230805/01.png)

![02](/images/20230805/02.png)

- 操作1：将本地代码提交到 GitHub 仓库
- 操作2：从 GitHub 仓库拉取代码到 StackBlitz
- 操作3：将 StackBlitz 代码提交到 GitHub 仓库
- 操作4：从 GitHub 仓库拉取代码到本地

### 3.1 使用 StackBlitz 内置模板创建项目

选择一个内置模板 ↓

![03](/images/20230805/03.png)

关联一个新的 GitHub 项目 ↓

![04](/images/20230805/04.png)
![05](/images/20230805/05.png)

### 3.2 以一个 GitHub 项目为模板创建 Stackblitz 项目

`https://stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}`

#### 自己的 GitHub 项目

浏览器输入 `https://stackblitz.com/github/stormzhangbx/vite-demo`，进入如下界面 ↓

![06](/images/20230805/06.png)

点击按钮Fork，此时 StackBlitz 仪表盘页面项目列表会新增一个项目 `Stormzhangbx - Vite Demo`  ↓

![07](/images/20230805/07.png)

关联自己 GitHub 项目  ↓

![08](/images/20230805/08.png)

注意，此时选择 `import an existing repository` ↓

![09](/images/20230805/09.png)

![10](/images/20230805/10.png)

![11](/images/20230805/11.png)

#### 非自己的 GitHub 项目

浏览器输入 `https://stackblitz.com/github/zhangxinxu/zxx.lib.css`，步骤跟上面类似，区别是在关联 GitHub 项目时，选择 `CONNECT NEW GITHUB REPOSITORY`。