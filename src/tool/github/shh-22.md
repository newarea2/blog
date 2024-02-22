# ssh:connect to host github.com port 22: Connection timed out

可能是由于电脑的防火墙或者其他网络原因导致ssh连接方式 端口22被封锁。如果22号端口不行，那就换一个端口。

进入 .ssh 目录下，新建文件 config，内容：

```plain
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443

Host gitlab.com
Hostname altssh.gitlab.com
User git
Port 443
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```
