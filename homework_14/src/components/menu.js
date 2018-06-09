import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class Menu extends PureComponent{
    render(){
        return (
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Menu;



