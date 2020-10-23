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

注意是 `routes`,不是 `routers`

```js
routes:[
	{
		path:xxx;
        component:xxx
		
	}
]
```

### router - index.js

| 属性      | 描述     |
| --------- | -------- |
| path      | 路由     |
| component | 对应组件 |
| redirect  | 重定向   |

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/about'
import Home from '../components/home'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {path:'/',redirect:'home'},// 重定向
        {path:'/about',component:About},
        {path:'/home', component:Home},
    ]
})
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

## 通过路由传参

### params:star:

router中定义

```js
{path:'home1/:name',component:home1}
```

传值

```vue
<router-link :to="`/home/home1/${name}`">home1</router-link>
```

```js
// 浏览器路由
//http://localhost:8080/#/home/home1/1
```

组件中取值

```vue
{{$route.params.name}}
```

`$route` 当前路由

`$router` 路由器

### props:star:

```
<router-view :msg="xxx"></router-view>
```

## 编程式导航

[编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

| 标识 | 查询参数 |
| ---- | -------- |
| path | query    |
| name | params   |

| 标识    | 使用                                              |
| ------- | ------------------------------------------------- |
| replace | `router.replace(location, onComplete?, onAbort?)` |
| go      | `router.go(n)`                                    |
|         |                                                   |

