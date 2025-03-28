import React from 'react'
import CertificationCard from './CertificationCard'
import Stack from  'react-bootstrap/Stack';

const imagePaths=['./utp-diploma.png',
 './frontend-cert.png',
 './cisco-cert.png',
 './uipath-cert.png','./linux-unhatched-cert.png']

const certItems = imagePaths.map(cert=>
  <CertificationCard thumbnail={cert ?? ''} key={cert ?? ''}></CertificationCard>
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