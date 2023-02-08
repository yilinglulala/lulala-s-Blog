[阮一峰koa教程](https://www.ruanyifeng.com/blog/2017/08/koa.html)

## response

| key    | 可选值 |      |
| ------ | ------ | ---- |
| path   | /      |      |
| type   | html   |      |
| body   |        |      |
| status | 404    |      |



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



## 简单的服务

```js
const koa = require("koa");
const Router = require("koa-router");
let newsData = require("./data.json");
console.log(newsData);
let app = new koa();
let router = new Router();
router.get("/", ctx => {
    ctx.body = "some value..";
})
router.get("/getList", ctx => {
    let p = ctx.query.p || 1;
    let perPage = 2;
    let formatData = newsData.data.slice((p-1)*perPage,p*perPage)

    console.log(formatData);
    ctx.body = formatData;
})
router.get("/getOvertimeHours", ctx => {
    ctx.body = {data:3};
})
app.use(router.routes()); 
app.listen(8888);
console.log("8888");

```

