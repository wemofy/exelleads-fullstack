import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../redux/app/customAxios';
import { useNavigate } from 'react-router-dom';
import { formatTitle } from '../../utils/format';
import getUserInfo from '../../utils/getUserInfo';
import { createPaymentsSession } from '../../redux/reducers/PaymentsSlice';
import loader from '../../assets/loader.svg';
import { showErrorMessage } from '../../utils/toast';

const Plan = () => {
  const info = getUserInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((state) => state.payment);
  const [plans, setPlans] = useState();
  const [loadingStates, setLoadingStates] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}/plans`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',  
      })
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  const createCheckoutSession = (plan) => {
    if (!info) {
      showErrorMessage('Please login to subscribe');
      navigate('/auth/login');
      return;
    }
    setLoadingStates((prev) => ({ ...prev, [plan._id]: true }));
    dispatch(createPaymentsSession(plan._id));
  };
  if (data) window.location.href = data.url;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center mt-5">
        Subscribe to access the leads features
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {plans &&
          plans.data
          .filter((plan) => plan.price !== 0)
          .sort((a, b) => a.price - b.price) // Sort plans based on increasing prices
          .map((plan) => (
            <div
              key={plan._id}
              className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800"
            >
                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                  {formatTitle(plan.name)}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price} INR
                  <span className="text-sm text-gray-300">/ month</span>
                </p>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                  {plan.description}
                </p>
                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Free Access to applications
                  </li>
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    {plan.searchQueriesPerDay} Search Queries per day
                  </li>
                  <li className="mb-3 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    {plan.leadsPerDay} leads from Queries per day
                  </li>
                </ul>


                <button
                  type="button"
                  disabled={loadingStates[plan._id]}
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  onClick={() => createCheckoutSession(plan)}
                >
                  {loadingStates[plan._id] ? (
                    <div className="flex justify-center mt-0 py-0">
                      <img
                        src={loader}
                        alt="Loader Spinner"
                        className="text-green-500 animate-spin w-[20px] text-center"
                        data-testid="spinner"
                      />
                    </div>
                  ) : (
                    'Choose Plan'
                  )}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Plan;
