---
title: vue基础
date: 2020-09-03
tags:
 - vue
 - 基础
categories: 
 - VUE
---



## 事件修饰符

| 描述         | code                    | 原生写法            |
| ------------ | ----------------------- | ------------------- |
| 阻止事件冒泡 | @click.stop="testFn"    | e.stopPropagation() |
| 阻止默认行为 | @click.prevent="testFn" | e.preventDefault()  |

## 按键修饰符

| code                               | 描述             | 原生写法                |
| ---------------------------------- | ---------------- | ----------------------- |
| @keyup.13="xxx",@keyup.enter="xxx" | 回车键盘弹起事件 | if(e.keycode===13){xxx} |
| @keyup.space="xxx"                 | 空格键弹起事件   |                         |

## 生命周期

destroy

```js
vm.$destory()
```

初始化 - beforeCreated - created - 找el - 找template - beforeMouted - 把模板替换好插入文档 - mouted

## 动画



## 过滤器

```js
Vue.filter('dateFormat',(value, format="YYYY-MM-DD HH:mm:ss")=>{
  return moment(value).format(format)
})
```

```html
<div>{{ date | dateFormat}}</div>
```

## 指令

### 内置指令

v-cloak,防止闪烁，配合css使用

```css
[v-cloak]{
	display:none
}
```

### 自定义指令

#### 全局

```js
Vue.directive('name',(el,binding)=>{
	// binding.value
})
```

#### 局部

```js
directives:function(el,binding){
	// do something
}
```



- 数据在哪个组件更新数据的方法就应该写在哪个组件
- 组件通信可以传递函数
- `mouseenter/mouseleve` VS  `mouseover/mouseout`
- 全选逻辑可以写在computed,set/get








