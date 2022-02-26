const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World!';
})

app.listen(3003);

console.log('app in http://47.103.67.54:3003');