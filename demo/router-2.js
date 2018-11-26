const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const home = new Router();
home.get('/jspang', async (ctx) => {
    ctx.body = `Home JSPang, queryString:${ctx.querystring}`;
}).get('/todo', async (ctx) => {
    ctx.body = 'Home ToDo';
});
const page = new Router();
page.get('/jspang', async (ctx) => {
    ctx.body = 'Page JSPang';
}).get('/todo', async (ctx) => {
    ctx.body = 'Page ToDo';
});
// 路由嵌套，装载所有子路由
const router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());
// 非嵌套路由
router.get('/', (ctx, next) => {
    ctx.body = 'I am index';
});

// 加载路由中间件
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(8000, () => {
    console.log('listen port 8000 ....');
});
