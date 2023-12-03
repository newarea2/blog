# 基础使用

[Beginner’s Guide](http://nginx.org/en/docs/beginners_guide.html)

默认情况下，nginx 配置文件存放在 `/etc/nginx` 路径下，主配置文件是 `nginx.conf`，子配置文件在 `/etc/nginx/conf.d`路径下，后缀是conf

nginx.conf:

```conf
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

#运行用户，默认即是nginx，可以不进行设置
user nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes auto;
#错误日志存放目录
error_log /var/log/nginx/error.log;
#进程pid存放位置
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2 default_server;
#        listen       [::]:443 ssl http2 default_server;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers HIGH:!aNULL:!MD5;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }

}
```

## 1 提供静态内容

首先新建测试目录及文件，在 /root/workspace/data 目录下新建 test.html，在 /root/workspace/data/images 目录下存放一张照片image1.png。

注释掉 nginx.conf 文件中已有的 server 指令部分，改为

```conf
server {
  location / {
    root /root/workspace/data;
  }

  # 匹配以/images开头的请求，因为只是匹配规则，所以这里写成/images/也可以
  location /images {
    root /root/workspace/data/;
  }
}
```

上面的 `/`、`/images`是匹配规则

如在浏览器请求地址 `http://49.234.187.153/test.html`，匹配第一个location，`root地址 + 请求地址pathname` 构成最终请求文件在服务器中的地址，即/root/workspace/data/test.html

![](http://image.newarea.site/2023-12-04-00-16-03.png)

如在浏览器请求地址 `http://49.234.187.153/images/image1.png`，虽然两个location都匹配，但第二个匹配得更精确点（或者说 location 指令值更长）。根据 `root地址 + 请求地址pathname` 可以，服务器回去找/root/workspace/data/images/image1.png。

### location 中的前缀字符串不是固定的

```
location /data {
  root /root/workspace;
}
```

当访问 `http://49.234.187.153/data/test.html` 也能请求成功。

### 使用正则

location 值可以是一个前缀字符串，也可以是一个正则表达式，正则表达式以 `~`（区分大小写）或 `~*`（不区分大小写） 开头，修改上面的配置信息：

```
location ~\.(gif|jpg|png)$ {
  root /root/workspace/data/images;
}
```

## 2 简单的代理服务器

创建 /root/workspace/data1/test1.html 文件，nginx.conf 中部分配置如下

```
server {
  location / {
    proxy_pass http://localhost:8005;
  }

  location ~\.(gif|jpg|png)$ {
    root /root/workspace/data/images;
  }
}

server {
  listen 8005;
  # 当下面的 location 块中没有 root 时，就用这里的root
  root /root/workspace/data1;
  location / {
  }
}
```

此时 `http://49.234.187.153:8005/test1.html` 和 `http://49.234.187.153/test.html` 都可以访问到 /root/workspace/data1/test1.html