# 字面量推断 Literal Inference

当变量初始化一个字面量对象时，对象的类型会被推断出来

![08](http://image.newarea.site/20230713/08.png)

解决：

```ts
type Method = "GET" | "POST"
declare function handleRequest(url: string, method: Method): void

const req = { url: "https://example.com", method: "GET" }

handleRequest(req.url, req.method as Method)
```