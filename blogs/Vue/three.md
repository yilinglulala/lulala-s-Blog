---
title: vue 中使用 three.js
date: 2020-09-16
tags:
 - three.js
 - vue
categories: 
 - Vue
---

## Three

`npm install three --save`

`import * as THREE from 'three'`

## OBJLoader和MTLLoader

### 引用

```js
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader' // obj文件加载
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader' // 材质mtl文件导入'
```

### 使用

```js
    var mtlLoader = new MTLLoader();
    // mtlLoader.setPath(PUBLIC + '/jxx/models1/');
    mtlLoader.setPath(modelDir + modelpath + "/");
    mtlLoader.load(name + ".mtl", function (materials) {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(modelDir + modelpath + "/");
        objLoader.load(
            name + ".obj",
            function (oo) {
                fn && fn(oo);
            },
            onProgress,
            onError
        );
    });
```

## camera

camera.lookAt(new THREE.Vector3(30, 100, 0));