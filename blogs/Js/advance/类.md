---
title: 类
date: 2020-08-22
tags:

categories: 
 - Js
---

## 原则

属性放在构造函数

方法放在原型

不能使用箭头函数作为构造函数

## ES6类

```js
class Drag {
    constructor() {
        //super()// 如果有继承
        this.name = "张三";
    }
    hobby() {
        console.log("篮球");
    }
    static getSex(){// 静态方法，作为类方法直接调用
        return 'male'
        // 用法 Drag.getSex()
    }
}
```

### 继承

```js
class LimitDrag extends Drag {
    constructor(...arg) {
        super(...arg);
    }
    hobby(){ // 原型方法可以重写
        super.hobby()// 可以执行父类的方法
    }
}
```



## 原型

```js
let a = new A()
a._proto_ === A.prototype
a.constructor === A
```

每个原型都有预定义属性constructor

所以原型不能写成以下的形式

```js
A.prototype = {
	xxx
}
//应该是 
A.prototype.xxx = function(){}
```

## 仿写new 运算符

```js
//仿写new运算符;
function myNew(constructor, ...arg){
    let obj = {}
    constructor.call(obj,...arg );
    obj._proto_ = constructor.prototype
    return obj;
}
```

