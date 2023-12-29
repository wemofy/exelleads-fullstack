import React from 'react';
import PropTypes from 'prop-types';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

const MainWrapper = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <FloatingWhatsApp phoneNumber ="+919373365368" accountName="Exelleads" chatMessage="Hey there 👋, Welcome to Excelleads🚀, How can we help you?"/>

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
