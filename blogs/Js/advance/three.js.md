# 在vue中使用three.js

[教程](http://www.webgl3d.cn/Three.js/)

[文档](http://www.webgl3d.cn/threejs/docs/)

## 安装

```sh
cnpm i --save three
cnpm i --save three-obj-mtl-loader
```

## 引用

```js
import * as THREE from "three";
import {MTLLoader,OBJLoader} from 'three-obj-mtl-loader'
```

## 程序结构

![image-20201227081436950](https://gitee.com/xuyiling/gopic/raw/master/img/20201227081444.png)

## 常见业务

### 视野放大缩小

```js
const { renderer, camera, scene } = this;
let container = document.getElementById("main_model");
let w = container.clientWidth;
let h = container.clientHeight;
renderer.setSize(w, h);
camera.aspect = w / h; //视窗的宽高比
camera.updateProjectionMatrix();
renderer.render(scene, camera);
```



## 踩坑记录

### camera

- lookAt不要直接用对象，而是用Vector3

```js
// this.camera.lookAt({ x: 0, y: 0, z: 0 });
   this.camera.lookAt(new THREE.Vector3(0, 0, 0));
```

- 模型显示不完整

把camera的far设置的远一些

```js
// this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
   this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 4000);
```

