---
title: HTML - template
date: 2020-10-22
tags:
 - HTML
categories: 
 - HTML
---

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)

## 兼容性

![image-20201022104755979](https://gitee.com/xuyiling/gopic/raw/master/img/20201022104756.png)



## 检测是否支持template

```js
if ('content' in document.createElement('template')) {
    // 支持
}
```



## html 变成 js模板

[原文](https://www.zhangxinxu.com/wordpress/2020/10/es6-html-template-literal/)

:::dangerous

IE11不支持

:::

**html**  :kissing_smiling_eyes:

> html中还是正常的书写，仅仅是在需要替换html的地方加上<template></template>

```html
<table id="tableMix" class="ui-table table">
<thead>
  <tr>
    <th width="20"><input type="checkbox"></th>
    <th>文章标题</th>
    <th width="22%">发布时间</th>
    <th width="15%" align="right">评论数</th>
  </tr>
</thead>
<tbody>
<!-- 注意这里 -->
<template>
${data.map(function (obj, index) {
  return `<tr>
    <td><input type="checkbox" value="${obj.id}"></td>
    <td><div class="ell">${obj.title}</div></td>
    <td>${obj.time}</td>
    <td align="right">${obj.comment}</td>
  </tr>`;
}).join('')}
</template>
<!-- 注意这里 -->
</tbody>
</table>
```

**js** :baby_chick:

> 在字符串原型上添加解析方法

```js
/**
 * Convert a string to a template-string
 * @param  {Object} params 模板数据
 * @return {String}        模板字符串语法解析后的字符串
 */
String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const vals = Object.values(params);

    return new Function(...names, `return \`${this}\`;`)(...vals);
};


```

> 业务代码

```js
// 业务处理代码
var eleTbody = document.querySelector('#tableMix tbody'); // 获取tbody元素
var strTemplate = eleTbody.querySelector('template').innerHTML;// 获取到template里的原内容
// 获取数据
fetch('./ajax-article-list.php').then(res => {
    return res.json();    
}).then(json => {
    eleTbody.innerHTML = strTemplate.interpolate(json);// 把tbody 里面的html 替换成经过解析的html内容    
});
```

