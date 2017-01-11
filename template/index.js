/**
 * Created by jin.huang on 17/1/9.
 */
import {renderToStaticMarkup, renderToString} from 'react-dom/server'
import React from 'react';
import Layout from './layout/layout';
import Header from '../static/js/component/header/header';
export function getIndexTemplate (req, scriptFilename) {
    return Layout('test', renderToString(<Header/>));
}