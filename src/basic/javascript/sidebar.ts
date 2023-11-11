import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: 'Blob',
    collapsible: true,
    prefix: '/basic/javascript/blob',
    children: [
      { text: 'ArrayBuffer', link: 'arraybuffer' },
      { text: 'Blob URL 和 Data URL 的区别', link: 'blob-url-vs-data-url' },
      { text: '调用后台接口下载 Excel', link: 'download-by-api' },
      { text: 'FormData', link: 'formdata' },
      { text: '使用文件', link: 'use-file' },
    ]
  },
  {
    text: 'class',
    collapsible: true,
    prefix: '/basic/javascript/class',
    children: [
      { text: '类的构造函数', link: 'constructor' },
      { text: 'this 指向', link: 'this' }
    ]
  },
  {
    text: 'Date',
    collapsible: true,
    prefix: '/basic/javascript/date',
    children: [
      { text: '日期 Date 兼容性', link: 'compatibility' },
      { text: '日期时间的获取与设置', link: 'data-get-set' },
      { text: '几个获取时间戳的方式', link: 'timestamp' },
    ]
  },
  {
    text: 'Dom',
    collapsible: true,
    prefix: '/basic/javascript/dom',
    children: [
      { text: '操作类名', link: 'operate-class' },
      { text: 'data 属性', link: 'data-attribute' }
    ]
  },
  {
    text: '下载',
    collapsible: true,
    prefix: '/basic/javascript/download',
    children: [
      { text: '基础', link: 'basis' },
    ]
  },
  {
    text: 'event',
    collapsible: true,
    prefix: '/basic/javascript/event',
    children: [
      { text: '捕获、冒泡', link: 'capture-bubble' },
      { text: '同步任务、任务队列', link: 'event-loop' },
      { text: '事件调用', link: 'evnet-call' },
      { text: 'input、change事件', link: 'input-change' },
    ]
  },
  {
    text: 'function',
    collapsible: true,
    prefix: '/basic/javascript/function',
    children: [
      { text: '匿名函数', link: 'anonymous-function' },
      { text: '立即执行函数', link: 'iife' }
    ]
  },
  {
    text: 'http',
    collapsible: true,
    prefix: '/basic/javascript/http',
    children: [
      { text: '浏览器缓存', link: 'browser-cache' },
      { text: 'content-type', link: 'content-type' },
      { text: '传统项目解决跨域问题', link: 'jquery-cors' },
      { text: 'OPTIONS 请求方法', link: 'options' },
      { text: 'http 请求和响应组成', link: 'request-response' },
      { text: '响应状态码', link: 'status-code' },
      { text: 'TCP', link: 'tcp' }
    ]
  },
  {
    text: 'JQuery',
    collapsible: true,
    prefix: '/basic/javascript/jquery',
    children: [
      { text: '插件', link: 'plugin' },
      { text: '设置按钮的 disabled 属性', link: 'set-button-disabled' },
      { text: '使用 FormData 上传文件', link: 'upload-file-with-FormData' },
    ]
  },
  {
    text: 'module',
    collapsible: true,
    prefix: '/basic/javascript/module',
    children: [
      { text: '模块的输入输出', link: 'import-export' },
      { text: '在 HTML 中使用模块', link: 'apply-module-in-html' },
      { text: '模块顶级 await', link: 'top-level-await' },
    ]
  },
  {
    text: '位置',
    collapsible: true,
    prefix: '/basic/javascript/position',
    children: [
      { text: 'pageX 和 pageY', link: 'pagex-pagey' },
      { text: 'screenX 和 screenY', link: 'screenx-screeny' },
    ]
  },
  {
    text: 'Promise',
    collapsible: true,
    prefix: '/basic/javascript/promise',
    children: [
      { text: '重试', link: 'retry' }
    ]
  },
  {
    text: '正则表达式',
    collapsible: true,
    prefix: '/basic/javascript/regexp',
    children: [
      { text: '基础', link: 'basis' },
      { text: 'match', link: 'match' },
      { text: 'replace', link: 'replace' },
    ]
  },
  {
    text: '尺寸',
    collapsible: true,
    prefix: '/basic/javascript/size',
    children: [
      { text: 'clientHeight、scrollTop、scrollHeight', link: 'clientheight-scrolltop-scrollheight' },
      { text: '获取宽高', link: 'get-width-height' },
      { text: 'getBoundingClientRect', link: 'getBoundingClientRect' },
      { text: '目录导航', link: 'menu-navigation' },
      { text: 'offset', link: 'offset' },
    ]
  },
  { text: '同步 Ajax 无法 loading', link: '/basic/javascript/ajax-loading' },
  { text: 'ajax', link: '/basic/javascript/ajax' },
  { text: '类数组', link: '/basic/javascript/array-like-object' },
  { text: 'base64', link: '/basic/javascript/base64' },
  { text: 'break、continue', link: '/basic/javascript/break-continue' },
  { text: 'call、apply、bind', link: '/basic/javascript/call-apply-bind' },
  { text: '闭包', link: '/basic/javascript/closures' },
  { text: 'contentEditable', link: '/basic/javascript/contentEditable' },
  { text: '防抖、节流', link: '/basic/javascript/debounce-throttling' },
  { text: 'decodeURI、decodeURIComponent', link: '/basic/javascript/decodeURI-decodeURIComponent' },
  { text: '遍历数组删除指定元素', link: '/basic/javascript/delete-the-specified-element' },
  { text: '导出', link: '/basic/javascript/download' },
  { text: 'ECMAScript 特性', link: '/basic/javascript/ecmascript' },
  { text: '转义字符', link: '/basic/javascript/escape' },
  { text: 'for', link: '/basic/javascript/for 循环' },
  { text: '获取视频第一帧', link: '/basic/javascript/get-the-first-frame-of-the-video' },
  { text: '变量提升', link: '/basic/javascript/hoisting' },
  { text: '身份证信息', link: '/basic/javascript/id-card' },
  { text: 'Image', link: '/basic/javascript/image' },
  { text: '继承与原型链', link: '/basic/javascript/inheritance-and-prototype-chain' },
  { text: '检查是否为数组', link: '/basic/javascript/isArray' },
  { text: '命名规范', link: '/basic/javascript/name-convention' },
  { text: 'JSON.stringify', link: '/basic/javascript/JSON-stringify' },
  { text: 'Math', link: '/basic/javascript/math' },
  { text: 'mouseover、mouseenter.md', link: '/basic/javascript/mouseover-mouseenter.md' },
  { text: 'number', link: '/basic/javascript/number' },
  { text: 'Object.keys', link: '/basic/javascript/Object-keys' },
  { text: '操作符', link: '/basic/javascript/operator' },
  { text: '打印', link: '/basic/javascript/print' },
  { text: '递归', link: '/basic/javascript/recursion' },
  { text: '设置、获取样式', link: '/basic/javascript/set-get-style' },
  { text: 'UrlEncode 编码', link: '/basic/javascript/urlencode' },
  { text: '天气', link: '/basic/javascript/weather' },
]

export default sidebar
