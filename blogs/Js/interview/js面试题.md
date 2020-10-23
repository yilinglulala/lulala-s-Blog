## call / apply 

### 什么区别，哪个性能好一些？

```js
fn.call(obj,1,2,3)
fn.apply(obj,[1,2,3])
fn.bind(obj,[1,2,3])
```

同

- 都是function原型上的方法

- 都是调用函数

- 都可以改变this指向

 不同

- apply 接收的参数是数组

**注意**

> call 的性能会比apply好一丢丢(尤其是传参大于3个的时候)
>
> bind并不立即执行

### 手写call

### 手写apply



## 箭头函数

```js
let fn = (...args)=>{
	// args = [1,2]
}
fn(1,2)
```

- 没有arguments

- 没有自己的this

- 没有prototype, 不能用作构造函数，不能被new 执行

  

## this指向

```js
document.body.onclick = function(){
    // this -> body
    [1,2].sort(function(){
        // this -> window
    })
}
```

