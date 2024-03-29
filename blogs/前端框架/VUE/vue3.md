```sh
npm install -g @vue/cli
vue create 项目名
cd 项目名
vue add vue-next //重点 执行这行,会把2.0代码改为3.0的, vue-router, vuex会变成4.0的
npm run serve
```

[](https://cn.vuejs.org/guide/quick-start.html)


[vue3源码学习](https://vue3js.cn/start/)

[vue3文档](https://cn.vuejs.org/guide/introduction.html)



## setup写法

### props

```vue
<script setup>
const props = defineProps(['foo','dialog'])

console.log(props.foo)
</script>
```

### computed

```js
import { computed, reactive, ref } from 'vue'
const dialog = computed(() => props.dialog)
console.log(dialog.value)
```

### emit

```vue
<template>
	<div v-model:dialog="dialog"></div>
</template>
<script>
	const emit = defineEmits(['update:dialog'])
	emit('update:dialog', false)
</script>
```



## Vue2与Vue3的对比

- 对TypeScript支持不友好(所有属性都放在了this对象上，难以推倒组件的数据类型)
- 大量的API挂载在Vue对象的原型上，难实现TreeShaking。
- 架构层面对跨平台dom渲染开发支持不友好
- CompositionAPI。受ReactHook启发
- 对虚拟DOM进行了重写、对模板的编译进行了优化操作....

**watch 基于 effect**

```sh
npm init vue@latest

> cd <your-project-name>
> npm install
> npm run dev
```



## 
