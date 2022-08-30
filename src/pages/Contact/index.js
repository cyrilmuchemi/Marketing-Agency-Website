import React from 'react';
import Layout from '../../components/Layout';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => (
  <Layout>
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:p-5 px-32 gap-20 mt-32">
      <Address />
      <ContactForm />
    </div>
    <div className="flex justify-center mt-32 text-center">
      <div className="shadow border p-5">
        <h1 className="text-gray-700 text-xl">Designed and Developed By</h1>
        <h2 className="text-gray-700 text-semibold text-xl">cyrilmuchemi@gmail.com</h2>
      </div>

    </div>
  </Layout>
);

export default Contact;
