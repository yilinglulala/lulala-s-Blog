---
title: ES6温故知新
date: 2020-12-09
tags:
 - ES6
categories: 
 - Js
---

## var / let / const

| 类型  |                          | 作用域                             |                            |                            |
| ----- | ------------------------ | ---------------------------------- | -------------------------- | -------------------------- |
| var   | 可以重复声明             | 全局作用域，函数作用域             | 可以先使用再声明，变量提升 |                            |
| let   | 同一作用域，不可重复声明 | 全局作用域，函数作用域，块级作用域 | 必须先声明再使用           |                            |
| const |                          |                                    |                            | 声明时必须赋值，且不可改变 |

## 块级作用域

可以理解为{}就是一个块

## 迭代

> 对象不是可迭代对象

可迭代对象可用 `for in` `for of` 遍历

迭代对象是实现了`Symbol.iterator`方法的对象

```js
// 将 Object 变成可迭代对象
obj[Symbo1.iterator] = function () {
    //迭代协议
    let values = Object.values(obj); 
    let index = 0;
    return {
        next() {
            if (index >= values.length) {
                return {
                    done: true
                }
            } else {
                return {
                    done: false,
                    value: values[index++]
                }
            }
        }
    }
}
```



## 解构赋值

交换两个值

```js
let [a,b] = [b,a]
```

只有可迭代对象可以解构

```js
const [a,b] = 123//报错，123不是可迭代对象
```

## 展开运算符

### 剩余参数

```js
let [a,...rest] = [1,2,3,4]
//a->1
//rest->[2,3,4]
```

## Set 

去重

```js
let newarr = [...new Set(arr)]
let set = new Set()
```

| 名称             | 说明 | 返回        |
| ---------------- | ---- | ----------- |
| size             | 个数 |             |
| set.add()        | 新增 | set对象本身 |
| set.delete( xx ) | 删除 | boolean     |
| set.clear()      | 清空 | undefined   |
| set.has()        | 含有 | boolean     |

## Map

```js
let arr = [
	['a',1],
	['b',2]
]
let map = new Map(arr)
```

| 名称             | 说明 | 返回        |
| ---------------- | ---- | ----------- |
| size             | 个数 |             |
| map.set(key,val) | 新增 | set对象本身 |
| map.delete( key) | 删除 | boolean     |
| map.clear()      | 清空 | undefined   |
| map.has(key)     | 含有 | boolean     |
| map.get(key)     |      |             |

## 箭头函数

本身没有 **this** ,不能用作构造函数，

指向是其【声明时】所在的作用域的this

```js
document.onclick = function(){
    let fn = ()=>{
        console.log(this);// document，声明时所在的作用域中this 指向document
    };
    function fn1(){
        console.log(this);// window
    }
    fn();
    fn1()
}
```

没有 **arguments**

```js
let fn = (...arg)=>{
	//arg->[1,2,3,4]
}
fn(1,2,3,4)
```

## 数组方法

Array.from(arrLike,mapFn)

把类数组 (有下标，有length ) 转为数组

Array.of

```js
Array.of(1,2,3,4)//[1,2,3,4]
```

Array.isArray

```js
Array.isArray(1)
//false
Array.isArray([])
//true
```

| 新增方法                 |                                                              |                                          |
| ------------------------ | ------------------------------------------------------------ | ---------------------------------------- |
| arr.find                 | 数组中第一个满足所提供测试函数的元素的值，否则返回undefined  |                                          |
| arr.findIndex            | 数组中第一个满足所提供测试函数的元素的索引值                 |                                          |
| arr.flat(deep)           | 扁平化                                                       | deep为扁平深度，也可以Ifinate            |
| arr.flatMap()            | 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map和深度值1的 flat 几乎相同，但 flatMap通常在合并成一种方法的效率稍微高一些 | 一个包含将数组与子数组中所有元素的新数组 |
| arr.fill(val,start，end) | 填充                                                         |                                          |
| arr.includes(val,start)  |                                                              | @return boolean                          |



```js
let arr = [
	["小明", "18"],["小刚", "18"]
];
console. log( arr.flat());// ["小明", "18","小刚", "18"]

```

## 字符串方法

| 新增方法             |      | 返回值  |
| -------------------- | ---- | ------- |
| includes             |      | boolean |
| startsWith(val,from) |      | boolean |
| endsWith(str,from)   |      | boolean |
| repeat()             |      |         |

## 对象方法

is,比较两个值是否相等

与三等的区别在于NaN,+0-0

```js
NaN===NaN
//false
Object.is(NaN,NaN)
//true

+0===-0
//true
Object.is(+0,-0)
//false
```

```js
Object.is(1,1)
//true
Object.is({},{})
//false
```

## 同步 / 异步

-  同步阻塞
- 异步非阻塞





## Babel

[babel官网](https://www.babeljs.cn/)