import React, { Component } from 'react';

import{Modal, Grid,Card, Image} from 'semantic-ui-react';

class Stack extends Component{
    constructor(){
        super()
        this.state = {
            stack: 'all',
            selectedSkills: [],
        }
        this.skills = {
            frontend: ['React.js','Node.js','javascript','HTML','DOM Manipulation','jQuery','CSS' ],
            backend: ['python','SQL','Java', 'noSQL', 'Mongo', 'MongoDB', 'Express.js'],
            languages: ['Java','javascript','python','c#'],
            other: ['git','slack','svg','agile teamwork'],
            all: ['React.js','Node.js','javascript','HTML','DOM Manipulation','jQuery','CSS','python','SQL','Java', 'noSQL', 'Mongo', 'MongoDB', 'Express.js','git','slack','svg','agile teamwork']
        }
    }
    shuffle = (arr) => {

    }
    render(){
        console.log('stack props',this.props);
        const skills = this.skills[this.state.stack].map((skill)=>(
            <div>{skill}</div>
        ));
        let projectCollection = this.state.selectedSkills.length ? this.props.projects : this.props.projects;
        const projects = projectCollection.map((project) => (
            <Card style={{width:'20vw',height:'20vw'}}>
                <Image src={project.src} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{project.name}</Card.Header>
                    <Card.Meta>
                        {project.description}
                    </Card.Meta>
                    {/* <Card.Description>
                        {project.stack}
                    </Card.Description> */}
                </Card.Content>
            </Card>
            )
        )
        return(
            <Modal.Content>
                <Modal.Description> 
                    <Grid columns={2}>
                        <Grid.Column width={3}>
                            {skills}
                        </Grid.Column>
                        <Grid.Column width={13}>
                            {projects}
                        </Grid.Column>
                    </Grid>
                </Modal.Description>
            </Modal.Content>
        )
    }
}

   


export default Stack