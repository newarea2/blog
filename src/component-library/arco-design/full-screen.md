# 全屏组件

> 众所周知，浏览器是有官方的全屏API的：Element.requestFullscreen()，它可以让一个元素立刻铺满视窗，并且置于所有元素之上。官方全屏是设定层级高于一切，那些append-to-body的弹窗，无论z-index多高，也绝对不会被显示出来。而那些非append-to-body模式的弹出层，确实会在某些业务场景不符合要求。

```html
<!-- components/Card.vue -->
<script setup lang="ts">
const props = defineProps({
  isFullScreen: Boolean,
})
const emit = defineEmits(['update:isFullScreen'])
</script>

<template>
  <teleport to="body" :disabled="!isFullScreen">
    <div ref="divRef1" style="border: 1px solid red; background: #fff;" :class="{ 'full-screen': isFullScreen }" class="modal-container">
      <div class="flex justify-between">
        <span>hello1</span>
        <a-button @click="emit('update:isFullScreen', false)">
          fullscreen1
        </a-button>
      </div>
      <a-select :style="{ width: '320px' }" placeholder="Please select ...">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
        <a-option disabled>
          Disabled
        </a-option>
      </a-select>
    </div>
  </teleport>
</template>

<style scoped>
.full-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
```

```html
<!-- index.vue -->
<script setup lang="ts">
import Card from './components/Card.vue'

const isFullScreen = ref(false)
</script>

<template>
  <div style="border: 1px solid blue;background-color: #ccc;">
    hello

    <a-button @click="isFullScreen = true">
      fullscreen1
    </a-button>

    <Card v-model:is-full-screen="isFullScreen" />
  </div>
</template>
```

使用 teleport 将全屏元素放置到 `body` 下面可以防止一些潜在的问题。

当在初始 HTML 结构中使用这个组件时，会有一些潜在的问题：

- `position: fixed` 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 `transform``、perspective` 或者 `filter` 样式属性。也就是说如果我们想要用 CSS `transform` 为祖先节点 `<div class="outer">` 设置动画，就会不小心破坏模态框的布局！

- 这个模态框的 `z-index` 受限于它的容器元素。如果有其他元素与 `<div class="outer">` 重叠并有更高的 `z-index`，则它会覆盖住我们的模态框。

利用 `position: fixed` 及相关样式属性将元素全屏展示。
