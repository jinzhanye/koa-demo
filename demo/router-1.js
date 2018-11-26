/* 无中间件版本 */
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(async (ctx) => {
    const url = ctx.request.url;
    ctx.body = await route(url);
});

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

async function route(url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    return await render(page);
}

app.listen(8000);
console.log('listen port 8000 ....');
