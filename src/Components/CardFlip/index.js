import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import './styles.scss'

export default class CardFlip extends Component {
    constructor() {
      super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
        return (
            <ReactCardFlip  isFlipped={this.state.isFlipped} infinite={true} flipDirection="horizontal">
                <div className="project-card" key="front">
                            <h1>flip me</h1>
                            <h1>{ this.props.title }</h1>

                    
                            <button className="" onClick={this.handleClick}>Get the Details</button>
                </div>
    
                <div className="project-card" key="back">
                        <h1>over bb</h1>
                        <button className="" onClick={this.handleClick}>View More</button>
                    
                </div>
            </ReactCardFlip>
        )
    }
}