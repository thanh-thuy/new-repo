import React, { PureComponent, Fragment } from 'react';


export default class ShowImputValue  extends PureComponent {
    render() {
        return (
            <Fragment>
                <p>Dane: {this.props.userValue}</p>
            </Fragment>
            
        );
    }
}