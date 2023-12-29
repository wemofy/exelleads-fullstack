import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import MainWrapper from './MainWrapper';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MainWrapper>
    <AppRoutes />
  </MainWrapper>
);
