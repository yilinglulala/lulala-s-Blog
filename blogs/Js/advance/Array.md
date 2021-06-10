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
reduce
filter

```

## 去重

1. 利用Set 的特性

```js
[...new Set(arr)]
```

```js
Array.from(new Set(arr))
```

2. 利用过滤当前索引和首次出现索引位置一样的才保留

```js
arr.filter((v,i)=>arr.indexOf(v)===i)
```

3. 

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
```

4. 遍历原数组，新数组没有的值才往里push,最后返回新数组

```js
// 方式5
const result = [];
for (let v of originalArray) {
    if (!result.includes(v)) {
        result.push(v);
    }
}
console.log(res)
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

### 普通递归

```js
function flatter(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );
}
// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
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

