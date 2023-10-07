[掘金文章](https://juejin.cn/post/7032664026190446600)

### 十进制与十六进制的转换

**十进制转十六进制**

```js
js复制代码// number.toString(radix);
// radix范围2~36，不写就是十进制
var num = 255;
console.log(num.toString(16));// 十进制转十六进制 -> ff
console.log(num.toString(16).toUpperCase());// 十进制转十六进制，再转大写 -> FF
```

**十六进制转十进制**

```js
js复制代码//parseInt(string, radix)
//radix范围2~36，不写就是十进制
var str = "FF";
console.log(parseInt(str, 16));// 十六进制转十进制 -> 255
var str1 = "12";
console.log(parseInt(str1));// 字符串转十进制 -> 12
```

