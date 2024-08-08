# Clash

Clash [下载](https://clashforwindows100.com/clash-for-windows-download/)。

免费 Clash 节点 [订阅地址](https://github.com/aiboboxx/clashfree?tab=readme-ov-file#clash%E8%AE%A2%E9%98%85%E9%93%BE%E6%8E%A5)。

通过订阅地址添加 Clash 节点配置，可以会提示如下错误：

![](https://image.newarea.site/2024-08-05_10-48-15.png)

表示 Clash 和 服务器（free.2weradf.xyz:36141）之间的加密算法 ss 不被支持，可以通过修改节点配置文件，全局将 `cipher: ss` 替换为 `cipher: AES-256-GCM` 来修复。
