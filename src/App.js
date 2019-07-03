import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Menu from './Components/Menu/Menu'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: false
    }
  }

  toggleMenu = () => this.setState({ menu: !this.state.menu})

  render() {
    let menuStatus = this.state.menu ? 'isopen' : ''

    return (
      <div className="App">
      <div id="hambmenu" onClick={ () => this.toggleMenu() } className={ menuStatus }><span></span><span></span><span></span><span></span></div>
      { this.state.menu && 
                    <Menu toggleMenu={ this.toggleMenu } /> }

        <Route exact path={'/'} component={ Home } />
        <Route exact path={'/contact'} component={ Contact } />
      </div>
    );
  }
}

export default App;
