---
title: 文件处理
date: 2020-08-18
tags:
 - Buffer
 - audio
categories: 
 - Js
---

## 从input获取文件

```js
file.onchange = function (event) {
    var file = event.target.files[0];
    // 开始识别
    var reader = new FileReader();
    reader.onload = function (event) {
        // arrBuffer就是包含文件数据的ArrayBuffer对象
        var arrBuffer = event.target.result;
    });
    reader.readAsArrayBuffer(file);
};
```

## 数据格式

### ArrayBuffer

> 大家可以理解为把音频文件分解成一段一段的，塞进了一个一个有地址的小屋子里，在计算机领域称为“缓冲区”，就是单词Buffer的意思

### AudioBuffer

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer)

> AudioBuffer是一个仅仅包含音频数据的数据对象，是Web Audio API中的一个概念。他是音频专用Buffer对象，包含很多音频信息

| 属性               | 说明     |
| ------------------ | -------- |
| `duration`         | 音频时长 |
| `numberOfChannels` | 声道数量 |
| `sampleRate`       | 采样率   |

| 方法                | 说明         |
| ------------------- | ------------ |
| `getChannelData()`  | 获取通道数据 |
| `copyFromChannel()` | 复制通道数据 |
| `copyToChannel()`   | 写入通道数据 |

## 数据格式转换

### `ArrayBuffer`转 `AudioBuffer`

```js
var audioCtx = new AudioContext();

audioCtx.decodeAudioData(arrBuffer, function(audioBuffer) {
    // audioBuffer就是AudioBuffer
});
```

### `AudioBuffer` 转`WAV`

```js
// Convert AudioBuffer to a Blob using WAVE representation
function bufferToWave(abuffer, len) {
    var numOfChan = abuffer.numberOfChannels,
    length = len * numOfChan * 2 + 44,
    buffer = new ArrayBuffer(length),
    view = new DataView(buffer),
    channels = [], i, sample,
    offset = 0,
    pos = 0;

    // write WAVE header
    // "RIFF"
    setUint32(0x46464952);
    // file length - 8                      
    setUint32(length - 8);
    // "WAVE"                     
    setUint32(0x45564157);
    // "fmt " chunk
    setUint32(0x20746d66);  
    // length = 16                       
    setUint32(16);  
    // PCM (uncompressed)                               
    setUint16(1); 
    setUint16(numOfChan);
    setUint32(abuffer.sampleRate);
    // avg. bytes/sec
    setUint32(abuffer.sampleRate * 2 * numOfChan);
    // block-align
    setUint16(numOfChan * 2);
    // 16-bit (hardcoded in this demo)
    setUint16(16);                           
    // "data" - chunk
    setUint32(0x61746164); 
    // chunk length                   
    setUint32(length - pos - 4);                   

    // write interleaved data
    for(i = 0; i < abuffer.numberOfChannels; i++)
        channels.push(abuffer.getChannelData(i));

    while(pos < length) {
         // interleave channels
        for(i = 0; i < numOfChan; i++) {
            // clamp
            sample = Math.max(-1, Math.min(1, channels[i][offset])); 
            // scale to 16-bit signed int
            sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0; 
            // write 16-bit sample
            view.setInt16(pos, sample, true);          
            pos += 2;
        }
        // next source sample
        offset++                                     
    }

    // create Blob
    return new Blob([buffer], {type: "audio/wav"});

    function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
    }

    function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
    }
}
```

## 剪切音频

```js
// 声道数量和采样率
var channels = audioBuffer.numberOfChannels;
var rate = audioBuffer.sampleRate;

// 截取前3秒
var startOffset = 0;
var endOffset = rate * 3;
// 3秒对应的帧数
var frameCount = endOffset - startOffset;

// 创建同样采用率、同样声道数量，长度是前3秒的空的AudioBuffer
var newAudioBuffer = new AudioContext().createBuffer(channels, endOffset - startOffset, rate);
// 创建临时的Array存放复制的buffer数据
var anotherArray = new Float32Array(frameCount);
// 声道的数据的复制和写入
var offset = 0;
for (var channel = 0; channel < channels; channel++) {
    audioBuffer.copyFromChannel(anotherArray, channel, startOffset);
    newAudioBuffer.copyToChannel(anotherArray, channel, offset);
}

// newAudioBuffer就是全新的复制的3秒长度的AudioBuffer对象
```

### 直接播放音频

```js
// 创建AudioBufferSourceNode对象
var source = audioCtx.createBufferSource();
// 设置AudioBufferSourceNode对象的buffer为复制的3秒AudioBuffer对象
source.buffer = newAudioBuffer;
// 这一句是必须的，表示结束，没有这一句没法播放，没有声音
// 这里直接结束，实际上可以对结束做一些特效处理
source.connect(audioCtx.destination);
// 资源开始播放
source.start();
```

### \<audio>播放音频

```html
<audio id="audio" controls=""></audio>
```

转成blob

```js
var blob = bufferToWave(newAudioBuffer, frameCount);// 具体方法在转WAV中
audio.src = URL.createObjectURL(blob);
```

转成base64

```js
var reader2 = new FileReader();
reader2.onload = function(event){
    audio.src = event.target.result;
};
reader2.readAsDataURL(blob);
```

## 参考文章

[张鑫旭 - JS纯前端实现audio音频剪裁剪切复制播放与上传](https://www.zhangxinxu.com/wordpress/2020/07/js-audio-clip-copy-upload/?shrink=1)

<div style='background: -webkit-linear-gradient(top, transparent 19px, #ececec 20px), -webkit-linear-gradient(left, transparent 19px, #ececec 20px);             background-size: 20px 20px;'>
	这里是文章所有的内容             
</div>

