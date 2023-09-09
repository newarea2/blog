# 获取宽高的几种方式

## 1. el.style.width/height

[MDN style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

只能获取内联样式（此外，style也可以设置行内样式）。

```html
<style>
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div style="width: 200px">hello</div>

<script>
  const el = getElementByTagName('div')[0]
  console.log(el.style.width)  // 200px
  console.log(el.style.height) // 空的
</script>
```

## 2. window.getComputedStyle(el).width/height

[MND getComputedStyle](getComputedStyle)

[MDN CSSStyleDeclaration](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration)

获取计算后的元素的 CSS 属性，getComputedStyle 返回值是一个 CSSStyleDeclaration 对象。

```html
<style>
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div style="width: 200px">hello</div>

<script>
  const el = getElementByTagName('div')[0]
  console.log(getComputedStyle(el).width, getComputedStyle(el).height) // 200px 100px
  // 或者
  console.log(getComputedStyle(el).getPropertyValue('width'), getComputedStyle(el).getPropertyValue('height')) // 200px 100px
</script>
```

## 3. el.getBoundingClientRect().width/height

[MDN getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

除了能够获取宽高，还能获取元素位置等信息。

```html
<style>
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div style="width: 200px">hello</div>

<script>
  const el = getElementByTagName('div')[0]
  console.log(el.getBoundingClientRect().width, el.getBoundingClientRect().height) // 200 100
</script>
```
