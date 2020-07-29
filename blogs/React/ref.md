---
title: react ref
date: 2020-07-24
tags:
 - react
categories: 
 - React
---

关于ref

```jsx {5}
<input id="myinput" 
    type="text" 
    value={this.state.name} 
    onChange={this.myChange.bind(this)} 
    ref = {(input)=>{this.input = input}}/>
```

`this.input` 指向的就是 myinput这个元素

因此需要获得输入值就可以用 `this.input.value` 来获取