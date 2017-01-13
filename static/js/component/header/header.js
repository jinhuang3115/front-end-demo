/**
 * Created by jin.huang on 17/1/10.
 */
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        let {headerData} = this.props;
        return (
            <h1 onClick={this.click}>{headerData}</h1>
        )
    }
    componentDidMount(){
        require('HeaderSass');
    }
    click(){
        console.log(111);
    }
}