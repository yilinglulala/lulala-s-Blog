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

## call / apply / bind

```js
fn.call(obj,1,2,3) 
fn.apply(obj,[1,2,3])// 参数为数组
fn.bind(obj,[1,2,3]) // 并不立即执行
```

🍍**同**

- 都是function原型上的方法

- 都是调用函数

- 都可以改变this指向

🍍**不同**

- apply 接收的参数是数组

**📌注意**

> call 的性能会比apply好一丢丢(尤其是传参大于3个的时候)
>
> bind并不立即执行

### 🔥手写call

```js
Function.prototype.myCall = function(context, ...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
```



### 🔥手写apply

```js
Function.prototype.myApply = function(context) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let result
  if (arguments[1]) {
    result = context[fn](...arguments[1])
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result
}
```

### 🔥手写bind

```js
Function.prototype.myBind = function (context) {
  var fn = this
  var args = [...arguments].slice(1)// 第一个参数是this指向
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new fn(...args, ...arguments)
    }
    return fn.apply(context, args.concat(...arguments))
  }
}
// 使用
fn.myBind(obj,[1,2,3])
```

## 👀instanceof

```js
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
```

## 🔥防抖/节流

### **防抖**

1. 简易版

```js
// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
// 不难看出如果用户调用该函数的间隔小于 wait 的情况下，上一次的时间还未到就被清除了，并不会执行函数
```

2. 带有立即执行选项的**防抖函数**

```js
// 这个是用来获取当前时间戳的
function now() {
  return +new Date()
}
/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
function debounce (func, wait = 50, immediate = true) {
  let timer, context, args
  
  // 延迟执行函数
  const later = () => setTimeout(() => {
    // 延迟函数执行完毕，清空缓存的定时器序号
    timer = null
    // 延迟执行的情况下，函数会在延迟函数中执行
    // 使用到之前缓存的参数和上下文
    if (!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait)

  // 这里返回的函数是每次实际调用的函数
  return function(...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later()
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
    // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
    // 这样做延迟函数会重新计时
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}
```

### 节流

```js
/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数   
 */
_.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 之前的时间戳
    var previous = 0;
    // 如果 options 没传则设为空对象
    if (!options) options = {};
    // 定时器回调函数
    var later = function() {
      // 如果设置了 leading，就将 previous 设为 0
      // 用于下面函数的第一个 if 判断
      previous = options.leading === false ? 0 : _.now();
      // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      // 获得当前时间戳
      var now = _.now();
      // 首次进入前者肯定为 true
	  // 如果需要第一次不执行函数
	  // 就将上次时间戳设为当前的
      // 这样在接下来计算 remaining 的值时会大于0
      if (!previous && options.leading === false) previous = now;
      // 计算剩余时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 如果当前调用已经大于上次调用时间 + wait
      // 或者用户手动调了时间
 	  // 如果设置了 trailing，只会进入这个条件
	  // 如果没有设置 leading，那么第一次会进入这个条件
	  // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
	  // 其实还是会进入的，因为定时器的延时
	  // 并不是准确的时间，很可能你设置了2秒
	  // 但是他需要2.2秒才触发，这时候就会进入这个条件
      if (remaining <= 0 || remaining > wait) {
        // 如果存在定时器就清理掉否则会调用二次回调
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        // 判断是否设置了定时器和 trailing
	    // 没有的话就开启一个定时器
        // 并且不能不能同时设置 leading 和 trailing
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
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

### new

## 拷贝

浅拷贝

```js
// 数组可以用concat
[].concat(arr)
// 对象可以用assign
Object.assign({},obj)
// 也可以用展开运算符
[...arr]
{...obj}
```

深拷贝

```js
// 利用 WeakMap 解决循环引用
let map = new WeakMap()
function deepClone(obj) {
  if (obj instanceof Object) {
    if (map.has(obj)) {
      return map.get(obj)
    }
    let newObj
    if (obj instanceof Array) {
      newObj = []     
    } else if (obj instanceof Function) {
      newObj = function() {
        return obj.apply(this, arguments)
      }
    } else if (obj instanceof RegExp) {
      // 拼接正则
      newobj = new RegExp(obj.source, obj.flags)
    } else if (obj instanceof Date) {
      newobj = new Date(obj)
    } else {
      newObj = {}
    }
    // 克隆一份对象出来
    let desc = Object.getOwnPropertyDescriptors(obj)
    let clone = Object.create(Object.getPrototypeOf(obj), desc)
    map.set(obj, clone)
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key])
      }
    }
    return newObj
  }
  return obj
}
```



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

## 模块化



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

