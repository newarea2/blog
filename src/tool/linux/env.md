# 环境变量

环境变量是指在操作系统中用来指定操作系统运行环境的一些列参数，包括**系统变量**、**用户变量**，单个环境变量由**变量名**和**值**组成。

- 系统变量：每一个登录到系统的用户都能够读取到系统级的环境变量；
- 用户变量：每一个登录到系统的用户只能够读取属于自己的用户级的环境变量。

## 常用命令

### env

查看当前的环境变量。

![](https://image.newarea.site/2023-12-03-22-09-12.png)

### echo

查看某个环境变量的值

```
[root@VM-4-9-centos ~]# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
```

### export

修改环境变量

```
export PATH=$PATH:[命令的目录]
```

**上面的设置只是临时的，当重新打开一个终端，环境变量会被恢复初始状态**。如果想要永久生效，应该编辑用户主目录下 `.bash_profile` 文件，修改其中的 `PATH` 变量值：

![](https://image.newarea.site/2023-12-03-22-31-21.png)

## 常用环境变量

对于不同的登录用户，同一个环境变量可能存放不同的数据。

### PATH

命令的查找路径。

```
[root@VM-4-9-centos ~]# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
```

环境变量 PATH 由若干个路径经 `:` 拼接而成，我们在执行命令时，系统会自动在这些路径中从前向后依次寻找，找到了就自动执行，而不需要人为说明其所在路径。

### HOME

指定用户的主工作目录（即用户登陆到 Linux 系统中时，默认的目录）。

```
[root@VM-4-9-centos ~]# echo $HOME
/root
```

### SHELL

当前所使用的 Shell。
