import React, { PureComponent, Fragment } from 'react';
import FacebookLoginButton from '../../Components/FacebookButton/FacebookLoginButton';
import "./login.css";
import '../../Containers/Register.css';
import { Button } from "react-bootstrap";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    state = {
        username: null
    };

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name
            });
        } else {
            alert('Facebook login error');
        }
    }
    render() {
        const { username } = this.state;
        return (
            <Fragment>


                <section>

                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>



                            <FacebookLoginButton onLogin={this.onFacebookLogin}>
                                <Button
                                    block
                                    bsSize="large">
                                    Login with Facebook
                                </Button>
                            </FacebookLoginButton>

                        </form>
                            <div className="App-intro">
                                { !username &&
                                <div>

                                </div>
                                }
                                {username &&
                                <h1>Welcome, {username}</h1>
                                }
                            </div>
                        </div>

                </section>


            </Fragment>
        );
    }
}

export default Login;