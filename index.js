/**
 * Created by jin.huang on 16/9/21.
 */
const register = require('babel-register');
register({
    presets: [ 'es2015', 'react' ],
    extensions: [ '.js' ],
});
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const staticCache = require('koa-static-cache');
const webRouter = require('./controller/web-router');

router.get('/index', webRouter);

global.status = 'browser';
app.use(staticCache('./dist', {
    maxAge: 60 * 60 * 24 * 365,
    gzip: true
}));
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3500);