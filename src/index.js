import IconFontOnline from './iconfont-online/iconfont-online.js'

const install = function (Vue, options = {
    url: '//at.alicdn.com/t/font_2292720_gpwudclzhf6.css',
    symbol: 'alibaba-',
    fontFamily: 'alibaba-icon',
    fontSize: 16
}) {
    if (Object.prototype.toString.call(options) == '[object Array]') {
        options.forEach(item => {
            IconFontOnline.loadIcon(item)
        });
    } else {
        IconFontOnline.loadIcon(options)
    }
}

export default install;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}