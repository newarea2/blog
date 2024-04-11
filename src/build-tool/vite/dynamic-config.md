# 生产环境动态配置

安装依赖

```sh
pnpm i unplugin-config dotenv
```

```ts
// vite/plugins/app-config.ts
import ConfigPlugin from 'unplugin-config/vite'

export default function createAppConfig() {
  return ConfigPlugin({
    htmlInjection: {
      templates: ['index.html'],
    },
    envVariables: {
      prefix: 'VITE_GLOB_',
      files: ['.env.production', '.env'],
    },
  })
}
```

```ts
// src/hooks/setting/index.ts
interface GlobConfig {
  name: string
}

function getAppEnvConfig() {
  const ENV_NAME = '__PRODUCTION__UNPLUGIN__CONFIG__CONF__'
  const ENV = import.meta.env.DEV ? import.meta.env : (window as any)[ENV_NAME] ? (window as any)[ENV_NAME] : {}
  const { VITE_GLOB_NAME } = ENV
  return {
    VITE_GLOB_NAME,
  }
}

export function useGlobSetting(): Readonly<GlobConfig> {
  const { VITE_GLOB_NAME }
    = getAppEnvConfig()

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    name: VITE_GLOB_NAME,
  }
  return glob as Readonly<GlobConfig>
}
```

```env
# .env.production
VITE_GLOB_NAME = hello2
```

如何使用

```html
<script setup lang="ts">
import { useGlobSetting } from '@/hooks/setting'

const globSetting = useGlobSetting()
</script>

<template>
  <div class="flex-col-center">
    <p>测试：{{ globSetting.name }}</p>
  </div>
</template>
```

打包后，dist 目录下会生成文件 _app.config.js：

```
window.__PRODUCTION__UNPLUGIN__CONFIG__CONF__={"VITE_GLOB_NAME":"hello21"};Object.freeze(window.__PRODUCTION__UNPLUGIN__CONFIG__CONF__);Object.defineProperty(window, "__PRODUCTION__UNPLUGIN__CONFIG__CONF__", {configurable: false,writable: false,});
```

html 文件会在头部导入上述文件。
