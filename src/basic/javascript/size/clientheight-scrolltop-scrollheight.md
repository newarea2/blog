## 1 clientHeight

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight)

是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。

clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.

![01](http://image.newarea.site/20230731/01.png)

## 2 scrollTop

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop)

可以获取或设置一个元素的内容垂直滚动的像素数。

一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。即滚动一个有垂直滚动条的容器元素时，元素内容向上滚动的像素数。

## 3 scrollHeight

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight)

含内边距（padding），不包含外边距（margin）、边框（border）。

这个**只读属性**是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。

scrollHeight 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight 值与元素视图填充所有内容所需要的最小值 clientHeight 相同。包括元素的padding，但不包括元素的 border 和 margin。

```html
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .wrapper {
    height: 100px;
    margin: 100px;
    overflow-y: auto;
    border: 1px solid #ccc;
  }
</style>
<div class="wrapper">
  <ul class="list">
    <li>语文</li>
    <li>数学</li>
    <li>英语</li>
    <li>物理</li>
    <li>化学</li>
    <li>地理</li>
    <li>政治</li>
    <li>思想</li>
  </ul>
</div>
<script>
function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function() {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

const d = document.getElementsByClassName('wrapper')[0]
d.onscroll = () => {
  if (d.clientHeight + d.scrollTop >= d.scrollHeight) {
    // 触底了
    console.log(1111)
  }
}
</script>
```

注意：上面 clientHeight、scrollTop、scrollHeight 都是在容器元素 wrapper 上使用的。

![03](http://image.newarea.site/20230731/03.png)

![02](http://image.newarea.site/20230731/02.png)