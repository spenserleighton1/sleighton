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
        return(
            <div className="home">
                <div className="header">
                    <div className="name-container">
                        <div className="name-bg"></div>
                        <h1 className="name-fg">Backbone Media</h1>
                    </div>
                </div>
                test
            </div>
        )
    }
}

export default Home;
