/**
 * Created by jin.huang on 17/1/9.
 */
import React from 'react';
const Layout = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
            </head>
            <body>
            {this.props.children}
            </body>
            </html>
        );
    }
});

module.exports = Layout;