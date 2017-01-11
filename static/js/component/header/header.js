/**
 * Created by jin.huang on 17/1/10.
 */
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <h1 onClick={this.click}>我是header</h1>
        )
    }
    componentDidMount(){
        require('HeaderSass');
    }
    click(){
        console.log(111);
    }
}