## vue

### .sync 修饰符jsx 怎么写

原有写法

```vue
<el-drawer 
	direction="rtl"
    :visible.sync="visibleSync">
</el-drawer>
```

jsx写法

```jsx
<el-drawer
	visible={this.visibleSync}
    on={{
    	["update:visible"]: v => { this.visibleSync = v;},
    }}
    direction="rtl">
</el-drawer>
```

