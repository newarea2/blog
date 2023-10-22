import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "前端笔记",
  description: "A docs demo for vuepress-theme-hope",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
