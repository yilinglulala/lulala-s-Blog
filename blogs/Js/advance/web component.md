---
title: web component
date: 2020-07-26
tags:
 - web component
categories: 
 - JS
---

[阮一峰 - web component](http://www.ruanyifeng.com/blog/2019/08/web_components.html)

[css-tricks - web component](https://css-tricks.com/a-bit-on-web-component-libraries/)

[fast](https://fast.design/docs/introduction/#where-should-i-start)

## 自定义元素

 自定义元素的名称必须包含 **连词线**，用与区别原生的 HTML 元素。所以，`<user-card>` 不能写成 `<userCard>`

### 定义

```js
class UserCard extends HTMLElement {
  constructor() {
    super();
  }
}
```

### 挂载

```js
window.customElements.define('user-card', UserCard);
```

