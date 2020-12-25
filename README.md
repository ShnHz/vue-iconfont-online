# vue-touch-box

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![npm-downloads](https://img.shields.io/npm/dm/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-touch-box.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-touch-box)

[DEMO](https://www.sanghangning.cn/blog/vue/VueTouchBox.html)

[中文文档](./README.zh-CN.md)


PC touch to elements was never this easy!

This is for `vue 2.x`

## Installing

This package is available on npm.

Using npm:
```bash
npm install --save vue-touch-box
```

Using yarn:
```bash
yarn add vue-touch-box
```

## Usage

vue-touch-box can be used as a vue directive.

### As a vue directive
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

|  Attribute  | Description | Default |
|  :----  | :----  | :----: |
| speed  | scrolling speed. | 1 |
| mobile  | open the mobile. | false |
| inertia  | open the scroll inertia. | true |
| rebound  | scroll rebound,if horizontal scrolling then fail.| true |