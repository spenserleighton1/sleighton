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
            <div>
                test
            </div>
        )
    }
}

export default Home;
