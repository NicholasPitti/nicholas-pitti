import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsCards from './ProjectsCards';

import img1 from '../images/spellcompendium-thumbnail.png'
import img2 from '../images/tabletopambiance-thumbnail.png'
import img3 from '../images/dojohaim-thumbnail.png'
import img4 from '../images/yttranscribe-thumbnail.png'
import img5 from '../images/webpage-clone-thumbnail.png'
import img6 from '../images/verbalmem-thumbnail.png'

const certsImages = [img1,img2,img3,img4,img5,img6] 


const ProjectsGrid = () => {
  return (
    <>
    <Container>
    <Row className="g-3 my-3" gap={3}>
        <ProjectsCards isLocal={false}
        link="https://youtu.be/kSGPBGqYkIw" 
        title="FullStack TableTop Spell Compendium"
        thumbnail={img1.src}>
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=zHVb1AaPp2E"
        title="Spotify TableTop Ambiance Tool"
        thumbnail={img2.src}
        >
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://www.dojohaim.com"
        title="Dojo Haim Website Overhaul"
        thumbnail={img3.src}>
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://youtu.be/ykgG8O8XPwQ"
        title="Summary Generation With Transcribed MP4"
        thumbnail={img4.src}>
        </ProjectsCards>
        <ProjectsCards isLocal={false}
        link="https://www.youtube.com/watch?v=B01IvITgfS4"
        title="React Webpage Clone"
        thumbnail={img5.src}>
          </ProjectsCards>
      <ProjectsCards isLocal={true}
      link="/verbalmemory.html"
      title="Verbal Memory Test"
      thumbnail={img6.src}
      >
      </ProjectsCards>

    </Row>
  </Container>
  </>
  )
}

export default ProjectsGrid