---
title: picgo
date: 2020-08-14
tags:
 - 图床
categories: 
 - 其他
---

> 在使用 Typro 写md 文档时，经常遇到添加图片的情况，但是如果 是需要移植的话，图片还得手动操作，改路径，相当麻烦。
>
> 一开始，我是先贴在csdn 上在复制图片链接，可以避免这种情况，但是还是麻烦了些
>
> 直到看到PicGo,完美的解决了这个问题，Typro添加图片可以自动上传到图床，这里记录一下配置的过程

## gitee搭建

picgo支持多种图床，考虑稳定性以及网速，我们选用Gitee作文件存储

**ps**:仓库必须为公开的，其他配置如下图

![](https://gitee.com/linmsen/picture/raw/master/img/20200813111303.png)

## PicGo搭建

### 下载

https://github.com/Molunerfinn/PicGo/releases

window下载exe安装包，然后直接下一步就可以

### gitee-uploader安装

由于默认图床没有gitee,点击插件设置，搜索gitee,安装 gitee-uploader 1.1.2

![image-20200814100129550](https://gitee.com/xuyiling/gopic/raw/master/img/20200814100129.png)

### gitee 设置

打开PicGo App `图床设置` -> `gitee设置`

![image-20200814102045737](https://gitee.com/xuyiling/gopic/raw/master/img/20200814102045.png)



| 字段  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| repo  | 填URL，就是用户名/仓库名                                     |
| path  | 这里可以不填，为了便于管理一般写 /img 就好                   |
| token | 进入`gitee`->`设置`->`安全设置`->`私人令牌` 生成令牌，把生成后的一串数字复制过来 |

![image-20200813192143534](https://gitee.com/linmsen/picture/raw/master/img/20200813192143.png)

### 置为默认图床

确定，并设为默认图床

## 与Typora集成

选择文件->偏好设置->图像

![image-20200813192344563](https://gitee.com/linmsen/picture/raw/master/img/20200813192344.png)

### Typro图像配置

若找不到`上传图片`选项，可能是版本较低，升级一下Typro即可

| 字段      | 作用              |
| --------- | ----------------- |
| 上传服务  | PicGo(app)        |
| PicGo路径 | 本地App exe的路径 |

### 验证上传图片

如果可以出现以下结果则表示配置成功了

![image-20200814100954410](https://gitee.com/xuyiling/gopic/raw/master/img/20200814100954.png)

如果验证上传图片失败，检查一下PicGo 中图床设置的repo 的设置是不是配置错误了，我第一次配置多了一个/

