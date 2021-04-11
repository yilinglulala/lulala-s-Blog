---
title: promise
date: 2021-04-11
tags:

categories: 
 - ECMAScript
---

# promise

## 基础使用

```js
new Promise((resolve,reject)=>{
    if(xxx){
        resolve(data) // 成功
    }else{
        reject(e) // 失败
    }
})
```

## 三种状态

状态不可逆 ：执行中，成功，失败

![三种状态](https://gitee.com/xuyiling/gopic/raw/master/img/20210105222913.png)



## then

```js
p.then(onresolved,onrejected)
```

1. 没有return值，默认返回 `resolved` 状态的 `promise`
2. 有return 值，默认返回 `resolved` 状态的 `promise`，参数值为return 值
3. return的是 `promise` 对象

## catch

捕获失败

## reject

```js
Promise.reject(xx)
```

## axios封装

```js
axios.interceptors.response.use(
    (response)=>{
        if(response.data.err == 1){
            return Promise.reject(response.data.data)
        }
        return response.data.data
	},
    err=>{
		return Promise.reject(err);
	}
)
```

# async / await

await 后跟着promise对象



## 易错

```js
很容易做错的笔试题。

var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？j
```

