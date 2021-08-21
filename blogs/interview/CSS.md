---
title: CSS面试考点
date: 2021-04-07
tags:
 - 面试
categories: 
 - CSS
---



![image-20210216150743588](https://gitee.com/xuyiling/gopic/raw/master/img/20210216150750.png)CSS

- flex布局

align-self

- BFC

## 选择器权重

| 选择器                  | 权重 | 其他                                                         |
| ----------------------- | ---- | ------------------------------------------------------------ |
| !import                 |      | 权重最重，js也无法覆盖，[查看示例](http://js.jirengu.com/migoqupaza/2/edit) |
| 内联样式                | 1000 |                                                              |
| ID                      | 100  |                                                              |
| class, 属性选择器，伪类 | 10   |                                                              |
| 标签选择器，伪元素      | 1    |                                                              |
| *，>, +                 | 0    |                                                              |

> 后来居上规则

## 盒子模型

标准盒子模型

content+padding+border+margin

怪异盒子模型

content(内容+padding+border) + margin

> box-sizing:border-box