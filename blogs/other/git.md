---
title: git
date: 2020-07-26
tags:
 - git
categories: 
 - 其他
---

## 提交

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

## 遇到问题

- ### 提交被拒绝

![image-20200726103213186](C:\Users\xuyiling\AppData\Roaming\Typora\typora-user-images\image-20200726103213186.png)

```sh
// 强制提交
git push -f origin master
```

