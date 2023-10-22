[nvm](https://github.com/coreybutler/nvm-windows)

## npm config 命令

`npm help config` 在浏览器打开命令 `npm config` 的介绍页。

- `npm config list` 展示部分配置
- `npm config list --json` 展示所有配置
- `npm config list --json` 以 json 格式展示所有配置

`npm config list`

```
; "builtin" config from D:\nodejs\node_modules\npm\npmrc

prefix = "C:\\Users\\zbxtqw\\AppData\\Roaming\\npm"

; node bin location = D:\nodejs\node.exe
; node version = v16.18.1
; npm local prefix = E:\Desktop
; npm version = 8.19.2
; cwd = E:\Desktop
; HOME = C:\Users\zbxtqw
; Run `npm config ls -l` to show all defaults.
```

`npm config list --json`

```json
{
  "prefix": "C:\\Users\\zbxtqw\\AppData\\Roaming\\npm",
  "cache": "C:\\Users\\zbxtqw\\AppData\\Local\\npm-cache",
  "registry": "https://registry.npmjs.org/",
  "userconfig": "C:\\Users\\zbxtqw\\.npmrc",
  // ...
}
```

- prefix：表示全局包（prefix/node_modules）、执行脚本（prefix）存放位置。
- cache：缓存位置。
- registry：npm 源。
- userconfig：用于存放用户修改的配置信息，如 `npm config set prefix "D:\nodejs"` 会向 .npmrc 写入 `prefix=D:\nodejs`。

## Node 包分类

**内置包**

位于 Node 安装目录下 node_modules 文件夹中，如果内置包提供了可执行脚本，这些脚本直接位于 Node 安装目录下。

![](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/22.png)

![](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/23.png)

**全局包**

安装 prefix/node_modules 文件夹中，如果全局包提供了可执行脚本，这些脚本直接位于 prefix 文件夹下。

**项目包**

安装在项目根目录下 node_modeules 文件夹中，如果项目包提供了可执行脚本，这些脚本位于 node_modules/.bin 下，可以通过 `npx xxx index.js` (等价于 `node_modules/.bin/xxx index.js`)使用这些脚本。

|| 安装位置 | 可执行脚本位置|
|:--|:--|:--|
|内置包|Node 安装目录下 node_modules 文件夹|Node 安装目录|
|全局包|prefix/node_modules|prefix|
|项目包|项目根目录下 node_modeules 文件夹|项目/node_modules/.bin|

安装完 Node，`C:\Users\zbxtqw\AppData\Roaming\npm`、`D:\nodejs\` 均已写入全局变量 Path 中。

## 修改全局包安装位置

修改全局包安装位置、相应可执行脚本位置：

`npm config set prefix "D:\nodejs"`

实际上，该命令会在用户目录下的新建 C:\Users\zbxtqw\.npmrc 文件并写入 `prefix=D:\nodejs`

修改缓存位置

`npm config set cache "D:\nodejs\npm-cache"`

同时会向用户目录下 .npmrc 文件并写入 `cache=D:\nodejs\npm-cache`

## 安装 nrm

`npm install nrm -g`

## 安装 pnmp

`npm install pnpm -g`

