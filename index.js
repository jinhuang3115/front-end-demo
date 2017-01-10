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
const webRouter = require('./controller/web-router');

router.get('/index', webRouter);

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3300);