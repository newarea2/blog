# 防抖、节流

当持续高频触发事件，如果回调函数很复杂或者有 Ajax 请求，就会导致响应跟不上触发，出现页面卡顿，假死现象。

## 防抖

当持续触发事件时，一定在事件触发 n 秒后才执行回调，如果在事件触发的 n 秒内又触发了这个事件，那就以新事件的触发时间为准开始计时，n 秒后执行回调，总之，就是要等触发完事件 n 秒内不再触发事件，才执行回调。

如下图，持续触发 scroll 事件时，并不执行 handle 函数，当 1000 毫秒内没有触发 scroll 事件时，才会延时触发 scroll 事件。

![](http://image.newarea.site/2024-01-07-22-07-01.jpg)

### 应用场景

`<input>`、`textarea>` 等元素的 `oninput` 事件。

### 实现原理

#### 简版

用于理解防抖函数原理。

```js
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}
```

#### 完整版

添加对 `this`、`event` 对象的正确解析，以及立刻执行。

```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    let context = this;
    let args = argments;

    if (timeoue) clearTimeOut(timeout);
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if(callNow) fnc.apply(context, args);
    } else {
      timeout = setTimeout( function() {
        func.apply(context, args)
      }, wait)
    }
  }
}
```

### 使用 lodash.debounce

例如，下面是一个带有搜索框的页面，并且需要在用户停止输入 500 毫秒后才开始搜索：

```js
import { debounce } from 'lodash-es'

// 根据关键词进行搜索
function search(keyword) {
  console.log(`Searching for '${keyword}'...`)
}

const inputEl = document.getElementById('search-input')

// 创建 debounce 函数，最多每 500 毫秒执行一次 search 函数
const debouncedSearch = _.debounce(search, 500)

// 监听 input 变化，如果有变化则调用 debouncedSearch 函数
// 每当出现输入变化时，我们会将输入内容传递给 `debouncedSearch` 函数，这个函数会将搜索操作延迟 500 毫秒后执行。因此，只有用户停止输入 500 毫秒之后，才会真正执行搜索操作
inputEl.addEventListener('input', (evt) => {
  const keyword = evt.target.value.trim()
  debouncedSearch(keyword)
});
```

## 节流

节流的原理比较简单，如果你持续触发事件，每隔一段时间，只执行一次事件。

如下图，持续触发 scroll 事件时，并不立即执行 handle 函数，每隔 1000 毫秒才会执行一次 handle 函数。

![](http://image.newarea.site/2024-01-07-22-07-02.jpg)

### 应用场景

鼠标移动事件 `onmousemove`, 滚动滚动条事件 `onscroll`，窗口大小改变事件 `onresize`。

### 实现原理

```js
function throttle(fn, wait) {
  let start = Date.now()

  return function () {
    const context = this
    const args = arguments

    const now = Date.now()
    if (now - start > wait) {
      fn.apply(context, args)
      start = now
    }
  }
}
```

### 使用 lodash.throttle

例如，下面是一个点击按钮时每隔 1 秒输出一次 log 的示例：

```js

function log() {
  console.log('Clicked!')
}

const btnEl = document.getElementById('click-button')

// 创建 throttle 函数，最多每 1 秒执行一次 log 函数
const throttledLog = _.throttle(log, 1000)

// 监听 click 事件，如果有点击则调用 throttledLog 函数
// 每当用户点击按钮时，我们会调用 `throttledLog` 函数，这个函数会通过限制函数的执行频率，保证每隔 1 秒钟输出一条日志。即使用户连续点击按钮，也只有第一次点击可以触发函数的执行，后续的点击都会被忽略
btnEl.addEventListener('click', (evt) => {
  throttledLog()
});
```
