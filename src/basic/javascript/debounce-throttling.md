# 防抖、节流

[js防抖和节流](https://www.cnblogs.com/momo798/p/9177767.html)

[JavaScript专题之跟着underscore学防抖](https://github.com/mqyqingfeng/Blog/issues/22)

[JavaScript专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)

[_.throttle](https://www.lodashjs.com/docs/lodash.throttle)

[lodash / lodash](https://github.com/lodash/lodash/blob/master/debounce.js)

[防抖(debounce) 和 节流(throttling)](https://blog.csdn.net/hupian1989/article/details/80920324)

## 1 防抖

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。

## 2 节流

当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。