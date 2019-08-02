import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Menu from './Components/Menu/Menu'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: false,
      titanicComplete: ['t','i','t','a','n','i','c'],
      titanicProgress: [],
      position: 0
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

  theTitanic = (event) => {
    event.preventDefault();


    switch (event.keyCode) {
      case 84:
        this.setState({ titanicProgress: [...this.state.titanicProgress, 't']})
        break;
      case 73:
        this.setState({ titanicProgress: [...this.state.titanicProgress, 'i']})
        break;
      case 65:
        this.setState({ titanicProgress: [...this.state.titanicProgress, 'a']})
        break;
      case 78:
        this.setState({ titanicProgress: [...this.state.titanicProgress, 'n']})
        break;
      case 67:
        this.setState({ titanicProgress: [...this.state.titanicProgress, 'c']})
        break;
    
      default:
      console.log('default')
        break;
    }
    this.checkPlayersResponse()
  }

  checkPlayersResponse = () => {
    const { titanicComplete, titanicProgress, position } = this.state

    const lastItem = titanicProgress.length - 1
    if (titanicProgress[lastItem] !== titanicComplete[position]) {
      this.setState({ 
        titanicProgress: [],
        position: 0
      })
      console.log('no')
    } else {
      this.setState({ position: this.state.position += 1 });
      if (titanicProgress.length === titanicComplete.length) {
        console.log('hell yeah')
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.theTitanic, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.theTitanic, false);
  }

  render() {
    let menuStatus = this.state.menu ? 'isopen' : ''
    let appTilt = this.state.menu ? 'App menu-tilt' : 'App'

    return (
      <div>
        <Menu menuStatus={ menuStatus } toggleMenu={ this.toggleMenu }/> 
        <div className={ appTilt }>
          <Header menuStatus={ menuStatus } toggleMenu={ this.toggleMenu } />
          <Route exact path={'/'} render={() => (<Home menuStatus={ menuStatus } />)}/>
          <Route exact path={'/contact'} component={ Contact } />
          <Route exact path={'/projects'} component={ Projects } />
        </div>
      </div>
    );
  }
}

export default App;
