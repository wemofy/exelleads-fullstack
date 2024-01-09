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
import ProfileLayout from '../layout/ProfileLayout';
import ChangePassword from '../components/auth/UpdatePassword';
import TuteCard from '../components/TuteCard/TuteCard';
import ProfileCard from '../components/TuteCard/ProfileCard';
import AdminPage from '../pages/AdminPage';
import AdminLayout from '../layout/AdminLayout';
import UserTable from '../components/Admin/UserTable';
import PaymentTable from '../components/Admin/PaymentTable';
import AddPlan from '../components/Admin/AddPlan';
import CreatePlan from '../components/Admin/createPlan';

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
  <Route key="key__profile" path="/profile" element={<ProfileLayout />}>
    <Route index element={<ProfileCard />} />
    <Route path="update-password" element={<ChangePassword />} />
  </Route>,
  <Route key="key_success" path="success" element={<HomeLayout />}>
    <Route index element={<PaymentSuccessPage />} />
  </Route>,
  <Route key="key_admin" path="/admin" element={<AdminLayout/>}>
     <Route index element={<AdminPage />} />
     <Route path="all-users" element={<UserTable />} />
     <Route path="payments" element={<PaymentTable />} />
     <Route path="seeplans" element={<AddPlan />} />
     <Route path="addplans" element={< CreatePlan />} />

  
</Route>,
];

const AppRoutes = () => (
  <BrowserRouter basename="/">
    <ToastContainer />
    <Routes>{getRoutes()}</Routes>
  </BrowserRouter>
);

export default AppRoutes;
