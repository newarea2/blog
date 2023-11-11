# 事件调用的几种方式

## 1 HTML 中

通过在元素上使用相应的事件属性，属性值是一段 Javascript 表达式。在用编辑器（如Webstorm）编写属性值时，会有代码提示功能，证明此处确实是Javascript 表达式。在表达式中 this 表示当前元素 **DOM 元素对象**。

如果逻辑比较多，使用表达式就显得不是很方便，可以将**逻辑包装进一个函数**中，然后表达式只写函数调用就行。

将 Js 逻辑直接写在HTML中：
 
```html
<button type="button" onclick="console.log(this);console.log(this.innerHTML)">按钮</button>
```

将 Js 逻辑抽离出来封装成函数：

``` html
<button type="button" onclick="handler(this)">按钮</button>

<script>
    function handler(el) { // 注意这里最好不要写成 e，因为 e 可以表示 element（元素）、event(事件)、error（错误），应该写成element、event、error，或简写 el、ev、err
        console.log(el)
        console.log(el.innerHTML)
    }
</script>
```

控制台输出：

![01](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230829/01.png)

## 2 JavaScript 中

### 2.1 通过 onxxxx 属性

事件处理器中的 this 表示当前 DOM 元素对象。默认会向事件处理器中传入事件对象。

事件对象由浏览器默认传入。不同的事件，其事件对象包含的属性不一定相同，下列打印的是 MouseEvent。

```html
<button typeof="button">按钮</button>
    
<script>
  document.getElementsByTagName('button')[0].onclick = function (ev) {
    console.log(ev);
    console.log(this);
    console.log(this.innerHTML)
  }
</script>
```

控制台输出：

![02](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230829/02.png)

### 2.2 通过 addEventListener 方法

事件处理器中的 this 表示当前 DOM 元素对象。默认会向事件处理器中传入事件对象。

```js
<button type="button">按钮</button>

<script>
    document.getElementsByTagName('button')[0].addEventListener('click', function (ev) {
        console.log(ev);
        console.log(this);
        console.log(this.innerHTML)
    });
</script>
```

## 3 通过jQuery

事件处理器中的 this 表示当前 DOM 元素对象。默认会向事件处理器中传入jQuery的Event对象，用于表示当前文档元素触发的DOM事件，它对JS原生的Event对象进行了封装，从而实现跨浏览器的兼容。该事件对象处理具备下列属性和方法外，还具备JS原生Event对象的属性和方法

```html
<button type="button">按钮</button>
<script src="plugin/jquery-3.3.1.js"></script>
<script>
    $('button').on('click', function (ev) {
        console.log(ev);
        console.log(this)
    })
</script>
```

![03](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230829/03.png)

## 4 vue是通过`v-on`简写`@`来绑定事件，如

```html
<div @click="handle"></div>
<div @click="handle()"></div> // 当无参数时，加不加括号没关系

<my-com @xxx="handle($event)"></my-com> // 对于原生事件，$event 表示原生事件对象；对于自定义事件，$event 表示事件参数
```

```html
<template>
  <!-- ... -->
  <a-table-column title="操作" align="center" :width="160">
    <template #cell="{ record }">
      <a-button type="text" :disabled="editDisabled(record)" @click="handleEdit(record)">编辑</a-button>
      <a-divider direction="vertical" />
      <a-dropdown trigger="hover" @select="handleMore($event, record)">
      <a-button type="text">更多</a-button>
      <template #content>
        <a-doption>删除</a-doption>
        <a-doption>重命名</a-doption>
        <a-doption>下载</a-doption>
      </template>
    </a-dropdown>
   </template>
  </a-table-column>
</template>

<script setup>
  //...
  // 更多
  function handleMore(type, row) {
    if (type === '重命名') {
      handleRename(row)
    } else if (type === '删除') {
      handleDeleteQueue(row)
    } else {
      handleDownLoad(row)
    }
  }
</script>
```
