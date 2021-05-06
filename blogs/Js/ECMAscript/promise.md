---
title: promise
date: 2021-04-11
tags:

categories: 
 - ECMAScript
---

# promise

## 基础使用

```js
new Promise((resolve,reject)=>{
    if(xxx){
        resolve(data) // 成功
    }else{
        reject(e) // 失败
    }
})
```

## 三种状态

状态不可逆 ：执行中，成功，失败

![三种状态](https://gitee.com/xuyiling/gopic/raw/master/img/20210105222913.png)



## then

```js
p.then(onresolved,onrejected)
```

1. 没有return值，默认返回 `resolved` 状态的 `promise`
2. 有return 值，默认返回 `resolved` 状态的 `promise`，参数值为return 值
3. return的是 `promise` 对象

## catch

捕获失败

## reject

```js
Promise.reject(xx)
```

## axios封装

```js
axios.interceptors.response.use(
    (response)=>{
        if(response.data.err == 1){
            return Promise.reject(response.data.data)
        }
        return response.data.data
	},
    err=>{
		return Promise.reject(err);
	}
)
```

## async / await

await 后跟着promise对象

## 手写

```js
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    self.onFullfilledArray=[];
    self.onRejectedArray=[];
    function resolve(value){
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
          self.onFullfilledArray.forEach(function(f){
                f(self.value);
                //如果状态从pending变为resolved，
                //那么就遍历执行里面的异步方法
          });
        
       }
    }
    function reject(reason){
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
          self.onRejectedArray.forEach(function(f){
              f(self.reason);
             //如果状态从pending变为rejected， 
             //那么就遍历执行里面的异步方法
          })
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}

myPromise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    let promise2;
    switch(self.status){
      case "pending":
        promise2 = new myPromise(function(resolve,reject){
             self.onFullfilledArray.push(function(){
                setTimeout(function(){
                  try{
	                 let temple=onFullfilled(self.value);
	                 resolvePromise(temple)
	                }catch(e){
	                   reject(e) //error catch
	                }
                })
             });
             self.onRejectedArray.push(function(){
                setTimeout(function(){
                   try{
	                   let temple=onRejected(self.reason);
	                   resolvePromise(temple)
	                 }catch(e){
	                   reject(e)// error catch
	               }
                })
             });
        })
      case "resolved":
        promise2=new myPromise(function(resolve,reject){
           setTimeout(function(){
               try{
	              let temple=onFullfilled(self.value);
	              //将上次一then里面的方法传递进下一个Promise状态
	              resolvePromise(temple);
	            }catch(e){
                  reject(e);//error catch
               }
           })
        })
        break;
      case "rejected":
        promise2=new myPromise(function(resolve,reject){
           setTimeout(function(){
             try{
               let temple=onRejected(self.reason);
               //将then里面的方法传递到下一个Promise的状态里
               resolvePromise(temple);   
             }catch(e){
               reject(e);
             }
           })
        })
        break;
      default:       
   }
   return promise2;
}

function resolvePromise(promise,x,resolve,reject){
  if(promise===x){
     throw new TypeError("type error")
  }
  let isUsed;
  if(x!==null&&(typeof x==="object"||typeof x==="function")){
      try{
        let then=x.then;
        if(typeof then==="function"){
           //是一个promise的情况
           then.call(x,function(y){
              if(isUsed)return;
              isUsed=true;
              resolvePromise(promise,y,resolve,reject);
           },function(e){
              if(isUsed)return;
              isUsed=true;
              reject(e);
           })
        }else{
           //仅仅是一个函数或者是对象
           resolve(x)
        }
      }catch(e){
         if(isUsed)return;
         isUsed=true;
         reject(e);
      }
  }else{
    //返回的基本类型，直接resolve
    resolve(x)
  }
}

```



## 易错

```js
很容易做错的笔试题。

var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？j
```

