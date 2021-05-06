---
title: CSS 新属性
date: 2020-07-26
tags:
 - css
categories: 
 - CSS
---

## background

![image-20200818161516741](https://gitee.com/xuyiling/gopic/raw/master/img/20200818161523.png)

### background-clip：背景剪切

padding-box

如: 边框半透明，希望边框背景是父节点的颜色时

### background-image：背景图片

支持背景图片渐变 [jsbin](http://js.jirengu.com/sonabatayu/3/edit)

## box-shadow

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

[多重边框](http://js.jirengu.com/qosunoxise/1/edit?html,css,output)

```css
/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
```

## overflow

### overflow-anchor：滚动锚点

[张鑫旭](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/?shrink=1)

```css
overflow-anchor: auto | none
```

| 属性 | 说明                         | 备注 |
| ---- | ---------------------------- | ---- |
| auto | 浏览器自己决定滚动锚定的行为 | 默认 |
| none | 禁止滚动锚定的行为           |      |

## transform

### transform-origin：变形原点

更改一个元素变形的原点

```css
transform-origin: left;
```