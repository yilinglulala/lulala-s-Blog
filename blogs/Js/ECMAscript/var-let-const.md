---
title: 代码规范
date: 2021-04-07
tags:

categories: 
 - ECMAScript
---





[阮一峰 ES6/let](https://es6.ruanyifeng.com/#docs/let)

## var / let / const比较

| 类型  |                          | 作用域                             |                            |                            |
| ----- | ------------------------ | ---------------------------------- | -------------------------- | -------------------------- |
| var   | 可以重复声明             | 全局作用域，函数作用域             | 可以先使用再声明，变量提升 |                            |
| let   | 同一作用域，不可重复声明 | 全局作用域，函数作用域，块级作用域 | 必须先声明再使用           |                            |
| const |                          |                                    |                            | 声明时必须赋值，且不可改变 |

## var

存在 **变量提升**

## let

let声明的变量只在它所在的代码块有效，**块级作用域**

### 特性

- 不存在变量提升
- 暂时性死区
- 不允许重复声明
- 块级作用域

1.  不存在变量提升，
   应先声明后使用，否则报错

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

2. 暂时性死区
   只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）该区域，不再受外部的影响。
   如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

3. 不允许重复声明

```js
// 在同一个作用域中，不能重复定义
let a = 1
let a = 2 // Identifier 'a' has already been declared
```

4. 块级作用域

```js
console.log(a) //Uncaught ReferenceError: a is not defined
if(true){
    let a = 1
}
```

### 注意

#### 循环条件和循环体中的作用域

for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```js
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```

#### typeof不再是一个百分之百安全的操作。

```js
typeof x; // ReferenceError
let x;
```

#### 隐藏的死区

```js
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错，执行x=y时，y形成了暂时性死区，但是又使用到它
```

## const

1.  一旦声明常量值不能改变
2.  声明时要赋值

## 块级作用域

可以理解为{}就是一个块



## ES6 声明变量的六种方法
>ES5 只有两种声明变量的方法：``var命令``和``function``命令。
>ES6 添加``let``和``const``命令,``import``命令和``class``命令。
>所以，ES6 一共有 6 种声明变量的方法。


## 顶层对象
ES5 之中，顶层对象的属性与全局变量是等价的。
ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
```js
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```
>[ES2020](https://github.com/tc39/proposal-global) 在语言标准的层面，引入`globalThis`作为顶层对象
