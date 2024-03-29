---
title: JS面试考点
date: 2021-04-07
tags:
 - 面试
categories: 
 - JS
---

# 面试文章

[https://jsgodroad.com/interview/js/](https://jsgodroad.com/interview/js/)

[https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?from=logout&table=tblEnSV2PNAajtWE&view=vewJHSwJVd](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?from=logout&table=tblEnSV2PNAajtWE&view=vewJHSwJVd)

https://juejin.im/post/6864398060702760968#heading-126



## 数据类型有哪些

https://jsgodroad.com/interview/js/#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B

**`BigInt`** 是一种内置对象，它提供了一种方法来表示大于 `2^53^ - 1`的整数。这原本是 Javascript中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**`BigInt`** 可以表示任意大的整数。

NaN



## 数据类型判断

typeof

instanceof

Object.prototype.toString.call(xxx)

Array.isArray

isNaN

## 类型转换

```js
[]==![]
//过程：[]==![]  ---->   []==false   ----->   0==0   --->//true
```



## 箭头函数/ this/ new

### 箭头函数

```js
let fn = (...args)=>{
	// args = [1,2]
}
fn(1,2)
```

- 没有arguments

- 没有自己的this

- 没有prototype, 不能用作构造函数，不能被new 执行

  

### this指向

```js
document.body.onclick = function(){
    // this -> body
    [1,2].sort(function(){
        // this -> window
    })
}
```





## 深拷贝-浅拷贝

请参照文章 【深拷贝-浅拷贝】

## Event Bus

```js
class Events {
  constructor() {
    this.events = new Map();
  }

  addEvent(key, fn, isOnce, ...args) {
    const value = this.events.get(key) ? 
          this.events.get(key) : 
    	  this.events.set(key, new Map()).get(key)
    value.set(fn, (...args1) => {
        fn(...args, ...args1)
        isOnce && this.off(key, fn)
    })
  }

  on(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return
    }
    this.addEvent(key, fn, false, ...args)
  }

  fire(key, ...args) {
    if (!this.events.get(key)) {
      console.warn(`没有 ${key} 事件`);
      return;
    }
    for (let [, cb] of this.events.get(key).entries()) {
      cb(...args);
    }
  }

  off(key, fn) {
    if (this.events.get(key)) {
      this.events.get(key).delete(fn);
    }
  }

  once(key, fn, ...args) {
    this.addEvent(key, fn, true, ...args)
  }
}
```

## 闭包

> 一个函数可以访问另一个函数内部的变量

应用：防抖，节流

## 模块化

node.js common.js

AMD

ESM

## 事件循环

>1. 执行同步代码
>2. 执行完所有同步代码后且执行栈为空，判断是否有微任务需要执行
>3. 执行所有微任务且微任务队列为空
>4. 是否有必要渲染页面
>5. 执行一个宏任务

## Promise

手写promise

all

race

catch

resolve

reject

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor) {
    var _this = this
    this.state = PENDING; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    
    this.onFulfilled = [];//成功的回调
    this.onRejected = []; //失败的回调
    
    function resolve(value) {
        if(_this.state === PENDING){
            _this.state = FULFILLED
            _this.value = value
            _this.onFulfilled.forEach(fn => fn(value))
        }
    }
    function reject(reason) {
        if(_this.state === PENDING){
            _this.state=REJECTED
            _this.reason = reason
            _this.onRejected.forEach(fn=>{
                fn(reason)
            })
        }
    }
    
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    
    //_this是promise1的实例对象
    var _this = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    var promise2 = new Promise((resolve, reject)=>{
        if(_this.state === FULFILLED){
            let x = onFulfilled(_this.value)
            resolvePromise(promise2, x, resolve, reject)
        } else if(_this.state === REJECTED){
            let x = onRejected(_this.reason)
            resolvePromise(promise2, x ,resolve, reject)
        } else if(_this.state === PENDING){
            _this.onFulfilled.push(()=>{
                let x = onFulfilled(_this.value)
                resolvePromise(promise2, x, resolve, reject)
            })
            _this.onRejected.push(()=>{
                let x = onRejected(_this.reason)
                resolvePromise(promise2, x ,resolve, reject)
            })
        }
    })
    
    return promise2
};
```



## 无缝轮播图思路



![image-20210427163612416](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddff76b400834f6d9669db19218d0c3d~tplv-k3u1fbpfcp-zoom-1.image)![image-20210429210441521](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3aa25e3537dd4d3aa3b06032283803a9~tplv-k3u1fbpfcp-zoom-1.image)

![image-20210430232915691](https://gitee.com/xuyiling/gopic/raw/master/img/20210430232915.png)

- 

## 性能优化

### vue

- 冻结对象
- 懒加载

  





## 算法

1. 一个只包含()[]{}的字符串，判断是否合法，如``{()}``,``(){}``合法，``){}``不合法

```js
let left=["(","[","{"],
    right=[")","]","}"]
function check(str){
    if(str.length%2!==0||legt.indexOf(str[0])===-1){return false}
    let stack = [str[0]]
    str.slice(1).split("").forEach(v => {
        let pre = stack[stack.length-1]
        if(pre!==undefined &&left.indexOf(pre)===right.indexOf(v)){
            stack.pop()
        }else{
            stack.push(v)
        }
    });
    return stack.length===0
}
// let res = check("[]{}")
```



## 垃圾回收

- 是什么

垃圾回收是指当我们创建的对象不再被需要的时候，释放内存空间，以便内存空间被再次利用

- 为什么（必要性）

如果我们不进行垃圾回收，js解释器会消耗掉系统中所有可用的内存，造成系统崩溃

- 怎么做

  - 标记清除

    

  - 引用计数

## typescript 和 javascript 的区别

- （分别是什么）

​	JavaScript 是一种轻量级的解释性脚本语言。

​	TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

- 相同点
- 不同点
  - ts 是js 对象模型的一种扩展
  - ts 有明确的类型要求，javascript 是弱类型语言
  - ts 需要编译成 js

- 各自的优势

js:

1. 发展较早，较成熟

2. 不需要编译

3. 更灵活

ts:

1. 类型检查，可以在编程时避免一些因类型问题导致的问题

2. 便于维护

- 使用场景

大型项目适合ts

​	

## 