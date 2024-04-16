# 生产环境动态配置

安装依赖

```sh
pnpm i unplugin-config dotenv -D
```

```ts
// vite/plugins/app-config.ts
import ConfigPlugin from 'unplugin-config/vite'

export default function createAppConfig() {
  return ConfigPlugin({
    envVariables: {
      prefix: 'VITE_GLOB_',
      files: ['.env.production', '.env'],
    },
  })
}
```

```ts
// src/hooks/global-setting.ts
interface GlobalConfig {
  VITE_GLOBAL_API_URL: string
}

export function useGlobalSetting(): Readonly<GlobalConfig> {
  const ENV_NAME = '__PRODUCTION__UNPLUGIN__CONFIG__CONF__'
  const ENV = import.meta.env.DEV
    ? import.meta.env
    : (window as any)[ENV_NAME]
        ? (window as any)[ENV_NAME]
        : {}
  const { VITE_GLOBAL_API_URL } = ENV
  return {
    VITE_GLOBAL_API_URL,
  }
}
```

开发环境用这里的变量：

```env
# .env.development
VITE_GLOBAL_API_URL = hello1
```

生成环境**初始**用这里的变量，**后期**可以通过 _app.config.js 修改变量值：

```env
# .env.production
VITE_GLOBAL_API_URL = hello2
```

如何使用：

```html
<script setup lang="ts">
import { useGlobalSetting } from '@/hooks/setting'

const globSetting = useGlobalSetting()
</script>

<template>
  <div class="flex-col-center">
    <p>测试：{{ globSetting.VITE_GLOBAL_API_URL }}</p>
  </div>
</template>
```

打包后，dist 目录下会生成文件 _app.config.js：

```
window.__PRODUCTION__UNPLUGIN__CONFIG__CONF__={"VITE_GLOBAL_API_URL":"hello2"};Object.freeze(window.__PRODUCTION__UNPLUGIN__CONFIG__CONF__);Object.defineProperty(window, "__PRODUCTION__UNPLUGIN__CONFIG__CONF__", {configurable: false,writable: false,});
```

html 文件会在头部导入上述文件。
