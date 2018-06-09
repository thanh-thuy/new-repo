import React, { PureComponent, Fragment } from 'react';
import ShowImputValue from './routes/showInputValue';
import ShowUsersList from './routes/showUserList';
import ShowUserLink from './routes/showUserLink';
import Menu from './components/menu';
import Footer from './components/footer';
import Header from './components/header';
import './App.css';

class App extends PureComponent{
    state ={
        userValue: '',
        userList: [],
    };

    handleAddUser = () => {
        this.setState({
            userList:[...this.state.userList, this.state.userValue],
            userValue:'',
        })
    }


    userOnChange = (event) => {
        this.setState({
            userValue: event.target.value
        })
    }

    componentDidUpdate(){
        console.log(this.state.userList)
    }

    render(){
        return (
            <Fragment>
                <Header content="tweety react-app"/>
                <Menu/>
                
                    <section>
                        <input
                            value={this.state.userValue}
                            placeholder="User Name"
                            onChange={this.userOnChange}
                        />
                        <button onClick={this.handleAddUser}>Dodaj Uzytkownika</button>
                        <ShowImputValue userValue={this.state.userValue}/> 
                        <ShowUsersList userList={this.state.userList}/>
                        <ShowUserLink userList={this.state.userList}/>
                    </section>










                
                <Footer content=""/>
            </Fragment>
            
        );
    }
}

export default App;
