---
title: new
date: 2021-04-11
tags:
 
categories: 
 - JS
---

## new 做了什么？

1. 新生成了一个对象
2. 对象连接到构造函数原型上，并绑定 this
3. 执行构造函数代码
4. 返回新对象

📌 **注意**

如果构造函数返回的是引用类型，会把原结果覆盖掉

```js
function Test(name) {
  this.name = name
  console.log(this) // Test { name: 'lulala' }
  return { age: 26 }
}
const t = new Test('lulala')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined
```

## 手写new

```js
//仿写new运算符;
function myNew(constructor, ...arg){
    let obj = {}
    constructor.call(obj,...arg );
    obj.__proto__ = constructor.prototype
    return obj;
}
```

