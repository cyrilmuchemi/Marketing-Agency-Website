import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';

const About = () => {
  return (
    <Layout>
      <Intro/>
      <WhatWeDo/>
      <WhyChooseUs/>
    </Layout>
  )
}

export default About
