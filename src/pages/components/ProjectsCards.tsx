import React from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import YoutubeEmbed from './YoutubeEmbed';
import BootstrapAccordion from './BootstrapAccordion'

interface Props{
  title:string
  thumbnail:string
  link:string
  isLocal:boolean
};

function SetLinkToEmbedFormat(link:string){
  const linkSplit:string[]=link.split('=')
  return linkSplit[1]
}

const ProjectsCards:React.FC<Props> = (Props) => {
  let embedVideoId='empty'
  if(Props.link){
    embedVideoId=SetLinkToEmbedFormat(Props.link)
  }

  return (
    <Card className="m-2" style={{ padding: '0px', width: '18rem', backgroundColor:'#0D0D0D' }}>
      <Card.Img variant="top" src={Props.thumbnail ?? ''} alt={Props.title ?? ''}/>
      <Card.Body>
        <Card.Title> 
          <Link href={Props.link ?? ''}>{Props.title ?? ''}</Link>
        </Card.Title>
      { (embedVideoId!==undefined) ? <BootstrapAccordion><YoutubeEmbed videoId={embedVideoId}></YoutubeEmbed ></BootstrapAccordion> : ''}
      </Card.Body>
    </Card>
  )
}

export default ProjectsCards;