## 命令行窗口

`win` + `R`

cmd

### 常用命令

| window命令\|linux | 说明           |
| ----------------- | -------------- |
| dir\|ls           | 列出当前的文件 |
| md\|mkdir         | 新建文件夹     |
| cd\|              | 进入文件       |
| rd\|              | 删除文件夹     |
| 文件名\|          | 打开文件       |

### 目录

| 目录表示 | 说明       |
| -------- | ---------- |
| .        | 当前目录   |
| ..       | 上一级目录 |

### 环境变量

（window系统中的变量）

我的电脑右键 - 属性 - 高级系统设置 - 高级 - 环境变量

![image-20200824230630016](C:\Users\xuyiling\AppData\Roaming\Typora\typora-user-images\image-20200824230630016.png)

> 当我们在命令行窗口打开一个文件，或调用一个程序时，
> 系统会首先在当前目录下寻找文件程序，如果找到了则直接打开
> 如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止
> 如果没找到则报错



> 所以我们可以将一些经常需要访问的程序和文件的路径添加到path中，
> 这样我们就可以在任意位置来访问这些文件和程序了

## 进程和线程

### 进程

- 为程序的运行提供必备的环境

- 负责环境，进程相当于工厂中的车间

### 线程

- 计算机中最小的计算单位，负责执行进程中的程序

- 负责干活，相当于工厂中的工人

单线程 / 多线程

## Node简介

- 能在服务端运行跨平台的js运行环境
- 事件驱动，非阻塞，异步IO

### 作者

04读博

06退学去利智

Ruby

09开始编写node.js

### 历史

