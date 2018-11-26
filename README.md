ctx.request和ctx.req的区别

- ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
- ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。

ctx.req.addListener('end') 、 ctx.req.on('data') 原生还是koa提供的方法? 
