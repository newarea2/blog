# node_modules 结构

使用 pnpm 生成的 node_modules 下除了 `.bin`、`.pnpm` 等文件夹、文件，其他都是依赖包，这些依赖包只会是项目 `package.json` 中（dependencies、devDependencies等）指定的依赖包。

![](https://image.newarea.site/2024-05-19-17-50-53.png)

![](https://image.newarea.site/2024-05-23-00-43-00.png)

`node_modules/axios` 是 Junction，指向的目标位置是 `node_modules/.pnpm/axios@1.6.8/node_modules/axios`

`node_modules/.pnpm/axios@1.6.8/node_modules` 下的 `follow-redirects`、`form-data`、`proxy-from-env` 是 axios 的依赖。

`node_modules/.pnpm` 下扁平化的存放了项目的所有依赖。`node_modules/.pnpm/foo@1.0.0/node_modules` 下包含了 foo 自身，以及 foo 的依赖包（Junction 类型，目标位置在 `node_modules/.pnpm` 下）。
