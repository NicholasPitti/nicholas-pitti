import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import ProjectsCards from './ProjectsCards';
/*
import img1 from '../images/spellcompendium-thumbnail.png'
import img2 from '../images/tabletopambiance-thumbnail.png'
import img3 from '../images/dojohaim-thumbnail.png'
import img4 from '../images/yttranscribe-thumbnail.png'
import img5 from '../images/webpage-clone-thumbnail.png'
import img6 from '../images/verbalmem-thumbnail.png'
*/
//const certsImages = [img1,img2,img3,img4,img5,img6] 
const imagePaths=['./spellcompendium-thumbnail.png',
'./tabletopambiance-thumbnail.png',
 './dojohaim-thumbnail.png',
 './/yttranscribe-thumbnail.png',
 './webpage-clone-thumbnail.png',
 './verbalmem-thumbnail.png']

 //Use an object to store all these attritubes
 //youTubeLinkArray
 //titleArray
//isLocal

 //map


const ProjectsGrid = () => {
  return (
    <>
    <Container>
    <Row className="g-3 my-3" gap={3}>

    <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=uIlI1pc9vQk"
        title="Spotify Organizer Tool"
        thumbnail={imagePaths[1]}>
        </ProjectsCards>
        
        <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=kSGPBGqYkIw" 
        title="FullStack TableTop Spell Compendium"
        thumbnail={imagePaths[0]}>
        </ProjectsCards>

        <ProjectsCards isLocal={false}
        link="https://www.dojohaim.com"
        title="Dojo Haim Website Overhaul"
        thumbnail={imagePaths[2]}>
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=ykgG8O8XPwQ"
        title="Summary Generation With Transcribed MP4"
        thumbnail={imagePaths[3]}>
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=B01IvITgfS4"
        title="React Webpage Clone"
        thumbnail={imagePaths[4]}>
          </ProjectsCards>
      <ProjectsCards isLocal={true}
      link="/verbalmemory.html"
      title="Verbal Memory Test"
      thumbnail={imagePaths[5]}>
      </ProjectsCards>

    </Row>
  </Container>
  </>
  )
}

export default ProjectsGrid