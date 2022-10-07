## 安装

```sh
npm init @vitejs/app
```

hmr原理



插件开发

## jsx

### 安装

```sh
npm i @vitejs/plugin-vue-jsx -D
```

### 使用

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 添加引用
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(), 
      vueJsx()// 增加配置
  ],
});
```

### 注意

``vite 2.9.9``  对应的 ``vitejs/plugin-vue-jsx`` 应是 ``1.3.10`` 版本

## 样式

- 默认支持css
- @import url
- Alias 路径映射

```js
// vite.config.js

export default defineConfig({
// 路径简写映射
  resolve: {
    alias: {
      "@styles": "/src/styles",
    },
  },
 })
```

- css modules 模块化

> 任何以module.css 为后缀名的css 文件都被认为是一个css modules 文件，导入这样的文件会返回一个相应的模块文件

```vue
import cssM from 'xxx/index.module.css'

<div :class="cssM.bgGray">
   xxx
</div>
```

```css
// index.module.css
.bgGray {
	background: #ccc
}
```

- less scss

```sh
npm i less -D
npm i sass -D
```

- css 压缩

```sh
npm i cssnano -D
```

postcss.config.js

```js
module.exports = {
    plugins: [require('cssnano')]
}
```

