# REDIS

## 安装

[下载](https://github.com/tporadowski/redis/releases)

[安装教程](https://www.runoob.com/redis/redis-install.html)

1. 选择zip, 放到C盘解压 

2. 打开cmd 命令面板 执行 `.\redis-server.exe redis.windows.conf`

3. 另起一个cmd 窗口 

   运行redis `redis-cli.exe -h 127.0.0.1 -p 6379`

````sh
set myKey abc
get myKey -> "abc"
````



## 配置

配置文件在安装目录下 `redis.windows.conf`

### 获取配置

```sh
CONFIG GET CONFIG_SETTING_NAME
# egg
CONFIG GET loglevel
# 返回示意
1) "loglevel"
2) "notice"
```

```sh
# 获取所有配置
CONFIG GET *
```

### 编辑配置

```sh
# 语法
CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
# egg
CONFIG SET loglevel "notice"
```



## 数据类型

https://www.runoob.com/redis/redis-data-types.html

### String（字符串）

最大能存储 `512MB`

```sh
SET runoob "菜鸟教程"
```

### 哈希

Redis hash 是一个键值(key=>value)对集合, 适合用于存储对象。

```
"param": {     // 参数
    "swith1": true    // key为属性名,value 为属性值
}
```



## Redis 命令

1. 确保开启了redis 服务

2. 在redis 文件夹下打开命令面板  `redis-cli`

3. 检测是否启动 `PING`  // 返回PONG 就是启动了

**远程执行命令**

`$ redis-cli -h host -p port -a password`

### [key](https://www.runoob.com/redis/redis-keys.html)

|      |      |                   |
| ---- | ---- | ----------------- |
| DEL  | 删除 | DEL runoobkey     |
| SET  | 设置 | SET runoobkey 111 |
| GET  | 获取 | GET runoobkey     |

