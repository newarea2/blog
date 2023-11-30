import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as d,b as e,d as n,f as s,a as r}from"./app-90f462c1.js";const c={},o=e("h1",{id:"http请求和响应组成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http请求和响应组成","aria-hidden":"true"},"#"),n(" http请求和响应组成")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="请求组成" tabindex="-1"><a class="header-anchor" href="#请求组成" aria-hidden="true">#</a> 请求组成</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;method&gt; &lt;request-url&gt; &lt;version&gt;
&lt;headers&gt;
 
&lt;entity-body&gt;&lt;/entity-body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第一行包括请求方法；文档路径、不包括协议和域名的绝对路径 URL；使用的 HTTP 协议版本</li><li>接下来的行每一行都表示一个 HTTP 首部，为服务器提供关于所需数据的信息，这些 HTTP 首部组成以一个空行结束的一个块。</li><li>最后一块是可选数据块，包含更多数据，主要被 POST 方法所使用。</li></ul><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&amp;request=Send%20me%20one%20of%20your%20catalogue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>协议规定 POST 提交的数据必须放在消息主体（entity-body）中，但协议并没有规定数据必须使用什么编码方式。实际上，开发者完全可以自己决定消息主体的格式，只要最后发送的 HTTP 请求满足上面的格式就可以。</p><h2 id="响应组成" tabindex="-1"><a class="header-anchor" href="#响应组成" aria-hidden="true">#</a> 响应组成</h2><ul><li>第一行是 状态行，包括使用的 HTTP 协议版本，状态码和一个状态描述（可读描述文本）。</li><li>接下来每一行都表示一个 HTTP 首部，为客户端提供关于所发送数据的一些信息（如数据大小，使用的压缩算法，缓存指示）。与客户端请求的头部块类似，这些 HTTP 首部组成一个块，并以一个空行结束。</li><li>最后一块是数据块，包含了响应的数据 （如果有的话）</li></ul><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: &quot;51142bc1-7449-479b075b2891b&quot;
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

&lt;!DOCTYPE html... (这里是 29769 字节的网页HTML源代码)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function m(b,h){const i=t("ExternalLinkIcon");return a(),d("div",null,[o,e("ul",null,[e("li",null,[n("MDN"),e("a",v,[n("典型的 HTTP 会话"),s(i)])])]),u])}const g=l(c,[["render",m],["__file","request-response.html.vue"]]);export{g as default};
