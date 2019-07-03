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
                        <h1 className="name-fg">Backbone Media</h1>
                        <h1 className="name-sh">Backbone Media</h1>
                    </div>
                </div>
                test
            </div>
        )
    }
}

export default Home;
