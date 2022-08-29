import React from 'react';
import Layout from '../../components/Layout';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Layout>
      <div className='grid grid-cols-2 px-32'>
      <Address/>
      <ContactForm/>
      </div>
    </Layout>
  )
}

export default Contact;