---
title: react redux
date: 2020-07-27
tags:
 - redux
categories: 
 - React
---

[redux文档](https://www.redux.org.cn/)

## 是什么

数据层框架

状态管理

最小耦合度

### redux工作流

![image-20200728224838052](E:\前端\blog\lulala-s-Blog-master\.vuepress\public\images\image-20200728224838052.png)

## 怎么做

### 安装

```sh
yarn add redux
cnpm i --save redux
npm i --save redux
```

### store文件夹

1. 在 `src` 下新建 `store` 文件夹  `index.js`

创建`store`

```js
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store
```

2. 在新建一个`reducer.js`

```js
const defaultState = {
    inputValue:"write something",
    list:[
        '任务1',
        '任务2',
        '任务3']
}
export default (state = defaultState, action) => {
    return state
}
```

3. 派发 `action`

组件中

```js
inputValueChange(e){
    const action = {
        type:'inputValueChange',
        value:e.target.value,
    }
    store.dispatch(action)
}
```

4. 接收派发

`reducer.js`

```js
export default (state = defaultState, action) => {
    if(action.type === "inputValueChange"){
        let newState = {...state}
        newState.inputValue = action.value
        return newState
    }
    return state
}
```

5. 组件中订阅

使得组件也能跟随store的更新而进行更新

```js
constructor(props) {
    super(props);
        this.state = { 
        ...store.getState()
        }
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
}
storeChange(){// 这个最好在组件挂载后执行，否则会有报错
	this.setState({...store.getState()})
}
```

### store相关函数

| 函数      | 作用      |
| --------- | --------- |
| getState  | 获取state |
| subscribe | 订阅      |
| dispatch  | 派发      |

### 使用扩展程序

添加 `chrome` 扩展程序 `Redux Dev Tools`

在  `index.js` 的创建数据存储仓库回调中添加以下语句

```js {2}
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// 创建数据存储仓库
```



## 小技巧

### actionTypes

>  把action的type抽取出来，方便报错定位以及复用

`store` 文件夹下，新增`actionTypes.js`

```js
export const ADD_LIST = "addList"
```

`reducer.js`

```js
import {ADD_LIST} from './actionTypes'
export default (state = defaultState, action) => {
    if(action.type === ADD_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}
```

组件中

```js
import {ADD_LIST} from '../store/actionTypes'
addList(){
    const action = {
        type: ADD_LIST,
    }
    store.dispatch(action)
}
```

### actionCreators

actionCreators.js

```js
import {ADD_LIST,DEL_LIST, CHG_INPUTVALUE} from './actionTypes'
export const addListAction = (value)=>({type:ADD_LIST,value})
```

组件中

```js
import { addListAction} from '../store/actionCreators'
addList(){
	store.dispatch(addListAction(this.state.inputValue))
}js
```

## 注意点

::: tip

- store 必须是唯一的
- store 能改变状态， reducer不能
- reducer 必须是纯函数
- 

:::

最好是UI和逻辑分离

## 无状态组件

> 其实就是一个函数（方法）,能做成无状态组件就尽量作成无状态组件，毕竟性能要高很多，没有逻辑，只有UI

## redux中间件

### redux-thunk配置

![中间件](https://img-blog.csdnimg.cn/20200802085939660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwMjUyMjE5,size_16,color_FFFFFF,t_70)



改造一下store - index.js

```js
import { createStore , applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// 使用增强函数
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancer(applyMiddleware(thunk))
const store = createStore(reducer,enhancer)// 创建数据存储仓库
export default store
```

### redux-thunk使用

`actionCreator.js`

```js
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3000/list")
            .then((res)=>{
                // store.dispatch(getListAction(res.data.data.list))
                const data = res.data.data.list
                const action = getListAction(data)
                dispatch(action)
            })
    }   
}
```

`TodoList.js`

```js
componentDidMount(){
    store.subscribe(this.storeChange)
    // axios.get("http://localhost:3000/list").then((res)=>{
    //     store.dispatch(getListAction(res.data.data.list))
    // })
    const action = getTodoList()
    store.dispatch(action)
}
```

### Rudex-saga

#### 引入

```js
import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
```

`saga.js`

```js
import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'
function* mySaga() {
    yield takeEvery(GET_MY_LIST,getMyList)
} 
function* getMyList() {
    const res = axios.get("http://localhost:3000/list")
    const action = getListAction(res.data.data.list)
    yield put(action)
}
export default mySaga;
```

`TodoList.js`

```js
const action = getMyListAction()
store.dispatch(action)
```

`actionCreate.js`

```js
export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
```

