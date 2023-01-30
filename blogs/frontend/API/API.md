## 全屏

```js
if (!document.fullscreenElement) {
	this.$el.requestFullscreen()
} else {
    document.exitFullscreen()
}
```

