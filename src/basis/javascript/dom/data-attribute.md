# 获取、设置自定义属性 data 的值

```HTML
<div id="tree" data-leaves="47" data-plant-height="2.4m"></div>

<script>
const tree = document.getElementById('tree')

// 1获取值
// 1.1 通过getAttribute()
console.log(tree.getAttribute('data-leaves'))
console.log(tree.getAttribute('data-plant-height'))
// 1.2 通过dataset
console.log(tree.dataset.leaves)
console.log(tree.dataset.plantHeight)

// 设置值
tree.setAttribute('data-leaves', '48')
tree.dataset.plantHeight ='3m'
</script>
```