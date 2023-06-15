## 同时开启前端和node服务

`package.json`

```json
{
	"scripts": {
        "serve": "cross-env NODE_ENV=dev npm-run-all --parallel server dev", 
        "server": "nodemon server/app.js",
        "dev": "vite",
    },
    "devDependencies": {
        "nodemon": "^2.0.4",
        "cross-env": "^7.0.3",
        "npm-run-all": "^4.1.5",
    }
}
```

配置完之后执行 `npm run serve`



