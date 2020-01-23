import React, { Component } from 'react';

import{Modal, Grid,Card, Image,Icon} from 'semantic-ui-react';

class Stack extends Component{
    constructor(){
        super()
        this.state = {
            stack: 'all',
            skill: 'all',
            selectedSkills: [],
        }
        this.skills = {
            frontend: ['React.js','Node.js','javascript','HTML','DOM Manipulation','jQuery','CSS' ],
            backend: ['python','SQL','Java', 'noSQL', 'Mongo', 'MongoDB', 'Express.js'],
            languages: ['Java','javascript','python','c#'],
            other: ['git','slack','svg','agile teamwork'],
            all: ['all', 'React.js','Node.js','javascript', 'Java', 'C#', 'HTML5','DOM Manipulation','jQuery','CSS3','Python','SQL', 'noSQL', 'Mongoose', 'MongoDB', 'Express.js','git','slack','svg','agile teamwork']
        }
    }
    selectSkill = (skill) => {
        this.setState({
            skill: skill
        })
    }
    render(){
        console.log('stack props',this.props);
        const skills = this.skills['all'].map((skill)=>(
            <div className="stack-list-item"
                 onClick={()=>this.selectSkill(skill)}
            >
                {skill}
                {skill !== this.state.skill ? <Icon ></Icon> :
                    <Icon name="circle"></Icon>
                }
            </div>
        ));
        let projectCollection = this.state.skill === 'all' ? this.props.projects : 
        this.props.projects.filter((project) => project.skills.includes(this.state.skill));
        if(!projectCollection.length){
            projectCollection = this.props.projects
        }
        const projects = projectCollection.map((project) => (
            <Card style={{width:'15vw',height:'15vw',margin:".5vw"}}>
                <Image src={project.src} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{project.name}</Card.Header>
                </Card.Content>
            </Card>
            )
        )
        return(
            <Modal.Content style={{height:'70vh'}}>
                <Modal.Description> 
                    <Grid columns={2}>
                        <Grid.Column width={5} style={{textAlign:'right'}}>
                            {skills}
                        </Grid.Column>
                        <Grid.Column width={11}>
                         <div className="stack-display flex-container">
                            {projects}
                         </div>   
                        </Grid.Column>
                    </Grid>
                </Modal.Description>
            </Modal.Content>
        )
    }
}

   


export default Stack