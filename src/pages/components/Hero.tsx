import React from 'react'
import Button from 'react-bootstrap/Button';
import {Row,Col,Container,Stack} from 'react-bootstrap';


const skillsArray = ["HTML","CSS","JavaScript","TypeScript","Bootstrap","Vue","React","Git","Python","Linux"] 

const skillsList = skillsArray.map(skill=>
  <Button size="lg" variant="outline-light" className="m-2" key={skill}>{skill}</Button>
)

const Hero = () => {
  return (
    <>
    <style>
      {
        `
        .hero-container{
          height:90vh;
          padding:3rem;
          background-color: #0d0d0d;
          color:white;
        }
          .
        `
      }
    </style>
    <Stack direction="vertical" gap={5} className="hero-container d-flex align-items-start">
      <h1 className="">Nicholas Pitti - Front End Developer</h1>
      <h2 className="text-secondary fs-2">Dedicated to building simple and engaging digital experiences.</h2>
      <Container style={{padding:0, margin:0}}>
      <Row >
        <Col style={{padding:0, margin:0}}>
        {skillsList}
        </Col>
      </Row>
    </Container>
    </Stack>

    </>
  )
}

export default Hero