// 'use client'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const SectionResume = () => {
  return (
    <>
          <style>
        {
          `
          .section-contact{
          background-color: #0d0d0d;
          }
          .section-contact *{
          background-color: #0d0d0d;
          }
          resumeButtons{
            width:150%;
          }
          `
        }
      </style>
      <Stack gap={2} id="resume" className="p-5 mt-5" style={{backgroundColor: '#0d0d0d'}}>
        <h3 className="text-center">Resume</h3>
        <hr className="text-light w-50 mx-auto p-1" />
        <a
          target="_blank"
          href="./CV-NicholasPitti.pdf"
          rel="norefferer noopener"
          className="mx-auto resumeButtons "
          >
        <Button variant="outline-primary" className="">
          View PDF
        </Button>
        </a>


        <a 
          href="./CV-NicholasPitti.pdf"
          download="ResumeNicholasPitti"
          className="mx-auto "

         >
        <Button variant="outline-primary" className="">
          Download PDF
        </Button>
        </a>


        <hr className="text-light w-50 mx-auto p-1" />
      </Stack>
    </>
  )
}

export default SectionResume