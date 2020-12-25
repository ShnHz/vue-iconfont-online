/*
 * online-iconfont.js 1.0.0
 * @Author: ShnHz 
 * @Date: 2020-12-25 11:47:52 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-12-25 14:41:24
 */

;
(function (window, document, undefined) {
    /*
     * If you would like an application-wide config, change these defaults.
     * Otherwise, use the setMessage() function to configure form specific messages.
     */

    "use strict"
    var _global;

    var plugin = {
        /**
         * 添加Link标签
         *
         * @param {Object} option  传入插件选项
         */
        loadIcon: function (option) {
            this.addLink(option.url)
            this.addClass(option.symbol, option.fontFamily, option.fontSize)
        },
        /**
         * 添加Link标签
         *
         * @param {String} url  传入iconfont css 在线链接（//at.alicdn.com/t/font_0000000_xxxxxxxxxxx.css）
         */
        addLink: function (url = '//at.alicdn.com/t/font_2292720_gpwudclzhf6.css') {
            let headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML += `<link type="text/css" rel="stylesheet" href="${url}">`;
            document.getElementsByTagName('head')[0].innerHTML = headHTML;
        },
        /**
         * 添加iconfont class
         *
         * @param {String} symbol  传入iconfont FontClass/Symbol 前缀
         * @param {String} fontFamily  传入iconfont Font Family
         */
        addClass: function (symbol = 'alibaba-', fontFamily = 'alibaba-icon', fontSize = 16) {
            let headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML += `
            <style type="text/css">
                [class^="${symbol}"], [class*="${symbol}"]
                {
                    font-family:"${fontFamily}" !important;
                    font-size:${fontSize}px;
                    font-style:normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            </style>
            `;
            document.getElementsByTagName('head')[0].innerHTML = headHTML;
        },
    }

    // 最后将插件对象暴露给全局对象
    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = plugin;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return plugin;
        });
    } else {
        !('plugin' in _global) && (_global.plugin = plugin);
    }
})(window, document);