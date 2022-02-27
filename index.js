const Koa = require('koa');
const KoaRouter = require('@koa/router');
const { runScript } = require('./run');

const app = new Koa();
const router = new KoaRouter();

router.post('/simple-server', (ctx, next) => {
    // const request = ctx.request;

    // console.log(request);

    runScript('simple-server');

    next();
});

router.post('/simple', (ctx, next) => {
    // const request = ctx.request;

    runScript('simple');

    next();
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3003);

console.log('app in http://47.103.67.54:3003');