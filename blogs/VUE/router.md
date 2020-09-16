---
title: vue-router
date: 2020-09-16
tags:
 - vue
 - router
categories: 
 - Vue
---

## 路由器

> 管理路由

```js
VueRouter// 路由器的构造函数
new VueRouter({

})	
```

## 路由

路由配置

```js
routes:[
	{
		path:xxx;
        component:xxx
		
	}
]
```

## 路由组件

### router-link

> 生成路由链接

```html
<router-link to="xxxpath"> xxxname</router-link>
```



### router-view

> 生成当前路由组件页面

```html
<router-view></router-view>
```

