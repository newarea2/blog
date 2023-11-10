# 封装弹框

## 为什么要封装

弹框看似不大，但是如果跟所属页面写在同一个 SFC 文件中，会使 SFC 文件很臃肿，特别是当一个页面有多个弹框时，所以最好的做法是将弹框封装成组件，这样即不会使 SFC 文件臃肿，也使页面显得更加清晰，便于维护和理解。

## 封装之后的效果

通过所属页面可以打开弹框，如点击页面中的某个按钮。

通过弹框自身可以关闭弹框，如点击确认、取消、右上角关闭按钮、遮罩层

## 实现方式

### 比较原始的方式

::: code-tabs

@tab my-dialog.vue

```vue
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

@tab index.vue

```vue
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

:::

### 通过计算属性

::: code-tabs

@tab my-dialog.vue

```vue
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

@tab index.vue

```vue
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

:::

### attrs

::: code-tabs

@tab my-dialog.vue

```vue
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

@tab index.vue

```vue
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

:::
