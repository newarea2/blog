# 配置

配置存放位置：

- 项目级配置，跟 package.json 文件相邻，如 /path/to/my/project/.npmrc。

- 工作空间（单体多仓项目）级配置（包含 pnpm-workspace.yaml 文件的目录）。

- 操作系统用户级配置，如 C:\Users\xxx\.npmrc。

- 全局配置文件，位于 Node 安装目录，如 D:\soft\nvm\v20.10.0\etc\npmrc。

在官网中全局搜索 `AppData`（位于 Windows C 盘 `C:\Users\xxx\AppData`），发现下列相关配置：cache-dir、state-dir、global-dir、store-dir、global-bin-dir， 修改这些配置值，防止后期下载的文件放入 C 盘中。

## cache-dir

默认 `C:\Users\xxx\AppData\Local\pnpm-cache`

`pnpm config set cache-dir "E:\pnpm-cache"`

## state-dir

默认 `C:\Users\xxx\AppData\Local\pnpm-state`

`pnpm config set state-dir "E:\pnpm-state"`

## global-dir

默认 `C:\Users\xxx\AppData\Local\pnpm\global`

`pnpm config set global-dir "E:\pnpm\global"`

## store-dir

默认 `C:\Users\xxx\AppData\Local\pnpm\store`

`pnpm config set store-dir "E:\pnpm\store"`

## global-bin-dir

默认 `C:\Users\xxx\AppData\Local\pnpm`

`pnpm config set global-bin-dir "E:\pnpm"`