![](https://gitee.com/xuyiling/gopic/raw/master/img/20200825233832.png)

## 模块化

common.js规范，

在node中，

- 每一个js文件就是一个模块

- 每一个js文件独立运行在一个函数中，不是全局作用域，在其他模块无法访问

### 引用

```js
// 如果使用相对路径，需要以. 或者 .. 开头
const a = require("xxxpath")
a.x
```

### 定义

```js
// 暴露
exports.x = xxx
exports.y = xxx
// 等价于
module.exports
// 注意导出对象一定要用 module.exports
```

### 标识

| 模块类型 | 标识         |          |
| -------- | ------------ | -------- |
| 核心模块 | 名称就是标识 | node自带 |
| 文件模块 | 路径为标识   | 用户创建 |

**执行时会包含在函数里面**

```js
function (exports, require, module, __filename, __dirname) {
    //自己写的代码 xxx
}
```

| 参数       | 说明                         |
| ---------- | ---------------------------- |
| module     | 是一个对象，包含模块各种信息 |
| __filename | 当前模块所在的文件路径       |
| __dirname  | 当前模块所在的文件夹         |



## 全局对象

global, 和window类似

arguments - callee

没有用var 等声明就会在全局下

## node NPM

### 包

可以理解为是增强的模块，

由包结构和描述文件组成

- 包结构

用于组织包中的各种文件

- 描述文件

描述包的相关信息，以供外部读取分析

> 包实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件:

| 文件         | 说明             |
| ------------ | ---------------- |
| package.json | 描述文件         |
| bin          | 可执行二进制文件 |
| lib          | 代码             |
| doc          | 文档             |
| test         | 单元测试         |

- package.json（非代码相关信息）
  - dependencies,依赖于
  - devDependencies,开发时依赖
  - name,模块标识
  - version,版本
  - description,描述
  - maintainers,主要贡献者

### NPM

commonjs是理论，npm是实践

| 命令            | 简写             | 说明                     |
| --------------- | ---------------- | ------------------------ |
| npm search xxx  | npm s xxx        | 查询包                   |
| npm remove xxx  | npm r xxx        | 删除包                   |
| npm install     | npm i            | 安装所有依赖             |
| npm install xxx | npm i xxx        | 安装指定包               |
|                 | npm i xxx --save | 安装指定包并添加到依赖中 |
|                 | npm i xxx -g     | 安装到全局               |

配置cnpm

`npm i -g cnpm --registry=https://r.npm.taobao.org`

node 搜索包流程

> 现在当前node_module文件夹下寻找，没有就到上一级的node_module文件夹下寻找，直到磁盘没有就报错

## Buffer

- 结构和数组有点相似，操作也有些类似

- 数组不能存储二进制数据，buffer可以存储二进制数据

- 不需要引入，可直接使用

- buffer存储二进制数据，但用16进制显示

- 每个元素的范围都是00 ff,
- 大小一旦确定，不能修改

最小单位1个字节

8bit位=1bype字节

1024bype = 1kb

1024kb = 1mb

1024mb = 1gb

1024gb = 1tb

```js
// 字符串转buffer
let buf = Buffer.from("str")
// buf所占用的内存
buf.length 
var buf = Buffer.from("a")
var buf1 = Buffer.from("你")
console.log(buf.length); //1
console.log(buf1.length);//3
// buffer转字符串
console.log(buf.toString());//a
```

```js
var b=Buffer.alloc(10)
b[0] = 1
b[2] = 258 //  1 00000002，超出8位，取后面8位
console.log(b) // <Buffer 01 00 02 00 00 00 00 00 00 00>
```

## 文件系统

```js
// 引入fs模块
const fs = require('fs')
```

### 文件写入

#### 同步

| 函数                                                     | 说明         |                         |                                 |
| -------------------------------------------------------- | ------------ | ----------------------- | ------------------------------- |
| fs.openSync(filepath,flag)                               | 同步打开文件 | filepath文件路径        | flag：r可读,w可写               |
| fs.writeSync(file,'hello,world'，?:position，?:encoding) | 写入文件     | position 文件写入的位置 | encoding: 编码方式，默认“utf-8" |
| fs.closeSync(file)                                       | 关闭文件     |                         |                                 |

```js
const fs = require('fs')
const file = fs.openSync('./hello.txt','w')
fs.writeSync(file,'hello,world')
fs.closeSync(file)
```

#### 异步

```js
// err 错误，fd:文件标识
const fs = require('fs')
fs.open('./hello.txt','w',(err,fd)=>{
    fs.write(fd,'hello,world123456',(err)=>{
        fs.closeSync(fd)
    })
})
```

#### 简单文件写入

```js
fs.writeFile('hello1.txt','hello',err=>{
    if(!err){
        console.log('写入成功');
    }
})
```

#### 流式文件写入

以上方法不适合大文件，性能较差，容易溢出

```js
// 流式写入
let ws = fs.createWriteStream('hello2.txt')
ws.write('hello2')
ws.write(' hello222')
ws.once('open',()=>{
    console.log('流打开了');
})
ws.once('close',()=>{
    console.log('流关闭了');
})
ws.end()// 断开传输端，close()断开接收端
```

### 文件读取

#### 简单读取

```js
new Promise((resolve,rej)=>{
    fs.readFile('hello2.txt',(e,data)=>{
        resolve(data)// data是Buffer二进制数据
    })
}).then(data=>{
    console.log(data.toString());
})
```

#### 流式读取

使用于大文件

```js
let rs = fs.createReadStream('hello2.txt')
rs.on('data',(data)=>{
    console.log(data);
})
```

把可读流的数据传到可写流当中

```js
let rs = fs.createReadStream('hello2.txt')
let ws = fs.createWriteStream('hello.txt')
rs.pipe(ws)
```

### fs其他模块

| 函数                                    | 说明               |
| --------------------------------------- | ------------------ |
| fs.existsSync(path)                     | 检查文件是否存在   |
| fs.stat(path,callback)                  | 查看文件信息       |
| fs.unlink(path)                         | 删除文件           |
| fs.readdir(path,cb)                     | 列出文件           |
| fs.mkdir(path,cb(e,files))              | 创建目录           |
| fs.rmdir(path,cb(e,files))              | 删除目录           |
| fs.truncateSync('hello.txt',3)          | 截断文件，指定大小 |
| fs.rename(oldpath, newpath)             | 重命名             |
| fs.watchFile('hao.txt',(cur,prev)=>{}） | 监听文件发生变化   |



```js
fs.stat('hello.txt',(e,stats)=>{
    console.log(stats.isDirectory());// 是否是文件夹
    console.log(stats.isFile());// 是否是文件
})
```

