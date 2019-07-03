import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Menu from './Components/Menu/Menu'
import Header from './Components/Header/Header'
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

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu})

      if(this.state.menu) {
        document.body.style.maxHeight = "";
        document.body.style.overflow = "";
      } else {
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";
      }

  }

  render() {
    let menuStatus = this.state.menu ? 'isopen' : ''
    let appTilt = this.state.menu ? 'App menu-tilt' : 'App'

    return (
      <div>
        <Menu toggleMenu={ this.toggleMenu } /> 
        <div className={ appTilt }>
          {/* <div id="hambmenu" onClick={ () => this.toggleMenu() } className={ menuStatus }><span></span><span></span><span></span><span></span></div> */}
          <Header menuStatus={ menuStatus } toggleMenu={ this.toggleMenu } />
          <Route exact path={'/'} component={ Home } />
          <Route exact path={'/contact'} component={ Contact } />
        </div>
      </div>
    );
  }
}

export default App;
