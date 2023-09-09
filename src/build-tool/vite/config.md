# Vite 2.0 配置总结

## 1 别名设置

vite.config.js：

方式一

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

方式二

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      }
    ]
  }
})
```

使用：

```html
<template>
  <div>home</div>
  <pagination />
</template>

<script setup>
import Pagination from '@/components/Pagination.vue'

</script>
```

## 2 配置环境变量

在项目根目录新建文件`.env.production`、`.env.production`

.env.development

```
NODE_ENV=development
  
VITE_APP_WEB_URL=YOUR WEB URL
```

.env.production

```
NODE_ENV=production
  
VITE_APP_WEB_URL=YOUR WEB URL
```

命令 `npm run dev` 默认使用 development 模式，`npm run build` 默认使用 production 模式。

在页面中使用：

```js
console.log(import.meta.env.VITE_APP_WEB_URL)
```

注意：只有以 `VITE_` 开头命名的变量才会暴露为 `import.meta.env` 的属性。

## 3 组件样式按需加载

安装依赖 `npm install vite-plugin-style-import -D`

以 Element plus 为例

请确保已经安装了 sass 依赖并将 element-plus/packages/theme-chalk/src/base.scss 文件在入口文件中引入

vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        resolveStyle: (name) => {
          name = name.splice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ]
})
```

具体配置参考：https://github.com/anncwb/vite-plugin-style-import

## 4 配置开发环境代理

vite.config.js

```js
// ...
server: {
  host: '0.0.0.0',
  port: 3000,
  open: true,
  https: false,
  proxy: {}
}
```

## 5 生产环境移除 console

vite.config.js

```js
// ...
build:{
  // ...
  terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
  }
}
```

## 6 生成环境生成.gz文件

安装依赖 `npm install vite-plugin-compression -D`

vite.config.js

```js
import viteCompression from 'vite-plugin-compression'

plugins:[
  // ...
  viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
  })
]
```

具体配置参考：https://github.com/anncwb/vite-plugin-compression

## 7 配置 eslint + standard
