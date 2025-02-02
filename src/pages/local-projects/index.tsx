import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import VerbalMemoryTest from "./VerbalMemoryTest";
import Stack from 'react-bootstrap/Stack'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseDoorFill } from "react-icons/bs";

const LocalProjects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

<Button variant="primary" onClick={handleShow}>
        Nav
      </Button>

      <Offcanvas style={{width:'40%'}} show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack className="w-50" gap={2}>
            <Button variant="outline-primary">
              Verbal Memory Test
            </Button>
            <Button variant="outline-primary">
              Verbal Memory Test
            </Button>
            <Button variant="outline-primary">
              Verbal Memory Test
            </Button>
            <Button variant="outline-primary">
              Verbal Memory Test
            </Button>
            <Button variant="outline-primary">
              Verbal Memory Test
            </Button>

            <BsFillHouseDoorFill className="text-primary" style={{margin: '0px auto 0px auto' }}/>
            <Link href="/">
            <Button>
             Back to Portfolio
            </Button>
            </Link>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
      
<VerbalMemoryTest></VerbalMemoryTest>

    </>
  )
}

export default LocalProjects