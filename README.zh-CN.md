# vue-touch-box

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![npm-downloads](https://img.shields.io/npm/dm/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-touch-box.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-touch-box)

[DEMO](https://www.sanghangning.cn/blog/vue/VueTouchBox.html)

## 安装

该插件可以通过npm安装。

npm:
```bash
npm install --save vue-touch-box
```

yarn:
```bash
yarn add vue-touch-box
```

## 使用方法

vue-touch-box 可用作 vue 指令.

JS
```js
import VueTouchBox from 'vue-touch-box';

Vue.use(VueTouchBox)
```

HTML
```html
<div v-touch-box>
    touch this
</div>
```

## Options

|  参数  | 说明 | 默认值 |
|  :----  | :----  | :----: |
| speed  | 拖动速度 | 1 |
| mobile  | 是否开启移动端 | false |
| inertia  | 是否开启滚动惯性 | true |
| rebound  | 回弹效果，如果出现横向滚动则失效| true |