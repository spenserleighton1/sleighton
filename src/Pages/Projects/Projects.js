import React, { Component } from 'react';
import './Projects.scss';
import CardFlip from '../../Components/CardFlip'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Projects extends Component {
    constructor() {
        super()

        this.state = {
            projects: [
                { 
                    title: 'collecshare',
                    tech: '',
                    description: '',
                    image: ''},
                { 
                    title: 'erica site',
                    tech: '',
                    description: '',
                    image: ''},
                { 
                    title: 'react native thing',
                    tech: '',
                    description: '',
                    image: ''},
                { 
                    title: 'lol at this one',
                    tech: '',
                    description: '',
                    image: ''}
            ]
        }
    }

    displayProjects = (projects) => {
        return projects.map(proj => {
            return <Col sm={6} md={4} xl={3}><CardFlip {...proj} /></Col>
        })
    }

    render() {
        let projects = this.displayProjects(this.state.projects)
        return(
            <div className="home">
                <div className="name-container">
                    <div className="name-bg"></div>
                    <div className="name-fg">
                        <h1>Projects</h1>
                        <Container>
                            <Row>
                                { projects }
                            </Row>
                        </Container>
                        {/* <h2>A few of the projects I am currently working on. </h2>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu odio, commodo vitae mollis sit amet, sodales ut orci. Cras elit lacus, luctus vel nisi commodo, congue fringilla odio. Maecenas et laoreet dolor. Proin vel metus ipsum. Proin ac turpis.</h2> */}
                    </div>
                    <div className="name-sh">
                        <h1>nbd</h1>
                        <h2>She can stay afloat with the first four compartments breached but not five. Not five. She goes down by the head, the water will spill over the bulkheads, from one to the next back and back there's no stopping it.</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;