import React from 'react'
import AboutHerosection from '../../../Component/AboutPage/AboutHerosection'
import DerwinHunt from '../../../Component/AboutPage/DerwinHunt'
import Journey from '../../../Component/AboutPage/Journey'
import Personal from '../../../Component/AboutPage/Personal'
import Sellingpoint from '../../../Component/AboutPage/Sellingpoint'
import Connected from '../../../Component/HomePage/Connected'
import Trusted from '../../../Component/AboutPage/Trusted'

function About() {
  return (
    <>
        <AboutHerosection/>
        <DerwinHunt/>
        <Journey/>
        <Personal/>
        <Trusted/>
        <Sellingpoint/>
        <Connected/>
    </>
  )
}

export default About