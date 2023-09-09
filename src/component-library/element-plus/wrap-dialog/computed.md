# 通过计算属性

my-dialog.vue
```html
<template>
  <el-dialog v-model="isShow">
    内容
    <template #footer>
      <el-button @click="cancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  })
  const emit = defineEmits(['update:modelValue'])
  
  const isShow = computed({
    // 会监听props.modelValue变化，使isShow与props.modelValue的值相等
    get() {
      return props.modelValue
    },
    // 当点击右上角关闭按钮时，会触发set方法，因为在index.vue中通过v-model来控制弹框组件的打开/关闭，即双向绑定，当弹框关闭时，需要设置双向绑定的值为false
    set(val) {
      emit('update:modelValue', val)
    }
  })
  // el-dialog 提供了点击右上角关闭按钮关闭弹框的能力，而点击footer中的按钮关闭弹框，需要自己编写逻辑代码
  function cancel() {
    isShow.value = false
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
