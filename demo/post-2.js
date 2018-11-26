/* 中间件版本 */
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyparser());

app.use(async (ctx) => {
    //当请求时GET请求时，显示表单让用户填写
    if (ctx.url === '/' && ctx.method === 'GET') {
        ctx.body = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>`;
        //当请求时POST请求时
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let parseData = ctx.request.body;
        ctx.body = parseData;
    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
});

app.listen(8000);
console.log('listen port 8000 ....');
