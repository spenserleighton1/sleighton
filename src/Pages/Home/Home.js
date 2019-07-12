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
                        <h1 className="name-fg">Spenser Leighton</h1>
                        <h1 className="name-sh">Software Developer</h1>
                    </div>

                    <div className="about-container">
                        <div className="about-bg"></div>
                        <h2 className="about-fg">Hello, I'm a<span className="inside-joke">n</span> software developer based in Denver CO. </h2>
                        <h2 className="about-sh">She can stay afloat with the first four compartments breached but not five. Not five. She goes down by the head, the water will spill over the bulkheads, from one to the next back and back there's no stopping it.</h2>
                    </div>

            </div>
        )
    }
}

export default Home;
