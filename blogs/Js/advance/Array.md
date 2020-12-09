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