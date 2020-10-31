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

```sh
#!/bin/sh #说明要用shell解释器
```



## 替换文本

在`prototype-config.js`中把` bbb` 替换成 `aaa`

```sh
sed -i 's/bbb/aaa/g' ./config/prototype-config.js
```

如果需要适用正则，需要加上`r`

```sh
sed -ri 's/version: \"[a-z]+\"/version: "'${1}'"/g' './config/prototype-config.js'
```



## 打开当前文件夹

```sh
explorer .
```

