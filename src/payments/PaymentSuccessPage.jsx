import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ticked from '../assets/ticked.png';
import { getAllPayments } from '../redux/reducers/allPaymentSlice';
import paymentStatus from './paymentStatus';
// import Loader from '../../components/Loader';
// import Order from '../../components/Order';

const PaymentSuccessPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('paymentId');

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.getAllPayments);
  console.log('++++++++++', data);

  useEffect(() => {
    dispatch(getAllPayments);
    paymentStatus(paymentId);
  }, []);

  // useEffect(() => {
  //   dispatch(getSinglePayments(id));
  // }, [dispatch]);
  let orderedProduct = null;
  let total = null;

  // }
  return (
    <div
      className="flex flex-col gap-3 mt-20 pb-10 xs:px-2  sm:px-24 "
      data-testid="success-payment"
    >
      {/* {isLoading ? (
        // <Loader />
        <p>loading...............</p>
      ) : (
        <> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {/* {orderedProduct} */}
      </div>
      <div className="flex gap-1 mt-3">
        <img src={ticked} alt="tick-1" className="w-14 h-14 -mt-4 -pl-3" />
        <p className="font-semibold">Welcome Back</p>
        {/* <span className="text-[#64B937] text-[18px] font-bold">
         
          back
        </span> */}
      </div>
      <p className="text-lg mb-1">
        Congratulations! Your payment has been received and your susbcription is
        Added
      </p>
      <p className="text-md font-medium text-[#64B937] text-[20px] -mt-4">
        Thank you for working with us!
      </p>
      <button
        onClick={() => (window.location.href = '/auth/login')}
        type="button"
        className="inline-flex w-[200px] justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
      >
        Go back to Home
      </button>

      {/* </> */}
      {/* // )} */}
    </div>
  );
};
export default PaymentSuccessPage;
