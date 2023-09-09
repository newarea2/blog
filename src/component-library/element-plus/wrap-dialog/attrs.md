# 通过 $attrs

my-dialog.vue

```html
<template>
  <!--包含了父作用域中不作为组件 props 或自定义事件的 attribute 绑定和事件，所以index.vue中的v-model="visible" 相当于是直接写在了这里el-dialog上-->
  <el-dialog v-bind="$attrs">
    内容
    <template #footer>
      <el-button @click="cancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
  const emit = defineEmits(['hide'])

  // 想通过footer中按钮关闭弹窗，需要使用自定义事件来完成
  function cancel() {
    emit('hide')
  }
</script>
```

index.vue
```html
<template>
  <el-button @click="visible = true">打开弹框</el-button>
  <my-dialog v-model="visible" @hide="handleHide"></my-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  import MyDialog from './component/my-dialog.vue'
    
  const visible = ref(false)
  function handleHide() {
    visible.value = false
  }
</script>
```
