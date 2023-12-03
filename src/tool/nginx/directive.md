# 指令

## 1指令分类

### 简单指令

一个简单的指令由名称和参数组成，名称和参数之间用空格分隔，并以**分号**（;）结尾。如：

```
user nginx;
```

### 块指令

块指令的结构与简单指令的结构相同，它的结尾不是分号，而是一组用花括号（{和}）括起来的附加指令。如果块指令在括号内有其他指令，则它被称为上下文。如：

```
location / {
  root /usr/share/nginx/html;
}
```
http 下可以有多个 server，server 下面可以有多个 location。

## 如何在官网查找指令解释

[官网Document](http://nginx.org/en/docs/) Modules reference部分中列出了指令菜单，菜单前缀主要三种，分别是ngx_http_、ngx_mail_、ngx_stream_，其中一些常用指令解释，如：

- [user、worker_processes、pid等指令](http://nginx.org/en/docs/ngx_core_module.html)
- [http、server、location指令讲解](http://nginx.org/en/docs/http/ngx_http_core_module.html)
- [index指令讲解](http://nginx.org/en/docs/http/ngx_http_index_module.html)
- [proxy代理相关指令讲解](http://nginx.org/en/docs/http/ngx_http_proxy_module.html)

在指令讲解部分，Syntax 表示语法、Default 表示默认值、Context表示配置段（即该指令可用于哪些指令中）

## 常见指令

### location

location 后面的路径的作用是用于匹配请求，因为一个 server 里可能有好几个location，通过location 后面的路径，可以决定那个location 来处理对应的请求。

指令值可以是前缀字符串或正则表达式。

**前缀字符串**

用于匹配请求URI pathname 的开头。

**正则表达式**

正则表达式使用前面的 `~*` 修饰符（用于不区分大小写的匹配）或 `~` 修饰符（用于区分大小写的匹配）指定。

为了找到与给定请求匹配的 location，Nginx 首先检查使用前缀字符串定义的 location。其中，匹配的前缀最长的 location 被选中并记忆。然后检查正则表达式 location（按照它们在配置文件中出现的顺序）。正则表达式的搜索在第一次匹配时终止，并使用相应的配置。如果找不到与正则表达式的匹配项，则使用前面记住的前缀位置的配置。

### root

用于构造实际资源路径，际资源路径是通过向 root 指令的值追加 pathname 来构造的。

实际资源路径 = root 指令的值 + URI pathname，如：

```
location /i/ {
    root /data/w3;
}
```

对于请求 `http://localhost:80/i/top.gif`，`/data/w3/i/top.gif` 将被返回。

### alias

与 root 作用类似。

实际资源路径 = alias 指令的值 + pathname（丢弃与location匹配的部分）。

```
location /i/ {
    alias /data/w3/images/;
}
```

对于请求 `http://localhost:80/i/top.gif`，`/data/w3/images/top.gif` 将被返回。

使用 alias 时，目录名后面一定要加 `/`

### index

[ngx_http_index_module](https://nginx.org/en/docs/http/ngx_http_index_module.html)

默认值 index index.html。

### try_files

[参考](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)

按指定顺序检查文件是否存在，并使用第一个找到的文件进行请求处理。如果没有找到任何文件，则使用最后一个参数指定的 URI，如：

```
location / {
  try_files $uri $uri/ /index.html;
}
```

例如在 Vue 项目中，如果路由使用 history 模式，生成环境使用 Nginx 部署时就需要使用该指令。

### proxy_pass

设置代理服务器。

```
# 当 Nginx 收到以 /api 开头的请求时，将请求代理到 http://139.9.232.44:8000 服务器
location  /api {
  proxy_pass  http://139.9.232.44:8000;
}
```

### rewrite

语法：`rewrite regex replacement [flag];`

如果正则表达式 `regex` 与请求 URI 匹配，则 URI 将按 `replacement` 进行更改。

```
# 当 Nginx 收到以 /api 开头的请求时，将请求代理到 http://139.9.232.44:8000 服务器，
# 并去掉开头的 /api (因为实际后端接口没有/api)。
location  /api {
  proxy_pass  http://139.9.232.44:8000;
  rewrite ^/api/(.*) /$1 break;
}
```
