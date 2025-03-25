import { ReactElement } from 'react';
import Accordion from 'react-bootstrap/Accordion';
interface Props{
  children:ReactElement
}


const BootstrapAccordion:React.FC<Props>=(Props)=> {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header className='font-bold'>Video Demo</Accordion.Header>
        <Accordion.Body>
          <p className='fst-italic'>F for fullscreen</p>
          { Props.children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BootstrapAccordion;