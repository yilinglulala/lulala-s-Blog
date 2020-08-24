module.exports = {
  "title": "lulala`s Blog",
  "description": "lulala`s blog",
  "base":"/lulala-s-Blog/",
  // "dest": "public",
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
    "lastUpdated": "Last Updated",// 文档更新时间：每个文件git最后提交的时间
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
    // require('../libs/documentClick.js')
    ["@vuepress-yard/vuepress-plugin-window",{
      title: "欢迎关注我的公众号",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
      contentInfo: {
        // title: "欢迎关注我的公众号",
        needImg: true,
        imgUrl: "https://linmsen.oss-cn-hangzhou.aliyuncs.com/blog/picture/wx_8.jpg",
        // content: "喜欢博皮可以到博客园关注教程",
        contentStyle: ""
      },
      bottomInfo: {
        btnText: '别点我',
        linkTo: ''
      },
      closeOnce: false
    }],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    ////先安装在配置， npm i vuepress-plugin-meting -D
    ['meting', {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        // 网易
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "393834289",
      },          
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded:true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.3,
        // 关闭歌词显示
        lrcType: 1
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }]
  ]
}