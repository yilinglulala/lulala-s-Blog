---
title: CSS - css向js传参
date: 2020-10-22
tags:
 - css
 - js
 - 传参
categories: 
 - Css
 - Js
---

[原文](https://www.zhangxinxu.com/wordpress/2020/02/css-params-to-js/?shrink=1)

## 1. 使用伪元素的content

```js
@media (any-hover: none) {
    body::before {
        content: 'hoverNone';
        display: none;
    }
}
```

此时就可以通过JS代码获取body伪元素传递的信息是什么了：

```js
var strContent = getComputedStyle(document.body, '::before').content;
```

优点：兼容性相对较好，

缺点：传递的参数值的数量是有限的，如果我们想一次性传多个值，就有些捉襟见肘



## 2. 通过自定义属性

```css
:root {
    --mode: 'unknown';
}
@media (prefers-color-scheme: dark) {
    /* 黑暗模式 */
    :root {
         --mode: 'dark';
    }
}
@media (prefers-color-scheme: light) {
    /* 浅色主题 */
    :root {
         --mode: 'light';
    }
}
```

获取

```js
var mode = getComputedStyle(document.documentElement).getPropertyValue('--mode').trim();
```

