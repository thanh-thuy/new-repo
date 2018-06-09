import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import '../App.css';



class Users extends PureComponent{

    state ={
        details: {},
    };

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.userList}?client_id=0acc7a2d55facf3b2fcd&client_secret=d45f2c1fc584f986532b3f3f821331c895965212`)
            .then(response => response.json())
            .then(data => this.setState({
                details: data,
            }));
    }

    componentDidUpdate() {
        console.log(this.state.details);
    }

    render() {
        return(
            <Fragment>

                <Header content={this.props.match.params.userList}/>
                <Menu/>
                    <section>
                        <p>Twoj profil: {this.props.match.params.userList}</p>
                        <div className="face">
                            <img src={this.state.details.avatar_url} />
                        </div>
                        <div className="name">
                            <li>
                            {this.state.details.login}
                            </li>
                            <li>
                            {this.state.details.email}
                            </li>
                            <li>Biografia: .....
                            </li>
                        </div>
                        <div className="email">

                            Links to repo:
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>

                        </div>
                    </section>

                     
                <Footer content=""/>
            </Fragment>
        )
    }


};

export default Users