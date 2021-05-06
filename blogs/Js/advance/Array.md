---
title: 前端数组
date: 2020-12-09
tags:
 - 数组
categories: 
 - JS
---

## 遍历

```js
for ... in // for...in 会把原型上的属性也遍历出来
for ... of
forEach
map
```

## 去重

```js
[...new Set(arr)]
```

```js
Array.from(new Set(arr))
```

```js
arr.filter((v,i)=>arr.indexOf(v)===i)
```

```js
// 方式4
const result = [];
const map = new Map();
for (let v of originalArray) {
    if (!map.has(v)) {
        map.set(v, true);
        result.push(v);
    }
}
console.log(result); // -> [1, 2, 3, 4, 5]

// 方式5
const result = [];
for (let v of originalArray) {
    if (!result.includes(v)) {
        result.push(v);
    }
}
console.log(res)js
```



## 扁平化

### 生成器函数

```js
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1, 2, 3, 4, 5, 6
```

### flat

arr.flat(deep)

> deep 扁平化深度

- deep 可以是 `Infinity`

### toString

```js
var arr = [1,[2,[3,4]]]
console.log(arr.toString().split(','))
// [1, 2, 3, 4]
```

### concat

```js
var arr = [1,[2,[3,4]]]
while(arr.some(v=>Array.isArray(v))){
	arr = [].concat(...arr)
}
console.log(arr);
// [1, 2, 3, 4]
```

