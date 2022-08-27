import React from 'react';
import Layout from '../../components/Layout';
import Intro from './intro';
import MarketingStrategies from './MarketingStrategies';
import WhyMarketing from './WhyMarketing';

const Home = () => {
  return (
    <Layout>
      <div className='px-20'>
      <Intro/>
      <MarketingStrategies/>
      <WhyMarketing/>
      </div>
    </Layout>
  )
}

export default Home