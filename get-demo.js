const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    const url = ctx.url;
    // 从 request 中接收 Get 请求
    const request = ctx.request;
    const requestQuery = request.query;
    const requestQuerystring = request.querystring;

    // 从上下文中获取 Get 请求
    const ctxQuery = ctx.query;
    const ctxQuerystring = ctx.querystring;
    ctx.body = {
        url,
        requestQuery,
        requestQuerystring,
        ctxQuery,
        ctxQuerystring,
    };
});
app.listen(8000);
console.log('listen port 8000 ....');
