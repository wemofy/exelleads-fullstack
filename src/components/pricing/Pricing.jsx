import React from 'react';
import Plan from '../plan/Plan';
import Footer from '../Footer/Footer';

const Pricing = () => {
  return (
    <section>
      <div className="flex justify-center items-center h-[100vh]">
        <Plan />
      </div>
      <Footer/>
    </section>
  );
};

export default Pricing;
