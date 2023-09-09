# 集合

`every`

```js
import { every } from 'lodash-es'
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'fred',   'age': 20, 'active': false }
]
every(users, (item) => item.age > 30) // false
every(users, (item) => item.age > 10) // true
```
