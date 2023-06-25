## 获取url 参数信息

```js
// http://10.60.23.175:8082/manager/platform/helpdesk/edit?id=1b3992401ad641a5b8bb90dd1680c30c&base=manager
const search = window.location.search // ?id=1b3992401ad641a5b8bb90dd1680c30c&base=manager
const params = new URLSearchParams(search) 

params.get('id') // -> '1b3992401ad641a5b8bb90dd1680c30c'
params.toString() // -> 'id=1b3992401ad641a5b8bb90dd1680c30c&base=manager'

param.append('a',666) // param.get('a') -> '666'
param.delete('a',666) // param.get('a') -> null

param.has('id') // -> true
```

