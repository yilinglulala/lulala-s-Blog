---
title: 小程序准备环境
date: 2021-04-15
tags:
 - 小程序
categories: 
 - 小程序
---



## 环境准备

### 微信公众平台

登录后会有ID 和密钥

| AppID(小程序ID)       |      |
| --------------------- | ---- |
| AppSecret(小程序密钥) |      |

### 微信开发者工具

- 输入项目名称
- 选择路径
- AppID

### 目录结构

![image-20210415223457907](https://gitee.com/xuyiling/gopic/raw/master/img/20210415223457.png)

pages下面一个文件夹对应一个页面

| 文件     | 说明     |                                                              |
| -------- | -------- | ------------------------------------------------------------ |
| app.json | 全局配置 | 颜色只能是16进制![image-20210415224524118](https://gitee.com/xuyiling/gopic/raw/master/img/20210415224524.png) |
| app.wxss | 全局样式 |                                                              |
| pages    | 页面文件 |                                                              |
| app.js   | 全局逻辑 |                                                              |



- 文档

[小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## pages

每个page下都有四个文件

- name.wxml

- name.wxss

- name.js

- name.json

  相当于全局的window的配置

### 新增页面

1. 方式1

   - 新建文件夹

   - 右键新建page，app.json - pages 会自动添加配置

2. 方式2

   在app.json - pages ,手动添加配置



### 跳转页面

```js
wx.navigateTo({
      url: '../detail/detail'
})
// 会有层级关系，最多可以有四层，左上角有返回上一页按钮
```



## 底部 `tab` 栏配置

框架 - 小程序配置 - 全局配置 - tabBar

```js
"tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/img/icon/home.png",
      "selectedIconPath": "/img/icon/home-select.png"
      
    },{
      "pagePath": "pages/detail/detail",
      "text": "详情",
      "iconPath": "/img/icon/detail.png",
      "selectedIconPath": "/img/icon/detail-select.png"
    }]
  }
```

**注意**

`tabBar` 配置的页面就不能通过 `navigateTo` 进行页面跳转

## 组件

| 组件名 | 说明      | 注意首字母都是小写 |
| ------ | --------- | ------------------ |
| view   | 相当于div |                    |
| text   | 文本      |                    |
|        |           |                    |

### image

1. pages 文件夹同级新建 `img` 文件夹
2. - 相对路径 `../../img/xxx.png`
   - 绝对路径 `/img/xxx.png`

### button

| 属性      | 说明                   |      |
| --------- | ---------------------- | ---- |
| open-type | contact(打开客服会话） |      |
|           | getUserInfo            |      |
| type      | primary(绿色)          |      |

#### 事件绑定

```js
bindtap="fn"// 注意不能加(),否则会报错
catchtap    // 会阻止冒泡
```



## wxss

- 相当于css

- 推荐flex布局

### 单位rpx

有点像rem

满屏是750rpx

![image-20210416203309157](https://gitee.com/xuyiling/gopic/raw/master/img/20210416203309.png)

## 模板

`pages` 同级新建 `templates` 文件夹

1. 新建文件A.wxml

   ```html
   <template name="A">
     <text>模板A</text>
   </template>
   ```

   注意要定义 name 属性

2. 引用1

   ```html
   <import src="/templates/A.wxml"></import>
   <template is="A"></template>
   ```

   is 要和模板的name属性对应

3. 引用2

   ```html
   <include src="/templates/A.wxml"></include>
   ```

   include 方式引入非 template 标签的部分

4. 

## 其他

微信对话开放平台