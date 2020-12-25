# vue-iconfont-online

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-iconfont-online.svg)](https://www.npmjs.com/package/vue-iconfont-online)
[![npm-downloads](https://img.shields.io/npm/dm/vue-iconfont-online.svg)](https://www.npmjs.com/package/vue-iconfont-online)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-iconfont-online.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-iconfont-online)

[中文文档](./README.zh-CN.md) | [DEMO](https://www.sanghangning.cn/blog/vue/vueIconFontOnline.html)

Makes it easier to reference The Alibaba Iconfont icon library!

This is for `vue 2.x`

## Installing

This package is available on npm.

Using npm:
```bash
npm install --save vue-iconfont-online
```

Using yarn:
```bash
yarn add vue-iconfont-online
```

## Usage

### As a vue directive
JS
```js
import IconFontOnline from 'vue-iconfont-online';
Vue.use(IconFontOnline, {
  url: '//at.alicdn.com/t/font_2292720_gpwudclzhf6.css',
  symbol: 'alibaba-',
  fontFamily: 'alibaba-icon',
  fontSize: 22
})
```

If you want to load multiple icon libraries 

```js
import IconFontOnline from 'vue-iconfont-online';
Vue.use(IconFontOnline, [{
    url: '//at.alicdn.com/t/font_2292720_gpwudclzhf6.css',
    symbol: 'alibaba-',
    fontFamily: 'alibaba-icon',
    fontSize: 22
  },
  {
    url: '//at.alicdn.com/t/font_1151961_6sy5eu8oe36.css',
    symbol: 'shn-',
    fontFamily: 'shni',
    fontSize: 22
  }
])
```

HTML
```html
<i class="alibaba-seleted"></i>
```

## Options

|  Attribute  | Description | Type | Default |
|  :----  | :---- | :----: | :----: |
| url  | Alibaba iconfont online link. | String | //at.alicdn.com/t/font_2292720_gpwudclzhf6.css |
| symbol  | Alibaba iconfont FontClass/Prefix Symbol. | String | alibaba- |
| fontFamily  | Alibaba iconfont FontFamily. | String | alibaba-icon |
| fontSize  | icon default size. | Number | 16 |