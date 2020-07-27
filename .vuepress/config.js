module.exports = {
  "title": "lulala`s Blog",
  "description": "lulala`s blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 导航配置
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
            "text": "life",
            "link": "/docs/lifes/"
          },
          {
            "text": "网站导航",
            "link": "/docs/web-nav/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/yilinglulala",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/0c0fe30e0577",
            "icon": "reco-jianshu"
          }
        ]
      }
    ],
    // 侧边导航配置
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api",
        "test"
      ],
      "/docs/lifes/":[
        "music"
      ],
      "/blogs/React/":[
        "01安装",
        "02响应式数据",
        "react面试"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "学无止境" 
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xuyiling",
    "authorAvatar": "/avatar.png",
    "record": "happy",
    "startYear": "2020",
    "sidebarDepth": 4
  },
  "markdown": {
    "lineNumbers": true
  },
  // 使用插件
  "plugins":[
    // require('./public/libs/documentClick.js')
  ]
}