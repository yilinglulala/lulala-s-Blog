---
title: VUE面试考点
date: 2021-04-07
tags:
 - 面试
categories: 
 - VUE
---

- 概念题

是什么，为什么，怎么办

- a,和b区别题

a和b分别是啥，相同点，区别点，什么场景用什么特性

# vue

构建用户界面的**渐进式**javascript框架

渐进式：自底向上逐层的应用。简单应用可以只使用轻量的核心库，复杂应用可以引入各种vue插件

## vue优点

1. 渐进式轻量级框架
2. 采用组件化模式，便于代码复用和代码维护
3. 数据驱动，只需关系数据变化，减少DOM的操作
4. 使用虚拟DOM+diff算法，尽量复用DOM节点
5. 简易上手，文档无障碍，生态丰富

## 命名

组件：大驼峰

## key的作用

需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。
作用主要是为了高效的更新虚拟DOM。



## 为什么data需要是函数

因为如果是对象的话，复用组件的data属性会共用一个对象，就会相互影响。

如果是函数，每次复用都会生成一个新的对象，不会相互影响



## v-for和v-if的优先级

结论：v-for的优先级比较高

因此应该尽量避免v-for和v-if同时使用

可以在computed属性中先将数据过滤出来

## v-show和v-if的区别

**同：**

两者都可以控制元素的显示隐藏

**不同：**

v-show是通过`display:none`实现，文档中依然可以查找到该元素

v-if将元素从文档中添加或者移除元素，无法查找到。因此v-if的销毁和创建比较耗费性能

**场景：**

如果需要频繁切换显示隐藏的可以考虑用`v-show`,反之考虑用`v-if`

## watch和computed区别

computed不能开启异步任务

computed:
　　　　当一个属性受多个属性影响的时候就需要用到computed
　　　　最典型的栗子： 购物车商品结算的时候
watch:
　　　　当一条数据影响多条数据的时候就需要用watch
　　　　栗子：搜索数据

## new Vue做了什么

1. 首先初始化了生命周期（初始化一些vue实例上的参数）

2. 初始化事件监听器（如：$on $off）

3. 初始化render函数（模板渲染函数）

4. 调用beforeCreate钩子函数

5. 初始化 inject 函数

6. initState，初始化组件的各种状态（重要，响应式就在这里进行处理）

7. 初始化 provide 函数

8. 调用created钩子函数

9. beforemounted

10. 挂在到真实DOM

11. mouted

## 响应式原理

 Object.defineProperty()方法，进行数据劫持

## v-model原理

v-model是双向绑定的语法糖，

1. v-bind:value="",
2. v-on:input=""

## MVVM 框架是什么

M, Model 模型对应data中的数据

V，view视图：模板

VM，viewModel 视图对象，Vue的实例对象

## MVVM和MVC的区别



## 虚拟DOM是什么

真实DOM 的描述，本质也是一个对象

## diff算法



## :baby_chick: $nextTick是什么

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

https://segmentfault.com/a/1190000012861862

当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，
你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功

## keep-alive是什么

Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

:flags:

## 父子组件通信

- 父 -> 子

props

- 子->父

$emit

## Vue生命周期



# vuex

是什么

> 是状态管理

为什么

1. 当作缓存
2. 不同组件共用

怎么做

> State、 Getter、Mutation 、Action、 :fire:Module



# vue-router

## 懒加载

:flags:vue异步组件技术 

()=>import("xxx")