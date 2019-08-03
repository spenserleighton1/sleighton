import React, { Component } from 'react';
import './Titanic.scss';

class Titanic extends Component {
  constructor() {
    super()
    this.state = {
      titanicComplete: ['t','i','t','a','n','i','c'],
      titanicProgress: [],
      position: 0,
      celibrate: false
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
      console.log('heck no')
    } else {
      this.setState({ position: this.state.position += 1 });
      if (titanicProgress.length === titanicComplete.length) {
        console.log('yeah bud')
        setTimeout(() => {
            this.setState({ 
                celibrate: true,
                titanicProgress: [],
                position: 0
             })
        }, 800);
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.theTitanic, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.theTitanic, false);
  }

  handleClose = () => {
    this.setState({ celibrate: false})
  }

  render() {
    if (this.state.celibrate) {
       return (
      <div className={ this.state.celibrate ? "titanic-container" : "titanic-container hidden" }>
      
        <button onClick={this.handleClose}>Close that shit out</button>
        <iframe className="titanic-vid" width="600" height="355" src="https://www.youtube.com/embed/otgWwcUuWO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    ); 
    } else {
        return (<div className="titanic-container text">{this.state.titanicProgress.join("")}</div>)
    }
    
  }
}

export default Titanic;
