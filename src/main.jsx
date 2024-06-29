import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainWrapper from './MainWrapper';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfeX443aVX-h0Bs0oMq-pxLlJtAXXkcSE",
  authDomain: "exelleads-ec.firebaseapp.com",
  projectId: "exelleads-ec",
  storageBucket: "exelleads-ec.appspot.com",
  messagingSenderId: "225178031985",
  appId: "1:225178031985:web:47466a80b7cf8335c488d0",
  measurementId: "G-T1DV28PFTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MainWrapper>
    <Router>
      <AppRoutes />
    </Router>
  </MainWrapper>
);
