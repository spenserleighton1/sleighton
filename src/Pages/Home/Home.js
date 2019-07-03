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
                <div className="header">
                    <div className="name-container">
                        <div className="name-bg"></div>
                        <h1 className="name-fg">Spenser Leighton</h1>
                        <h1 className="name-sh">Software Developer</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
