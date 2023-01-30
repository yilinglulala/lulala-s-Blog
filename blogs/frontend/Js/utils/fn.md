---
title: 函数
date: 2021-06-01
tags:
 - 工具函数
categories: 
 - JS
---



## compose

组合函数

[掘金](https://juejin.cn/post/6968713283884974088)

```js
function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    return fn.reduce(
        (pre, cur) =>{
            return (...args) =>
            pre(cur(...args))
        }
    );
}
```

## 用setTimeout模拟setInterval

```js
function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  mySettimeout.cancel = () => {
    clearTimeout(timer);
  };
}
// 使用
// mySettimeout(() => {
//   console.log(1);
// }, 1000);

// setTimeout(() => {
//   mySettimeout.cancel();
// }, 5000);

```

我觉得可以写成类的形式，方便复用

```js
class mySetTimeout {
    constructor(fn, t) {
        this.fn = fn
        this.t = t
        this.timer = null
        
        this.interval()
    }
	interval() {
        this.fn()
        // 这里需要注意用bind 指定上下文，否则thiszhi'xi
        this.timer = setTimeout(this.interval.bind(this), this.t)
    }
    cancel() {
    	clearTimeout(this.timer)
    }
}
// 使用
let t1 = new mySetTimeout(()=>{console.log(+new Date());},1000)
let t2 = new mySetTimeout(()=>{console.log(+new Date());},1000)
```

#### 有并行限制的 Promise 调度器

```js
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();

```

