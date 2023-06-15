---
title: Echarts - 遇到问题及解决
date: 2020-10-21
tags:
 - Echarts
 - 图表
categories: 
 - Plugin
---

## datazoom

### 十字选择范围进行缩放

- 设置toolbox 中的datazoom 透明度为0

```
{
	toolbox: {
        feature: {
          show: true, //显示区域缩放、缩放还原图标,默认值为true
          dataZoom: {
            show: true,
            yAxisIndex: false,
            iconStyle: {
              opacity: 0
            }
          }
        },
     },
}
```

- 挂在之后 dispatchAction 触发选中区域缩放

```js
mounted() {
    this.$nextTick(() => {
      const chartRef = (this.$refs.chart as any).$refs.chartLine;

      chartRef.dispatchAction({
        // 默认选中区域缩放
        type: "takeGlobalCursor",
        key: "dataZoomSelect",
        dataZoomSelectActive: true,
      });
      chartRef.chart.on("datazoom", data => {
        this.$emit("datazoom", data.batch[0]); // 触发事件
      });
    });
  }
```

- beforeDestroy 记得解绑事件

```js
chartRef.chart.off('datazoom')
```



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