```sh
npm install -g @vue/cli
vue create 项目名
cd 项目名
vue add vue-next //重点 执行这行,会把2.0代码改为3.0的, vue-router, vuex会变成4.0的
npm run serve
```

[](https://cn.vuejs.org/guide/quick-start.html)



## Vue2与Vue3的对比

- 对TypeScript支持不友好(所有属性都放在了this对象上，难以推倒组件的数据类型)
- 大量的API挂载在Vue对象的原型上，难实现TreeShaking。
- 架构层面对跨平台dom渲染开发支持不友好
- CompositionAPI。受ReactHook启发
- 对虚拟DOM进行了重写、对模板的编译进行了优化操作....

**watch 基于 effect**





