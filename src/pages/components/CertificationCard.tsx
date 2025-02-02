import React from 'react';
import Card from 'react-bootstrap/Card';
//import exampleImage from 'src/images/cisco-cert.png'; 
// <Card.Img src={`${exampleImage}${Props.thumbnail}`}/>


// <Card.Img src={'src/images/cisco-cert.png'}/>
interface Props{
    thumbnail:string;
}
//   <Card.Img src={Image.src}/>



const CertificationCard:React.FC<Props> = (Props) => {
  //console.log(Props.thumbnail.toString()
  // //why is toString neccesary
  //You will notice that props as a variable name is arbitrary
  //props is an object that has the thumbnail member

  return (
    <>
    <Card className="cert" style={{maxWidth:'50%'}}>
      <Card.Img src={Props.thumbnail?.toString()}/>
    </Card>
    </>
  )
}

export default CertificationCard