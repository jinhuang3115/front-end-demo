/**
 * Created by jin.huang on 17/1/9.
 */
import ReactServerDom from 'react-dom/server'
import React from 'react';
import Layout from './layout/layout';
import Header from '../static/component/header/header';
module.exports = function (req, scriptFilename) {
    return ReactServerDom.renderToString(
        <Layout title='test'>
            <Header/>
            <div>1111</div>
        </Layout>
    );
};