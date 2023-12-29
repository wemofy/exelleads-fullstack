import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomeLayout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import VerifyEmailPage from '../components/auth/VerifyEmail';
import Home from '../components/Home';
import Pricing from '../components/pricing/Pricing';
import PaymentSuccessPage from '../payments/PaymentSuccessPage';

export const getRoutes = () => [
  <Route key="key__" path="/" element={<HomeLayout />}>
    <Route index element={<HomePage />} />
    <Route path="pricing" element={<Pricing />} />
  </Route>,
  <Route key="key__auth" path="/auth" element={<AuthLayout />}>
    <Route path="login" index element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="verify-email" element={<VerifyEmailPage />} />
  </Route>,
  <Route key="key__dashboard" path="/dashboard" element={<HomeLayout />}>
    <Route index element={<Home />} />
  </Route>,
  <Route key="key_success" path="success" element={<HomeLayout />}>
    <Route index element={<PaymentSuccessPage />} />
  </Route>,
];

const AppRoutes = () => (
  <BrowserRouter basename="/">
    <ToastContainer />
    <Routes>{getRoutes()}</Routes>
  </BrowserRouter>
);

export default AppRoutes;
