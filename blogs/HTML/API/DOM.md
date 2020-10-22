---
title: HTML - DOM api
date: 2020-10-22
tags:
 - HTML
 - DOM
categories: 
 - HTML
---

## importNode

### 定义和用法

importNode() 方法把一个节点从另一个文档复制到该文档以便应用。

imported 节点可以试试任何节点类型。

如果 第二个值设置为 *true*，那么还要复制该节点的所有子孙节点。

### 语法

```js
document.importNode(node,deep)
```

