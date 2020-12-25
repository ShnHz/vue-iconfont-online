# vue-iconfont-online

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-iconfont-online.svg)](https://www.npmjs.com/package/vue-iconfont-online)
[![npm-downloads](https://img.shields.io/npm/dm/vue-iconfont-online.svg)](https://www.npmjs.com/package/vue-iconfont-online)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-iconfont-online.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-iconfont-online)

[English](./README.md) | [DEMO](https://www.sanghangning.cn/blog/vue/vueIconFontOnline.html)

## 安装

该插件可以通过npm安装。

Using npm:
```bash
npm install --save vue-iconfont-online
```

Using yarn:
```bash
yarn add vue-iconfont-online
```

## 使用方法

vue-iconfont-online 在 main.js 内引用即可

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

如果要加载多个图标库 

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

|  参数  | 说明 | 类型 | 默认值 |
|  :----  | :---- | :----: | :----: |
| url  | 阿里巴巴iconfont项目的在线链接 | String | //at.alicdn.com/t/font_2292720_gpwudclzhf6.css |
| symbol  | 阿里巴巴iconfont项目设置的FontClass/Symbol 前缀 | String | alibaba- |
| fontFamily  | 阿里巴巴iconfont项目设置的 Font Family | String | alibaba-icon |
| fontSize  | 图标默认大小 | Number | 16 |

<br>
<br>

## iconfont 图标库如何生成在线链接

[阿里巴巴矢量图标库](https://www.iconfont.cn/)

1.选择想要添加的图标

2.单击右上角购物车图标

<div>
<img src="https://cdn.chenyingshuang.cn/blog/vue/vue-iconfont-online/step1.png">
</div>

3.添加至项目

4.选择一个项目或新增一个项目

<div>
<img src="https://cdn.chenyingshuang.cn/blog/vue/vue-iconfont-online/step3.png">
</div>

5.生成代码，此时就获得了图标库的在线链接

<div>
<img src="https://cdn.chenyingshuang.cn/blog/vue/vue-iconfont-online/step5.png">
</div>
<div>
<img src="https://cdn.chenyingshuang.cn/blog/vue/vue-iconfont-online/step6.png">
</div>

6.在“更多操作 -> 编辑项目”中，可以设置图标库的Font Family及FontClass/Symbol 前缀
<div>
<img src="https://cdn.chenyingshuang.cn/blog/vue/vue-iconfont-online/step7.png">
</div>