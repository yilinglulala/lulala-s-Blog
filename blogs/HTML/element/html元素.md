---
title: HTML语义化
date: 2020-08-26
tags:
 - HTML
 - 语义化
categories: 
 - HTML
---

## 文本元素

### ruby

可实现拼音效果

```html
<ruby>
    好的<rt>haode</rt>
</ruby>
```

<ruby>
    好的<rt>haode</rt>
</ruby>



### strong/em

同：

都是表示强调

异：

| name   | 表现                   |                                         |
| ------ | ---------------------- | --------------------------------------- |
| strong | <strong>hello</strong> | 加粗                                    |
| b      | <b>hello</b>           | 加粗,仅仅是文本上的加粗，没有强调的语义 |
| em     | <em>hello</em>         | 斜体                                    |
| i      | <i>hello</i>           | 斜体                                    |



### mark

高亮文本

```html
我是<mark>高亮文本</mark>
```

我是<mark>高亮文本</mark>





## 结构元素

| name     | 说明     |
| -------- | -------- |
| \<nav>   | 导航元素 |
| <header> | 头部元素 |
| <main>   | 主体元素 |
| <footer> | 脚部元素 |

![](https://gitee.com/xuyiling/gopic/raw/master/img/20200826173512.png)

[[译]HTML&CSS Lesson2: 了解HTML](https://juejin.im/post/6844903498052550670)



## 表单元素

### [output](https://html5-tips.netlify.app/output/index.html)

表示运算的结果

```html
<form oninput="x.value=parseInt(a.value) * parseInt(b.value)">
   <input type="number" id="a" value="0"> 
   * <input type="number" id="b" value="0">
   = <output name="x" for="a b"></output>
</form>



```

### input - range

[滑块](https://html5-tips.netlify.app/range/index.html)

```html
<form method="post">
    <input 
         type="range" 
         name="range" 
         min="0" 
         max="100" 
         step="1" 
         value=""
         onchange="changeValue(event)"/>
 </form>
 <div class="range">
      <output id="output" name="result">  </output>
 </div> 
```



## HTML5

### details/summary

```html
<details>
  <summary>click me</summary>
  点击summary 我就显示出来了呀~
</details>
```

```css
details{
  padding:5px;
  background:tan;
  color:#fff
}
summary:focus{
  outline:none
}
```

[details/summary实例](http://js.jirengu.com/sifosafesa/1/edit?html,css,output)

### [Datalist](https://html5-tips.netlify.app/datalist/index.html)

数据列表

```html
<form action="" method="get">
    <label for="fruit">Choose your fruit from the list:</label>
    <input list="fruits" name="fruit" id="fruit">
        <datalist id="fruits">
           <option value="Apple">
           <option value="Orange">
           <option value="Banana">
           <option value="Mango">
           <option value="Avacado">
        </datalist>
     <input type="submit">
 </form> 
```



### meter

测量给定范围内的数据

```html
<label for="home">/home/atapas</label>
<meter id="home" value="4" min="0" max="50"></meter>
```

<meter id="home" value="4" min="0" max="50">2 out of 10</meter>



### progress

进度条

```
<progress id="file" value="20" max="100"></progress>
```

<progress id="file" value="20" max="100"></progress>

```css
progress{
  position:relative;
}
progress:after{
  display:block;
  width:100%;
  text-align:center;
  margin-top:15px;
  content:attr(value)
}
```

