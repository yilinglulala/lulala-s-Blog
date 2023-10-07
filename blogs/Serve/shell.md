---
title: shell
date: 2020-10-23
tags:
 - 脚本
 - linux
categories: 
 - Js
---

```sh
#!/bin/sh
sed -ri 's/version: \"[a-z]+\"/version: "'${1}'"/g' './config/prototype-config.js'

i18n generate ./src
npm run build
i18n revert ./src
cd ../../$1-submit/wiseidc/dist
# svn commit -m "打包"
explorer .
```

## 解释器说明

```shell
#!/bin/sh #说明要用shell解释器
```



## 如何执行sh 脚本

> 用vscode 的终端好像不生效

```shell
# 方法1
sh ./a.sh
# 方法2
./a.sh
```

## 命令

### 变量

`$name` 

### 注释

# 

### echo 

打印信息，输出文本到终端

### read

获取用户输入

```shell
echo "who are you"
read name -> 用户输入: luhan
echo "I am $name" -> 打印: I am luhan
```

### 条件语句

#### 基础条件

```shell
# 数值比较
if [ "$age" -ge 18 ]; then
    echo "You are an adult."
else
    echo "You are a minor."
fi
# 判断是否为空
[ -z "$name" ]
```

#### 条件可选

```shell
if [ "$score" -ge 90 ]; then
    echo "Excellent!"
elif [ "$score" -ge 70 ]; then
    echo "Good."
else
    echo "Needs improvement."
fi
```

#### 多条件判断

```shell
if [ "$age" -ge 18 ] && [ "$gender" == "male" ]; then
    echo "You are an adult male."
else
    echo "You are not an adult male."
fi
```



### 循环语句

```shell
# for do
for i in {1..5}; do
    echo "Iteration $i"
done

# while do
counter=0
while [ $counter -lt 5 ]; do
    echo "Iteration $counter"
    counter=$((counter + 1))
done

```



### 函数

```shell
function greet {
    echo "Hello, $1!"
}

greet "Alice"
greet "Bob"

```



### 打开当前文件夹

```sh
explorer .
```



### 替换文本

```shell
# 方法1 加上-ri old_text可以是正则表达式
sed 's/old_text/new_text/g' input.txt > output.txt  
# 方法2
grep -rl "search_text" /path/to/directory | xargs sed -i 's/search_text/replace_text/g'
# 方法3
awk '{gsub("old_text", "new_text")}1' input.txt > output.txt
```



在`prototype-config.js`中把` bbb` 替换成 `aaa`

```sh
sed -i 's/bbb/aaa/g' ./config/prototype-config.js
```

如果需要适用正则，需要加上`r`

```sh
sed -ri 's/version: \"[a-z]+\"/version: "'${1}'"/g' './config/prototype-config.js'
```



## 示例命令

```shell
#!/bin/sh

# 输入输出
echo "who are you"
read name
echo "I am $name"

# 循环
for i in {1..5}; do
    echo "Iteration $i"
done

counter=0
while [ $counter -lt 5 ]; do
    echo "Iteration $counter"
    counter=$((counter + 1))
done

# 条件语句
echo "How old are you? "
read age
if [ "$age" -ge 18 ]; then
    echo "You are an adult."
else
    echo "You are a minor."
fi

  
# 函数
function greet {
    echo "Hello, $1!"
}

greet "Alice"
greet "Bob"

```

```shell
# 实际项目改 IP 并且启动服务 'dev' ? '1.1.1.1' : '127.0.0.1';
# 提取原有ip \K 来表示要获取的内容, -oP 参数，这表示使用 Perl 兼容的正则表达式语法来进行匹配
oldIP=$(grep -oP "'dev'\s?\?\s?'\K[^']+" ./server/app.js)
echo "请输入IP"
read IP

if [ "$IP" == "" ]; then
    echo "IP不变: $oldIP";
else
    sed -ri "s/'dev'\s?\?\s?'[0-9.^']+'/'dev' ? '$IP'/g" ./server/app.js;
    echo "IP改变：$oldIP --> $IP"
fi

npm run serve
```

