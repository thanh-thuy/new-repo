import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state ={
        details: [],
    };

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                details: data.results,
            }));
    }

    componentDidUpdate() {
        console.log(this.state.details);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.state.details && this.state.details.map(item=>{
          return (
              <p>
                  <img src={item.picture.thumbnail} />
                  {item.email}
              </p>

          )
          })
          }

      </div>



    );
  }
}

export default App;
