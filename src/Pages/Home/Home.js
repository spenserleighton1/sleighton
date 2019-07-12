import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    constructor() {
        
        super()
        this.state = {
            test: 'hello squirrell'
        }
    }

    render() {
        let homeClass = this.props.menuStatus + ' home';
        return(
            <div className={ homeClass }>
                <div className="name-container">
                    <div className="name-bg"></div>
                    <div className="name-fg">
                        <h1>Spenser Leighton</h1>
                        <h2>Hello, I'm a<span className="inside-joke">n</span> software developer based in Denver CO. </h2>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu odio, commodo vitae mollis sit amet, sodales ut orci. Cras elit lacus, luctus vel nisi commodo, congue fringilla odio. Maecenas et laoreet dolor. Proin vel metus ipsum. Proin ac turpis.</h2>
                    </div>
                    <div className="name-sh">
                        <h1>Software Developer</h1>
                        <h2>She can stay afloat with the first four compartments breached but not five. Not five. She goes down by the head, the water will spill over the bulkheads, from one to the next back and back there's no stopping it.</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
