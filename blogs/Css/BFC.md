---
title: BFC
date: 2021-04-11
tags:
- css
categories: 
 - CSS
---



[10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)

## 三种定位方案

1. 普通流 (normal flow) 

   > 所有元素默认都是普通流定位

2. 浮动 (float)

   > 在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。

3. 绝对定位 (absolute position)

## BFC是什么

> Formatting context(格式化上下文) ，它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

## BFC触发条件

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

## BFC应用

- 防止margin 重叠
- 清除高度塌陷
- 阻止被浮动元素覆盖

