## html、xml、txt、log等文件、图片

浏览器会直接打开/展示文件

访问静态文件服务器

![08](/images/20230831/08.png)

![09](/images/20230831/09.png)

将文件拖动到浏览器

如何下载

通过 `<a></a>`

通过 file-read


## 二进制文件

zip 压缩包、word、excel、jar包

会直接下载

访问静态文件服务器

![07](/images/20230831/07.png)

将文件拖动到浏览器


通过流的方式下载，前端如何写

```js
res.setHeader('Content-disposition', `attachment; filename="test-download.png"`);
res.setHeader('Content-Type', 'application/octet-stream');
// pipe generated file to the response
fs.createReadStream('test-download.png').pipe(res);
```
