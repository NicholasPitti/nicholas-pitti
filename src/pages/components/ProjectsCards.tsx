import React from 'react'
import Card from 'react-bootstrap/Card';
import Link from 'next/link'

interface Props{
  title:string
  thumbnail:string
  link:string
  isLocal:boolean
}



const ProjectsCards:React.FC<Props> = (Props) => {
  if(Props.isLocal){
    console.log(true)
  }

  return (
    <Card className="m-2" style={{ padding: '0px', width: '18rem', backgroundColor:'#0D0D0D' }}>
      <Card.Img variant="top" src={Props.thumbnail} alt={Props.title}/>
      <Card.Body>
        <Card.Title> 
          <Link href={Props.link}>{Props.title}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ProjectsCards