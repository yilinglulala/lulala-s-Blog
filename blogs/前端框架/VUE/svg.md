## vue.config.js 配置

```js
chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api/modules'));
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svgs'))
      .end();
    config.module
      .rule('svgs')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svgs'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    config.plugins.delete('prefetch');
},
```

## iconfont svg 使用

1. vue.config.js 如上配置

2. 在官网对应图标点击下载 - 复制 SVG 代码 - 粘贴到 `src/assets/svgs` 目录下

3. 使用

   ```html
   <svg class="icon " aria-hidden="true">
       <use xlink:href="#icon-ic_colour_folder"></use>
   </svg>
   ```

   