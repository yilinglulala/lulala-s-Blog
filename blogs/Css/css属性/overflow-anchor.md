

# overflow-anchor

[原文：CSS overflow-anchor属性与滚动锚定](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/)

## 语法

```css
overflow-anchor: auto | none
```

- auto: 初始声明，表示浏览器自己决定滚动锚定的行为，通常表现为执行滚动锚定

- none: 表示禁止滚动锚定的行为

## 滚动锚定是什么

描述：当前视区上面的内容突然出现的时候，浏览器自动改变滚动高度，让视区窗口区域内容固定，就像滚动效果被锚定一样，在用户看来视区没有改变过。

禁止滚动锚定的话，当前视区上面的内容突然出现的时候，滚动条的位置是不会变化的，原先视口的东西就会被推到视口下方，当前视区会显示为新添加的内容

