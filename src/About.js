import React from 'react';

import{Modal, Button} from 'semantic-ui-react';

const About = (props) => (
    <Modal.Content>
        <Modal.Description>
            <p>Hi, I'm Annie Finnerty.</p>
            <p>I'm a software engineer/frontend designer from Denver Colorado with three years freelance experience building websites, apps and software.</p>
            <p>I like finding elegant solutions to complex design problems on the front end and back end.</p>
            <p>I build projects in Java, C#, and many flavors and frameworks of JS (but React.js is the best). I'm currently studying Go. </p>
            <p>In my free time I enjoy hiking, painting, finding new beers, oil painting and throwing knives.</p>
            <Modal.Actions style={{textAlign:'center'}}>
                <Button onClick={()=>props.openModal('contact')}>Contact</Button>
            </Modal.Actions>
        </Modal.Description>
    </Modal.Content>
)

export default About