import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Users from './routes/user';
import Contact from './routes/contact';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/users/:userList' component={Users}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
