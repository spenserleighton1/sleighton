import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            test: 'contact page'
        }
    }

    render() {
        return(
            <div>
                { this.state.test }
            </div>
        )
    }
}

export default Contact;