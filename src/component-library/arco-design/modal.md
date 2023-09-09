# 弹窗 Modal 注意点

```js
const modalOption = reactive({
  title: '新增表单项',
  visible: false,
  'onUpdate:visible': function (val: boolean) {
    modalOption.visible = val
  },
  async onBeforeOk() {
    const err = await modelFormRef.value.validate()
    if (err) return false
    // 折叠面板key
    const key = genId()
    form.value.push({
      label: modelForm.label,
      key,
      component: 'Input',
      field: '',
      defaultValue: '',
      width: '100',
      optionType: '静态数据',
      options: []
    })
    activeKey.value = [key]
  },
  onClose() {
    modelForm.label = ''
  }
})
```

```js
const modalOption = reactive({
  title: '新增表单项',
  visible: false,
  'onUpdate:visible': function (val: boolean) {
    modalOption.visible = val
  },
  onBeforeOk(done) {
    modelFormRef.value.validate((err) => {
      if (err) done(false)
      else {
        // 折叠面板key
        const key = genId()
        form.value.push({
          label: modelForm.label,
          key,
          component: 'Input',
          field: '',
          defaultValue: '',
          width: '100',
          optionType: '静态数据',
          options: []
        })
        activeKey.value = [key]
        done(true)
      }
    })
  },
  onClose() {
    modelForm.label = ''
  }
})
```