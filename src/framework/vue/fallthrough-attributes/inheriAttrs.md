# 透传

[透传 Attributes](https://cn.vuejs.org/guide/components/attrs.html)

## 1 什么是透传

将**没有被组件声明为 props 或 emits 的 attribute 或者 `v-on` 事件监听器**传递给组件。

下面用个例子说明透传具体“长啥样”：

src/components/test.vue

```html
<template>
  <div>hello</div>
</template>

<script setup>
  import { useAttrs } from 'vue'

  const attrs = useAttrs()
  console.log(attrs)
</script>
```

src/views/table/index.vue

```html
<template>
  <test v-model:age="age" name="Jack" girl-friend="Marry" @row-click="fn" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Test from '@/components/test.vue'

  const age = ref(20)
  function fn() {
    console.log('row click')
  }
</script>
```

![15](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230828/15.png)

- 和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写
- 像 `@row-click` 这样的一个 `v-on` 事件监听器将在此对象下被暴露为一个函数 `onRowClick`


## 2 自动透传

如果组件是单根节点，没有被组件声明为 props 或 emits 的 attribute 或者 `v-on` 事件监听器会自动传递到组件的根元素/组件上。

如何禁止自动透传？

设置 `inheriAttrs: false`，会禁止上述行为。

## 3 手动透传

多根节点组件不会自动透传；单根节点组件，如果设置了 `inheriAttrs: false`，也不会自动透传。对于这两种情况，如果想要使用没有被组件声明为 props 或 emits 的 attribute 或者 `v-on` 事件监听器，就需要“手动透传”

## 4 如何访问没有被组件声明为 props 或 emits 的 attribute或者 `v-on` 事件监听器

### 4.1 模板中

`$attrs`

### 4.2 JavaScript 中

选项式 API

`this.$attrs`

组合式 API

```html
<script setup>
  import { useAttrs } from 'vue'

  const attrs = useAttrs()
</script>
```

不管 `inheriAttrs` 为 false 还是 true，不影响上面的访问方式，**`inheriAttrs` 只是用来控制单根节点组件是否可以自动透传**。

## 5 注意

在**非单根节点组件**中使用没有**被组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器**，需要设置 inheritAttrs 为 false，否则控制台报警告，如：

Extraneous non-props attributes (visible) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. 

不能直接 watch attrs，否则提示 A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types. 

```js
const attrs = useAttrs()
watch(attrs, () => {

})
```

应该这样写：

```js
const attrs = useAttrs()
watch(() => attrs, () => {

})
```
