import React, { PureComponent, Fragment } from 'react';

import '../App.css'

export default class Header extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="header">
                <h1>{this.props.content}</h1>     
                </div>
            
            </Fragment>
        );
    }
}