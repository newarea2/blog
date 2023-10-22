# 校验 Node 安装包完整性

计算 node-v18.17.1-x64.msi sha256 哈希值：

```
certutil -hashfile node-v18.17.1-x64.msi SHA256
```

或者使用 Git Bash

```
openssl dgst -sha256  node-v18.17.1-x64.msi
```

查看 node-v18.17.1-x64.msi 哈希值，并与本地得到的哈希值比较：

![](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230820/02.png)

![](https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230820/03.png)
