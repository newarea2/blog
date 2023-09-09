# height

如果单位是 `%`，则相对的是父元素内容区的高度（前提是父元素有设置高度）。

当 box-sizing 为 content-box，height 设置的是内容区高度。
当 box-sizing 为 border-box，height 设置的是内容区高度 + 内边距高度 + 边框高度 。

当父元素 position: relative，子元素 position: absolute，则子元素 height: 100% 相对的是父元素 内容区高度+ 内边距高度

