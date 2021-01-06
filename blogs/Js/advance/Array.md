---
title: 前端数组
date: 2020-12-09
tags:
 - 数组
categories: 
 - Js
---

## 扁平化

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

## 浅拷贝

let arr

![image-20200908210922338](C:\Users\xuyiling\AppData\Roaming\Typora\typora-user-images\image-20200908210922338.png)

## 深拷贝

### JSON.parse(JSON.stringify(xxx))

缺点：

1. function ，undefined等无法拷贝

### 递归

```js
function deepcopy(obj) {
    let newobj = Array.isArray(obj) ? [] : {}; 
    // 方式2：let newobj = obj.constructor()
    for (let i in obj) {
        if(obj.hasOwnProperty(i)){
            if (typeof obj[i] === "object" && obj!==null) {
                newObj[i] = deepCopy(obj[i]);
            } else {
                newobj[i] = obj[i]
            }
        }
    }
    return newObj;
}
```

注意：

> for...in 会把原型上的属性也遍历出来
>
> obj.hasOwnProperty(key) 可以用这个方法判断是否是自身属性