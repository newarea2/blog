# 基础

> 本笔记使用 pnpm 作为包管理器。

## workspaces 工作区

工作区是 monorepo 的构建块。添加到 monorepo 的每个应用程序和包都将位于其自己的工作区中。每个工作区都是一个 node 项目，都有 `package.json` 文件和 node_moudle 文件夹。

工作区由包管理器管理，要使用工作区，必须先向包管理器声明工作区的位置。对于不同的包管理器，声明方式不同。

假如项目 my-monorepo 目录结果如下：

```
my-monorepo
├─ docs
├─ apps
│  ├─ api
│  └─ mobile
├─ packages
│  ├─ tsconfig
│  └─ shared-utils
│─ sdk
│─ package.json
└─ pnpm-workspace.yaml
```

想要 `my-monorepo/apps`、`my-monorepo/packages` 下所有目录，及 `my-monorepo/docs` 是工作区，需要配置根目录下的 `pnpm-workspace.yaml`：

```yaml
packages:
  - "docs"
  - "apps/*"
  - "packages/*"
```

## 工作区可以相互依赖


