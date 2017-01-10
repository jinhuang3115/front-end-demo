/**
 * Created by jin.huang on 17/1/10.
 */
import React from 'react';
//import 'header.scss';
module.exports = class Header extends React.Component {
    render(){
        return (
            <h1 onClick={this.click}>我是header</h1>
        )
    }
    click(){
        console.log(111);
    }
};