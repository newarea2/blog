# 比较原始的方式

my-dialog.vue
```html
<template>
  <el-dialog v-model="isShow" :before-close="beforeClose">
    内容
    <template #footer>
      <el-button @click="cancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

const isShow = ref(false)

// props.modelValue 是一个普通类型，开始使用props.modelValue赋值，后面需要监听props.modelValue的变化，并在变化后使用新值赋值
watch(() => props.modelValue, (val) => {
  isShow.value = val
}, {
  immediate: true
})

function cancel() {
  // 通过设置 isShow 为 false 来关闭弹框
  isShow.value = false
  // 将父组件中的visible设置为false，否则弹窗无法再打开
  emit('update:modelValue', false)
}

// 注意别忘了这里，否则通过右上角关闭按钮关闭弹窗后，弹窗无法再打开
function beforeClose(done) {
  // 通过 el-dialog 提供的 done 来关闭弹框
  done()
  emit('update:modelValue', false)
}
</script>
```

index.vue
```html
<template>
  <el-button @click="visible = true">打开弹框</el-button>
  <my-dialog v-model="visible"></my-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  import MyDialog from './component/my-dialog.vue'
    
  const visible = ref(false)
</script>
```
