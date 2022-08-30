import React from 'react';
import Layout from '../../components/Layout';
import Intro from './intro';
import MarketingStrategies from './MarketingStrategies';
import WhyMarketing from './WhyMarketing';

const Home = () => (
  <Layout>
    <div className="px-20 px-2">
      <Intro />
      <MarketingStrategies />
      <WhyMarketing />
    </div>
  </Layout>
);

export default Home;
