import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

const MainWrapper = ({ children }) => (
  <Provider store={store}>
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
