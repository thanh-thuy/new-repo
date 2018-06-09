import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


class ShowUserLink extends PureComponent{

    renderUserList = () => this.props.userList.map((item, index)=><Link key={index} to={'/users/'+item}><li>{item}</li></Link>);


    render(){
        return (
            <div>
                <h3>Profile użytkownikow: </h3>
                <ul>
                    {this.renderUserList()}
                </ul>
            </div>
        )
    }
}

export default ShowUserLink;
