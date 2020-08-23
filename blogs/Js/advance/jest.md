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

## API

| API                  | 作用 | 说明                     |
| -------------------- | ---- | ------------------------ |
| expect.assertions(1) | 断言 | 断言expect至少执行过一次 |
|                      |      |                          |



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

## 查看代码覆盖率

### 终端

`npx jest --coverage`

### html

`coverage\lcov-report\index.html`

## 使支持ES6

**安装**

`yarn add  @babel/core@7.4.5 @babel/preset-env@7.4.5  --dev`

**配置**

.babelrc

```js
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```

## 异步测试

### 接收回调函数

```js
export const fetchData = (fn)=>{
    axios.get('http://localhost:3000/data').then((response)=>{
        fn(response.data)
    })
}
// 接收回调函数
test('fetchData 测试',(done)=>{
   fetchData((data)=>{
       expect(data).toEqual({
           name: 'xyl'
       })
       done()
    })
})
```

###  返回promise

```js
export const fetchData2 = () =>{
    return axios.get('http://localhost:3000/data')
}


test('fetchData2 测试',(done)=>{
    fetchData2().then((data)=>{
        expect(data.data).toEqual({
            name: 'xyl'
        })
        done()
    })
})
```

### 会发生错误的异步

```js
export const fetchData3 = ()=>{
    return axios.get('http://localhost:3000/data1')
}
// 测试会发生错误的异步
test('无法访问的接口 测试',(done)=>{
    expect.assertions(1)  // 断言，必须执行一次expect
    fetchData3().catch((e)=>{
        console.log(e);
        expect(e.toString().includes(404)).toBe(true)
        done()
    })
})
```

### async/await

```js
test('fetchData2 测试',async ()=>{
    const data = await fetchData2()
    expect(data.data).toEqual({
        name: 'xyl'
    })   
})
```

## 钩子函数

| 名称          | 说明                                         |      |
| ------------- | -------------------------------------------- | ---- |
| beforeAll(fn) | 在所有测试用例之前进行执行                   |      |
| afterAll()    | 在完成所有测试用例之后才执行的函数           |      |
| beforeEach()  | 在每个测试用例前都会执行一次的钩子函数       |      |
| afterEach()   | 在每次测试用例完成测试之后执行一次的钩子函数 |      |

### 钩子函数作用域



## 分组

```js
describe('分组1',()=>{
    test('测试1',()=>{
        // to do sth
    })
    test('测试2',()=>{
        // to do sth
    })
})
describe('分组2',()=>{
    test('测试1',()=>{
        // to do sth
    })
    test('测试2',()=>{
        // to do sth
    })

})
```

