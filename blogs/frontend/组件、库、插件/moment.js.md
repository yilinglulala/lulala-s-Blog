## 获取utc 时间戳

```js
// offsetDisplayName -> "+07:00"
let startTimeStamp = moment.utc(`${this.form.startDate} ${this.form.startTime}${offsetObj.offsetDisplayName}`).valueOf()

// 方法2 utcOffset -> 25200
let startTimeStamp = moment.utc(`${this.form.startDate} ${this.form.startTime}`).valueOf() - offsetObj.utcOffset * 1000
```

