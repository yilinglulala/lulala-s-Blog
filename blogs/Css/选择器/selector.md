## :smile: 结构伪类

| 伪类              | 描述 |
| ----------------- | ---- |
| first-child       |      |
| last-child        |      |
| nth-of-child      |      |
| nth-last-of-child |      |
| first-of-type     |      |
| last-of-type      |      |
| nth-of-type       |      |
| nth-last-of-type  |      |

### :nth-of-type(n) / :nth-last-of-type(n)

> 匹配同类型中的第n个同级兄弟元素

```css
div:nth-of-type(2){
	// 匹配同级中的第二个<div>
}
```



## :smile: 属性选择器

| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |