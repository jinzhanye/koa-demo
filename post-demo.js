const Koa = require('koa');
const app = new Koa();
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
        let parseData = await parsePostData(ctx);
        ctx.body = parseData;
    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
});

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = '';
            ctx.req.on('data', (data) => {
                postdata += data;
            });
            ctx.req.addListener('end', () => {
                let parseData = parseQueryStr(postdata);
                resolve(parseData);
            })
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    Object.entries(queryStrList).forEach(([idx, queryStr]) => {
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    });
    return queryData
}

app.listen(8000);
console.log('listen port 8000 ....');
