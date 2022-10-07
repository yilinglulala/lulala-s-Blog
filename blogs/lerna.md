# lerna 

## lerna.json

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0",
  "useClient": "yarn",
   //开放使用工作空间
  "useWorkespaces" : true,
   // 执行lerna publish 自动版本递增
   "command": {
    "version": {
      "conventionalCommits": true
    }
  }
}
```

## package.json

```json
{
  "name": "root",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  },
  // 指定工作空间到packages
  "workspaces": [
    "packages/*"
  ]
}

```



## 创建一个模块

```sh
lerna create 【moduleName】-y
# -y 表示使用默认配置
```



## 关联git

```sh
git add .
git commit -m "first"
git remote add origin 【git url】
```



## 发布

```sh
git publish
```



## 模块间关联

```sh
yarn workspace module2 add module1
```



# 规范

## 规范化提交

辅助提交

```sh
yarn add commitizen cz-conventional -D -W
```

| type     | desc           |      |
| -------- | -------------- | ---- |
| style    | 样式           |      |
| feat     | 新增           |      |
| fix      | 修改bug        |      |
| docs     | 文档           |      |
| refactor | 重构代码       |      |
| perf     | 性能           |      |
| chore    | 依赖，工具相关 |      |
| revert   | 版本回退       |      |

## 代码规范

```sh
yarn add eslint -D -W

yarn eslint --init

yarn add lint-staged -D -W
```

husky