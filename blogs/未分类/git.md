---
title: git
date: 2020-07-26
tags:
 - git
categories: 
 - 其他
---

 http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html 

## 提交<Badge text="beta" type="warning"/>

```shell
git add .
```

```shell
git commit -m "备注"
```

```sh
git push https://github.com/yilinglulala/lulala-s-Blog.git master
//如果已经绑定了远程地址
git push origin master
```

## 拉取更新

```sh
git pull https://github.com/yilinglulala/lulala-s-Blog.git master
//如果已经绑定了远程地址
git pull origin master
```

如果报错`refusing to merge unrelated histories`

```sh
git pull origin master --allow-unrelated-histories
```

## 远程

### 绑定远程地址

```sh
// 用的是ssh地址
git remote add origin git@github.com:yilinglulala/lulala-s-Blog.git
```

### 移除远程绑定

```sh
git remote rm origin
```

### 提交远程

```sh
git push origin master
```

```
// 强制提交
git push -f origin master
```

## 分支

### 切换分支





## 遇到问题

- ### 提交被拒绝

![image-20200726103213186](C:\Users\xuyiling\AppData\Roaming\Typora\typora-user-images\image-20200726103213186.png)

```sh
// 强制提交
git push -f origin master
```

> ###  Pulling is not possible because you have unmerged files.

```sh
git add .
git commit -m 'xxx'
git pull origin master
```



## github图片无法查看

1. 查找相关的URL

2. 访问 https://www.ipaddress.com/

3. 输入相关的URL ，点击查询

   ![image-20210407120036867](https://gitee.com/xuyiling/gopic/raw/master/img/20210407120043.png)

4. 复制IP

![image-20210407120220381](https://gitee.com/xuyiling/gopic/raw/master/img/20210407120220.png)

5. 打开`C:\Windows\System32\drivers\etc` hosts 文件，新增配置保存

![image-20210407120341943](https://gitee.com/xuyiling/gopic/raw/master/img/20210407120341.png)

6. 刷新页面可看