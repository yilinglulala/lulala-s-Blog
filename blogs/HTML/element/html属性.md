---
title: HTML - attr
date: 2020-10-28
tags:
 - HTML
categories: 
 - HTML
---

## contenteditable

```html
<div contenteditable="true"></div>
```

使元素变得可编辑

[contenteditable实例](https://html5-tips.netlify.app/content-editable/index.html)



## data-*

```html
<div data-name="myname" data-type="mytype" id="mydiv"></div>
```

```js
document.querySelector('#mydiv').dataset // ->{name: "myname", type: "mytype"} 【注意】这里的key不包含data-
```

