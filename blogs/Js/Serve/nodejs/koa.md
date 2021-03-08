## 常用模块



```js
const views = require("koa-views")
app.use(views(__dirname+"/views"),{
    extension:"pug"
})

const static = require("koa-static")
app.use(static(__dirname+"/static"))

const Router = require("koa-router")
let router = new Router()
router.get("xxx",(ctx)=>{xxx})
```

