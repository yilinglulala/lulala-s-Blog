---
title: Echarts - 遇到问题及解决
date: 2020-10-21
tags:
 - Echarts
 - 图表
categories: 
 - Plugin
---

## tooltip

### 提示文本超出范围截断

```js
tooltip: {
	confine: true, // 是否将 tooltip 框限制在图表的区域内。
}
```



### 提示文本保留两位小数

```js
tooltip: {
    formatter: function (datas) {
        var res = datas[0].name + 
            datas.map(function(v,i){
                return '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + datas[i].color + ';"></span>' + v.seriesName +':' +formatValue(v.value)
            })
        return res
    }
},
```

![image-20201021154047676](https://gitee.com/xuyiling/gopic/raw/master/img/20201021154054.png)  效果如左图所示