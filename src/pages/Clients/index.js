import React from 'react';
import Layout from '../../components/Layout';
import ClientsList from './ClientsList';
import Intro from './Intro';
import Numbers from './Numbers';

const Clients = () => (
  <Layout>
    <Intro />
    <ClientsList />
    <Numbers />
  </Layout>
);

export default Clients;
