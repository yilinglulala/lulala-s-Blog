---
title: CSS面试考点
date: 2021-04-07
tags:
 - 面试
categories: 
 - CSS
---



![image-20210216150743588](https://gitee.com/xuyiling/gopic/raw/master/img/20210216150750.png)

## flex布局

align-self

## BFC

margin 纵向重叠

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

- 改变盒子模型的方法

> box-sizing:border-box

## 浮动

1. 破坏性

脱离文档流，会使得父节点高度坍塌

2. 包裹性
3. 值不为none的情况下会出发BFC

### 清除浮动

1. 在浮动元素的父元素加上clearfix类

```css
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}
```

2. 在浮动元素后加空余节点

```html
<div class="float"></div>
<div class="clear"></div>
```

```css
.clear{
	clear:both
}
```

## 回流/重绘