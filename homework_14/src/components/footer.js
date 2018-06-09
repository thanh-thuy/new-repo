import React, { PureComponent, Fragment } from 'react';
import '../App.css'



export default class Footer extends PureComponent {


    render() {
        return (
            <Fragment>
                <div className="footer">

                    <p className="footer-text">{this.props.content + new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear()}</p>

                </div>
            </Fragment>
        
        );
    }
}