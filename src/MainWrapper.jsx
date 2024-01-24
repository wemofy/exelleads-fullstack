import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import croplogo from '../src/assets/croplogo.png'



const MainWrapper = ({ children }) => (
  <Provider store={store}>
   <FloatingWhatsApp phoneNumber='+1 9093488855' accountName= 'Exel leads' avatar={croplogo}/>

    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
MainWrapper.propTypes = {
  children: PropTypes.node,
};
MainWrapper.defaultProps = {
  children: null,
};
export default MainWrapper;
