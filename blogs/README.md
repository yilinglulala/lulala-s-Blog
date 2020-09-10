## 渐变字体

![](F:\learning\lulala-s-Blog\.vuepress\public\images\image-20200725180146259.png)

```css
{
	background: linear-gradient(90deg,rgb(0, 162, 255),rgb(103, 204, 134));
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-clip: text;
}
```

⭐👍

```
<div style='background: -webkit-linear-gradient(top, transparent 19px, #ececec 20px), -webkit-linear-gradient(left, transparent 19px, #ececec 20px);
            background-size: 20px 20px;'>
    格子背景
</div>
```

<div style='background: -webkit-linear-gradient(top, transparent 19px, #ececec 20px), -webkit-linear-gradient(left, transparent 19px, #ececec 20px);
            background-size: 20px 20px;'>
    格子背景
</div>

```html
<h2 style='color: inherit; line-height: inherit; padding: 0px; margin: 1.6em 0px; font-weight: bold; border-bottom: 2px solid pink; font-size: 1.3em;'><span style='font-size: inherit; line-height: inherit; margin: 0px; display: inline-block; font-weight: normal; background: pink; color: rgb(255, 255, 255); padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;'>二级标题</span></h2>
```

<h2 style='color: inherit; line-height: inherit; padding: 0px; margin: 1.6em 0px; font-weight: bold; border-bottom: 2px solid pink; font-size: 1.3em;'><span style='font-size: inherit; line-height: inherit; margin: 0px; display: inline-block; font-weight: normal; background: pink; color: rgb(255, 255, 255); padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;'>二级标题</span></h2>

```html
<blockquote style=' padding: 10px 10px 10px 1rem; font-size: 0.9em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid #10c921; background: rgb(239, 235, 233);'>
    <p>文档说明<p>
</blockquote>
```

<blockquote style=' padding: 10px 10px 10px 1rem; font-size: 0.9em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid #10c921; background: rgb(239, 235, 233);'>
    <p>文档说明<p>
</blockquote>