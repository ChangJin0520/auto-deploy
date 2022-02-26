const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
    const response = ctx.response;

    console.log(response);
})

app.listen(3003);