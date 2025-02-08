import React from 'react'
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
//contact styles
import Card from 'react-bootstrap/Card';

const SectionContact = () => {
  return (
    <>  

      <div id="contact" className="invisible">invisible anchor for the nav</div>

      <Card className="gap-3 m-5 p-5 border border-light" style={{  backgroundColor: '#111828'}}>
        <h3 className="text-light">
          Contact
        </h3>

        <span>
        <a href="https://github.com/NicholasPitti" 
          title="Link to my GitHub"
          >
          <BsGithub style={{display:'inline',margin:'0px 8px 4px 0px'}}/>
          GitHub
          </a>
        </span>

        <span>
          <a href="https://www.nick.a.pitti@gmail.com">
          <BsGoogle style={{display:'inline',margin:'0px 8px 4px 0px'}}/>
          nick.a.pitti@gmail.com
          </a>
        </span>

        <span>
          <a href="https://www.linkedin.com/in/nicholas-antonio-pitti-745772140/"
            title="Link to LinkedIn profile">
          <BsLinkedin style={{display:'inline',margin:'0px 8px 4px 0px'}}/>
          Nicholas Pitti
          </a>
        </span>
      </Card>
    </>
  )
}

export default SectionContact
