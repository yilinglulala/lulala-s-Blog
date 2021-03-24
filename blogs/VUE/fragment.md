[TOC]

vue2增强插件

##  vue-fragment

### 安装

```
npm install --save vue-fragment
```

### 注册

main.js

```vue
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
```

### 使用

```vue
<fragment>
   <span>1</span>
   <span>2</span>
</fragment>
```



## portal-vue

### 安装

```sh
cnpm i --save portal-vue
```

### 注册

```js
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
```

### 引用

```vue
<!--使用处-->
<portal to="destination">
    hahahah
</portal>
<!--目标处-->
<portal-target name="destination"></portal-target>
```

