/**
 * Created by jin.huang on 17/1/9.
 */
import React from 'react';
const Layout = function(title, content){
    return '<html>' +
            '<head>' +
                '<title>' + title + '</title>' +
                '<script src="vendor.js"></script>' +
            '</head>' +
                '<body>' +
                    '<div id="main">' + content + '</div>' +
                    '<script src="index.js"></script>' +
                '</body>' +
            '</html>';
};

export default Layout;