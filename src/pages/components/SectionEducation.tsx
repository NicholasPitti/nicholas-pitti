import React from 'react'
import CertificationCard from './CertificationCard'
import Stack from  'react-bootstrap/Stack';

import img1 from '../images/utp-diploma.png'
import img2 from '../images/frontend-cert.png'
import img3 from '../images/cisco-cert.png'
import img4 from '../images/uipath-cert.png'

const certsImages = [img1,img2,img3,img4] 

const certItems = certsImages.map(cert=>
  <CertificationCard thumbnail={cert.src}></CertificationCard>
)

const SectionEducation = () => {
  return (
    <>
      <h3 id="ed" className="m-3">Education</h3>
      <Stack className="d-flex align-items-center" gap={3}>
        {certItems}
      </Stack>
    </>
  )
}

export default SectionEducation