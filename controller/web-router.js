/**
 * Created by jin.huang on 17/1/9.
 */
import routerConfig from './router-config';
module.exports = function(ctx, next){
    let page = routerConfig[ctx.request.url];
    if (page){
        ctx.body = page();
    }
};