---
title: deno
date: 2020-07-31
tags:
 - deno
categories: 
 - Js
---

[阮一峰](http://www.ruanyifeng.com/blog/2020/01/deno-intro.html)

[deno中文手册](https://manual.deno.js.cn/)

[deno API](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)

## 安装

window系统，一直没有安装成功，知乎上找到这篇教程，终于安装成功了。

[Windows中使用PowerShell安装deno](https://zhuanlan.zhihu.com/p/143002371)

1.  `win + R`

2.  `cmd`

3. `powershell`, 回车

   get-help 测试下是否进入了PowerShell环境 

4. ```rb
   iwr https://deno.land/x/install/install.ps1 -useb | iex
   ```

   `deno --help`测试是否安装成功

## 简单应用

### 线上应用

这是官网上实例

```sh
deno run https://deno.land/std@0.63.0/examples/welcome.ts
```

### 本地应用

```js
// 创建文件 /test.ts
// 不需要像node一样去npm，这里直接引入
import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
// 构建服务，设置端口
const s = serve({ port: 8000 });
// 这里是直接返回
for await (const req of s) {
    req.respond({ body: "Hello World\n" });
}
```

```sh
deno run F:/work/frontEnd/wiseidc/test.ts
```

但是运行到最后，权限拒绝了，是因为安全沙箱，我们需要添加标志 `--allow-net`

## 安全沙箱

 防止程序做一些你不允许的事情 ，除非显式允许

```blitzbasic
deno run --allow-net F:/work/frontEnd/wiseidc/test.ts
```

其他标志允许 Deno 解锁其他功能，如下所示：

- `--allow-env` ：允许访问环境变量；
- `--allow-hrtime` ：允许高分辨率时间测量；
- `--allow-net=` ：允许网络访问；
- `--allow-plugin` ：允许加载插件；
- `--allow-read=` ：允许文件系统读取权限；
- `--allow-run` ：允许运行子进程；
- `--allow-write=` ：允许文件系统写入访问；
- `--allow-all` ：允许所有权限(与`-A`相同)。

其中，`net`、`read` 和 `write` 的权限可以是细化的。例如，你可以使用 `--allow-read=/dev`，允许从特定文件夹中读取

## 格式化代码

 运行 `deno fmt app.ts`，它就会执行正确的代码格式化，包括自动加上缺失的分号 

## 标准库

尽管 Deno 还很年轻，但它的标准库仍然很庞大。这包括：

- `archive` ：tar 文件归档的实用程序
- `async` ：异步工具
- `bytes` ：帮助器来操作字节切片
- `datetime` ：日期 / 时间解析
- `encoding` ：各种格式的编码/解码
- `flags` ：解析命令行标志
- `fmt` ：格式化和打印
- `fs` ：文件系统 API
- `hash` ：加密库
- `http` ：HTTP 服务器
- `io` ：I/O 库
- `log` ：日志实用程序
- `mime` ：支持多类型数据
- `node` ：Node.js 兼容层
- `path` ：路径操纵
- `ws` ：WebSockets

## 是否有 Express/Hapi/Koa？

当然有。可以看看下方这些库。

- [deno-drash](https://link.zhihu.com/?target=https%3A//github.com/drashland/deno-drash)
- [deno-express](https://link.zhihu.com/?target=https%3A//github.com/NMathar/deno-express)
- [oak](https://link.zhihu.com/?target=https%3A//github.com/oakserver/oak)
- [pogo](https://link.zhihu.com/?target=https%3A//github.com/sholladay/pogo)
- [servest](https://link.zhihu.com/?target=https%3A//github.com/keroxp/servest)

## 遇到问题

### raw.githubusercontent.com

资源访问被拒绝，解决方法：[解决GitHub网页githubusercontent地址无法访问问题](https://zhuanlan.zhihu.com/p/107691233)

1. 打开host文件 

    ```
    C:\Windows\System32\drivers\etc\host
    ```

2. 追加以下内容

    ```
    # GitHub Start
    52.74.223.119     github.com
    192.30.253.119    gist.github.com
    54.169.195.247    api.github.com
    185.199.111.153   assets-cdn.github.com
    151.101.76.133    raw.githubusercontent.com
    151.101.76.133    gist.githubusercontent.com
    151.101.76.133    cloud.githubusercontent.com
    151.101.76.133    camo.githubusercontent.com
    151.101.76.133    avatars0.githubusercontent.com
    151.101.76.133    avatars1.githubusercontent.com
    151.101.76.133    avatars2.githubusercontent.com
    151.101.76.133    avatars3.githubusercontent.com
    151.101.76.133    avatars4.githubusercontent.com
    151.101.76.133    avatars5.githubusercontent.com
    151.101.76.133    avatars6.githubusercontent.com
    151.101.76.133    avatars7.githubusercontent.com
    151.101.76.133    avatars8.githubusercontent.com
    # GitHub End
    ```

3. 刷新dns缓存

   ```
   ipconfig /flushdns
   ```


## oak实例



