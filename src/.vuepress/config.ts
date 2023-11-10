import { defineUserConfig, viteBundler  } from "vuepress";
import theme from "./theme.js";
import path from 'path'

export default defineUserConfig({
  // base: "/blog/",

  lang: "zh-CN",
  title: "前端笔记",
  description: "A docs demo for vuepress-theme-hope",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  port: 8888
})
