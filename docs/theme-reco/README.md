---
title: theme-reco
date: 2020-05-29
---

## 在Docs下添加分类

1. 在`.vuepress `- `config.js` 中

```js
"nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "reco",
            "link": "/docs/theme-reco/"
          },
          {
            "text": "lifes",//这边添加分类
            "link": "/docs/lifes/"
          }
       }
]
```

2. 在docs文件夹底下添加对应的文件夹

   ![docs-add](/images/docs-add.png)

3. 注意需要加上README.md

   否则会是查无页面

## 图片路径

图片应放在.vuepress - public 下

图片的默认路径会是public

例如我的图片放在.vuepress - public 下，我的图片就应该这样写`![docs-add](/images/docs-add.png)`
![](/images/docs-reco1.png)