## 安装

`cnpm i jest -D`

## 被测试文件

`demo.js`

```js
const hello = (name)=> {
    return `hello ${name}`
}
module.exports = {
    hello
}
```



## 测试文件

`demo.test.js`

```js
const demo = require('./demo.js')
const { hello }  = demo
test('test hello',()=>{
    expect(hello("luhan")).toBe('hello luhan')
})
```



## 运行

:::tip

`--watchAll`监听文件变化，发生变化就自动测试

:::

```js
"scripts": {
    "test": "jest --watchAll",
     "coverage":"jest --coverage"
},
```

`npm run test` 或 `yard test`



## 配置

`npx jest --init` 生成 `jest.config.js`文件

### jest.config.js

| 名称              | 作用                           |
| ----------------- | ------------------------------ |
| coverageDirectory | 生成代码覆盖率文件的文件夹名称 |
|                   |                                |
|                   |                                |

## 匹配器

[文档](https://jestjs.io/docs/en/expect)

| 匹配器        | 作用                       |                                 |
| ------------- | -------------------------- | ------------------------------- |
| toBe          | 相当于===                  |                                 |
| toEqual       | 内容结果的匹配，用于对象等 | expect(a).toEqual({name:'xyl'}) |
| toBeNull      | 匹配null                   | expect(a).toBeNull()            |
| toBeUndefined | 匹配undefined              | expect(a).toBeUndefined()       |
| toBeDefined   | 匹配经过定义的，可匹配null |                                 |
| toBeTruthy    | 匹配真值                   | expect(a).toBeTruthy()          |
| toBeFalsy     | 匹配假值                   |                                 |

**数字相关**

| 匹配器                 | 作用     |                                          |
| ---------------------- | -------- | ---------------------------------------- |
| toBeGreaterThan        | 大于     | expect(10).toBeGreaterThan(9)            |
| toBeLessThan           | 小于     | expect(10).toBeLessThan(11)              |
| toBeGreaterThanOrEqual | 大于等于 | expect(count).toBeGreaterThanOrEqual(10) |
| toBeGreaterThanOrEqual | 小于等于 | expect(count).toBeGreaterThanOrEqual(10) |
| toBeCloseTo            | 约等于   | expect(0.1+ 0.2).toBeCloseTo(0.3)        |

| 匹配器 | 作用 |      |
| ------ | ---- | ---- |
|        |      |      |
|        |      |      |
|        |      |      |
|        |      |      |

## 查看代码覆盖率

### 终端

`npx jest --coverage`

### html

`coverage\lcov-report\index.html`

## 使支持ES6

**安装**

`yarn add  @babel/core@7.4.5 @babel/preset-env@7.4.5  --dev`



