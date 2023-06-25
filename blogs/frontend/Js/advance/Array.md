---
title: 前端数组
date: 2020-12-09
tags:
 - 数组
categories: 
 - JS

---



```js
const arr = ['a']
```

| 函数    |                       |                    |            |
| ------- | --------------------- | ------------------ | ---------- |
| unshift | arr.unshift(1,2) -> 2 | arr -> [1, 2, 'a'] | 从首部添加 |
| shift   | arr.shift() -> 1      | arr -> [2, 'a']    | 从首部移除 |



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

1. 利用Set 无重复项的特性

```js
[...new Set(arr)]
// 也可以用Araay.from来转为数组
Array.from(new Set(arr))
```

2. 利用过滤当前索引和首次出现索引位置一样的才保留

```js
arr.filter((v,i)=>arr.indexOf(v)===i)
```

3. 使用Map来标记是否已经含有此数据

```js
// 但是这种方法似乎更复杂了，需要多一个Map来做标记，不如直接用includes来的方便
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
const result = [];
for (let v of originalArray) {
    if (!result.includes(v)) {
        result.push(v);
    }
}
console.log(res)

// 这种思路也可以使用reduce 实现
const res = originalArray.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        pre.push(cur)
    }
},[])
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
const array = []
const fn = (arr)=>{
	for(let i = 0;i<arr.length;i++){
		if(Array.isArray(arr[i])){
			fn(arr[i])
		}else{
			array.push(arr[i])
		}
	}
}
```

```js
module.exports = function (arr) {
  return flat(arr, []);
};
function flat(arr, res) {
  var i = 0, cur;
  var len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}
```



### reduce

```js
function flatter(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>{
        Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
        // 或者这样写pre.concat(Array.isArray(cur) ?flatter(cur):cur)
    },
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
// ["1", "2", "3", "4"],有点不对劲，变成字符串了
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

### 正则

```js
let str = JSON.stringify(arr).replace(/\[|\]/g,'')
let res = JSON.parse("["+str+"]")
```

## 常用函数

### reduce

