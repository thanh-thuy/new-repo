import React, { PureComponent, Fragment } from 'react';


export default class ShowUsersList extends PureComponent{

    renderList = () => this.props.userList.map((item)=><div>{item}</div>);

    render(){
        return (
            <Fragment>
            <h3>Lista użytkownikow: </h3>
            {this.renderList()}
            </Fragment>
          
        )
    }
}



