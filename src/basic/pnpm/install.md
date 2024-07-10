# 安装、使用

## 安装

`npm i pnpm -g`

一旦你安装了 pnpm，就无需再使用其他软件包管理器进行升级。 当需要升级 pnpm，像这样：

```shell
npm i pnpm@latest -g
```

## 使用

例子：

创建一个目录，然后进入此目录并将其作为当前工作目录

```shell
mkdir test
cd test
```

通过 pnpm init 命令创建一个 package.json 文件

```shell
pnpm init
```

给项目安装依赖 express

```shell
pnpm add express
```

| CLI 命令 | 含义 |
| :---- | :---- |
| `pnpm install` | 安装项目 package.json 中 dependencies 依赖 |
| `pnpm add <pkg>` | 安装某个包 |
| `pnpm add <pkg> -D` | 安装某个包，并添加到 package.json 中 devDependencies 属性下 |
| `pnpm run <cmd>` | 执行 package.json 中 scripes |
| `pnpm update` | 根据 package.json 中 依赖的语义化版本范围更新所有依赖 |
| `pnpm remove <pkg>` | 从 node_modules 和 package.json 中卸载某个依赖 |
