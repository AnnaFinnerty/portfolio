import React, {Component} from 'react';
import { Swipeable } from 'react-swipeable';

import Contact from './Contact';
import About from './About';
import Stack from './Stack';

import projects from './projects';

import './App.css';
import {Modal, Grid, Header, Icon, Button} from 'semantic-ui-react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      selectedProject: 0,
      projects: projects,
      playing: false,
      modalOpen: false,
      modalContent: null
    }
    this.icons = {
      Python: 'python',
      Javascript : 'js',
      'HTML5':'html5',
      'React.js' : 'react',
      'Node.js': 'node js',
      'HTMLCanvas': 'paint brush',
      CSS3: 'css3',
      npm: 'npm',
      sass: 'sass',
      github: 'github',
      java: 'coffee'

    }
  }
  componentDidMount(){
    console.log('thanks for checking out the console!')
    console.log('or maybe you just forgot to close it...')
    console.log('(i do thank sometimes too)')
    console.log('contact me at algfinnerty@gmail.com')
    console.log('and lets build something great together')
    const activeProjects = projects.filter((project)=> project.live)
    const startProjects = [];
    for(let i =0; i < activeProjects.length; i++){
      if(activeProjects[i]['start']){
        startProjects.push(i)
      }
    }
    const randomProject = startProjects[Math.floor(Math.random()*startProjects.length)];
    this.setState({
      projects: activeProjects,
      selectedProject: randomProject
    })
  }
  nextProject = () => {
    const nextProject = this.state.selectedProject >= this.state.projects.length - 1 ? 0 : this.state.selectedProject + 1;
    this.setState({
      selectedProject: nextProject
    })
  }
  lastProject = () => {
    const lastProject = this.state.selectedProject === 0 ? this.state.projects.length - 1 : this.state.selectedProject - 1;
    this.setState({
      selectedProject: lastProject
    })

  }
  playSlideshow = () => {
    this.setState({
      playing: true
    })
    console.log('playing slideshow');
    this.interval = setInterval(()=>{
      this.nextProject();
    },5000)
  }
  stopSlideshow = () => {
    this.setState({
      playing:false
    })
    console.log('stopping slideshow');
    clearInterval(this.interval)
  }
  swipe = () => {
    console.log('swiping!');
  }
  openModal = (type) =>{
    this.setState({
      modalOpen: true,
      modalContent: type
    })
  }
  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: null
    })
  }
  getModalContent = () => {
    switch(this.state.modalContent){

      case 'stack':
        return <Stack openModal={this.openModal} projects={this.state.projects}/>

      case 'contact':
        return <Contact openModal={this.openModal}/>

      default:
        return <About openModal={this.openModal}/>
    }
  }
  render(){
    const year = new Date().getFullYear();
    const project = this.state.projects[this.state.selectedProject]
    const projectDots = this.state.projects.map((p,i) =>{
      return(
        <Icon key={i} 
              name={i===this.state.selectedProject?"circle outline": "circle"}
              style={{color:project.dotColor}}
              >
        </Icon>
      )
    })
    const backgroundImage = {
      backgroundImage: 'url('+ this.state.projects[this.state.selectedProject]['src'][0]+')'
    }
    const modalContent = this.state.modalOpen ? this.getModalContent() : '';
    const stack = project.stack.map((item,i) =>{
      const icon = this.icons[item] ? this.icons[item] : 'circle'
      return(
        <React.Fragment key={'stack_'+i}>
          <Icon  
                name={icon}>
          </Icon>
          {item}
        </React.Fragment>
      )
    })
    const collaborators = project.collaborators.map((item,i) =>{
      return(
        <React.Fragment key={'collaborator_'+i}>
          {item.name}
          <br></br>
          <a href={item.url}>
            <Icon  
              name={'github'}>
            </Icon>
            {item.url}
          </a>
        </React.Fragment>
      )
    })
    return (
      <Swipeable onSwiped={(eventData) => this.swipe} >
      <div className="image-display" style={backgroundImage}>
        <header>
          <Grid style={{width:'100%'}} columns={4}>
            <Grid.Column width={11}>
              <Grid.Row><span className="logo" style={{color:project.logoColor}}>Anna Finnerty</span></Grid.Row>
              <Grid.Row><span className="title" style={{color:project.titleColor}} >Web Developer/Software Engineer</span></Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
              <Grid.Row style={{marginTop:'1vh',textAlign:'center'}}>
                <a href='https://www.github.com/AnnaFinnerty' target='_black'>
                  <Icon style={{color:project.titleColor}} size='huge' name='github square' alt='github'></Icon>
                </a> 
                <a href='https://www.linkedin.com/in/annafinnerty/' target='_black'>
                  <Icon style={{color:project.titleColor}} size='huge' name='linkedin' alt='linkedin'></Icon>
                </a> 
                <a href='https://www.instagram.com/annafinnertydesign/' target='_black'>
                  <Icon style={{color:project.titleColor}} size='huge' name='instagram' alt='instagram'></Icon>
                </a> 
              </Grid.Row>
              <Grid.Row>
                <nav style={{marginTop:'1vh',textAlign:'center'}}>
                  <Button style={{color:project.buttonColor}} onClick={()=>this.openModal('stack')}>stack</Button>
                  <Button style={{color:project.buttonColor}} onClick={()=>this.openModal('about')}>about</Button>
                  <Button style={{color:project.buttonColor}} onClick={()=>this.openModal('contact')}>contact</Button>
                </nav>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </header>
        <div className="main-container">
          <nav className="project-nav">
            {
              this.state.playing ? 
              <Button
                onClick={this.stopSlideshow} 
                size='small' 
                style={{float:'left', margin:'1vw',textAlign:'center',color:'red'}}>
                  <Icon name='stop'style={{margin:'0'}}></Icon>
              </Button>
              :
              <Button
                onClick={this.playSlideshow} 
                size='small' 
                style={{float:'left', margin:'1vw',textAlign:'center',color:'green'}}>
                  <Icon name='play' style={{margin:'0'}}></Icon>
              </Button>
            }
            {projectDots}
          </nav>
          <main>
              <Grid className='project' columns={3} style={{margin:'0 auto',height:'auto',maxHeight:'60vh'}}>
                <Grid.Column width={2}>
                    <button className='arrow-button' 
                          onClick={this.lastProject}
                          style={{backgroundColor:'rgba(0,0,0,.1)',color:project.arrowColor,margin:'0 auto',padding:'0'}}
                          >
                    <Icon name="left arrow" 
                          size='big'
                          style={{margin:'0'}}
                          >
                    </Icon>
                  </button>
                </Grid.Column>
                <Grid.Column width={12}>
              <Header><h1>{project.name}</h1></Header>
              <h3>stack</h3>
              {stack}
              <h3>description</h3>
              <p>{project.description}</p>
              {
                !project.collaborators.length ? '' :
                <React.Fragment>
                  <h3>collaborators</h3>
                  {collaborators}
                </React.Fragment>
              }
              <div style={{textAlign:'center', marginTop:'3vh'}}>
              {
                !project.githubUrl ? '':
                <a href={project.url} target='_blank' rel="noopener noreferrer">
                <Button>live</Button>
                </a>
              }
              {
                !project.url ? '':
                <a href={project.githubUrl} target='_blank' rel="noopener noreferrer">
                <Button>github</Button>
                </a>
              }
              </div>
              </Grid.Column>
              <Grid.Column width={2} >
                <button className='arrow-button' 
                        onClick={this.nextProject}
                        style={{backgroundColor:'rgba(0,0,0,.1)',color:project.arrowColor,margin:'0',padding:'0'}}
                      >
                  <Icon name="right arrow" size='big' style={{margin:'0'}}></Icon>
                </button>
              </Grid.Column>
              </Grid>
          </main>
          <footer style={{color:project.logoColor}}>&copy;{year} Annie Finnerty</footer>
        </div>
        <Modal open={this.state.modalOpen} openModal={this.openModal}>
          <Modal.Header>
            {this.state.modalContent}
            <Button style={{float:'right'}} onClick={this.closeModal}>
              X
            </Button>
          </Modal.Header>
          {modalContent}
        </Modal>
      </div>
      </Swipeable>
    );
  }
}

export default App;
