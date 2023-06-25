---
title: 函数
date: 2021-06-01
tags:
 - 工具函数
categories: 
 - JS
---

## Cookies

```js
export default class Cookies {
    /***
     * 添加/修改指定Cookie
     * @param key cookie键
     * @param value cookie值
     * @param expiresDays 过期时间（单位：天）
     */
    static setCookie(key:string, value:any, expiresDays = 10):void {
        //设置之前先删除
        Cookies.deleteCookie(key);
        const date = new Date();
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
        document.cookie = key + "=" + value + "; expires=" + date.toUTCString() + ";path=/";
        document.cookie;
    }

    /***
     *  获取指定Cookie
     * @param key cookie键
     * @return cookie值
     */
    static getCookie(key:string):string {
        let strCookie = document.cookie;
        let arrCookie = strCookie.split("; ");
        for (let i = 0; i < arrCookie.length; i++) {
            const arr = arrCookie[i].split("=");
            if (arr[0] === key) {
                return arr[1];
            }
        }
        return "";
    }

    /***
     * 删除指定Cookie
     * @param key cookie键
     */
    static deleteCookie(key:string):void {
        let date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = key + "=v; expires=" + date.toUTCString() + ";path=/";
    }
}
```

## Constant

```js
class Constant {
    /***
     * 项目中的对象源
     {
     	【value】: 【text】
     }
     */
    public source = {};

    constructor(source) {
        this.source = source || {};
    }

    /***
     *  获取路径下的值
     * @param path 路径名称
     * @param key 路径key
     * @param defaultValue 默认值 -
     * ```
     * import constant from '@/utils/constant';
     * console.log(constant.getFilterText('account.status', 'IDLE'));
     * ```
     */
    getFilterText(path, key, defaultValue?:any) {
        return path && get(this.source, [...path.split('.'), key], defaultValue) || '-';
    }

    /***
     * 通过路径生成对应的对象格式
     * @param path 路径名称
     * ```
     * console.log(constant.getFilter('account.status'));
     * ```
     */
    getFilter(path, textKey="text") {
        const data = get(this.source, path, {});
        return Object.entries(data).map(([value, text]) => {
            // 支持数字、boolean类型
            if(/^[0-9]*$/.test(value) || value === 'true' || value === 'false'){
                value = eval(value);
            }
            return {[textKey]:text, value};
        });
    }
}

```



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

## 有并行限制的 Promise 调度器

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

