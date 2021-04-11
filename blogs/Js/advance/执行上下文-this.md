---
title: 执行上下文/this
date: 2021-04-07
tags:
 
categories: 
 - JS
---



- 函数被谁调用，this就指向谁
- 没有调用者，this指向window

```js
fn() // 无调用者，this -> window

arguments[0]()// this -> arguments
```

