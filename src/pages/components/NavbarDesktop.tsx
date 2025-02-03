import React from 'react'
//import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap/';

import Stack from 'react-bootstrap/Stack';
const NavbarDesktop = () => {
  const navbarClass=
    "sticky-top navbar border-top border-light text-light p-3 text-center mr-2";

  return (
    <>
    <style>
      {
        `
        .navbar{
          background-color: #0d0d0d;
      }
        a{
        text-decoration: none;
        }
        `
      }
    </style>
    <Navbar className={navbarClass} id="scrollspy">
    <Stack direction="horizontal" gap={3} className="ms-auto text-primary">
      <Nav.Link href="#contact" className="p-2">Contact</Nav.Link>
      <Nav.Link href="#projects" className="p-2">Projects</Nav.Link>
      <Nav.Link href="#ed" className="p-2">Education</Nav.Link>
      <Nav.Link href="#resume" className="p-2">Resume</Nav.Link>

    </Stack>
    </Navbar>
    </>
  )
}

export default NavbarDesktop