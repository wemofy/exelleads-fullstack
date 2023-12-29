import React, { useState } from 'react';
import { Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { searchSchema } from '../../validations/inputValidation';
import { search } from '../../redux/reducers/searchSlice';
import Button from '../Button';
import TableComp from '../TableComp/TableComp';
import { fetchStatistics } from '../../redux/reducers/statisticsSlice';
import Modal from 'react-modal';
import ModalSubcribe from '../ModalSubcribe/ModalSubcribe';


const searchCard = () => {
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const openErrorModal = (message) => {
    setErrorMessage(message);
    setErrorModalIsOpen(true);
  };

  const closeErrorModal = () => {
    setErrorModalIsOpen(false);
    setErrorMessage('');
  };

  const [searchResults, setSearchResults] = useState();
  const { isLoading } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(searchSchema) });
  const onSubmit = async (searchData) => {
    try {
      const response = await dispatch(search(searchData)).unwrap();
      dispatch(fetchStatistics());
      setSearchResults(response.data);
    } catch (error) {
      openErrorModal("An error occurred");
    }
  };

  return (
    <>
   <Modal
  isOpen={errorModalIsOpen}
  onRequestClose={closeErrorModal}
  contentLabel="Error Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '60%', // Adjust the width as needed
      height: 'fit-content', // Adjust the height as needed
      margin: 'auto',
    },
  }}
>
  <div>
    <ModalSubcribe/>
  </div>
  
  <button onClick={closeErrorModal}
            
            type="button"
            className="flex absolute top-0 right-0 justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-cookies"
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
</Modal>

      
      <Card className="max-w-sm mt-2">
        <text className="text-2xl">Search For Leads</text>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            handleSubmit(onSubmit)(event);
          }}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="position" value="Enter Position" />
            </div>
            <TextInput
              id="position"
              type="position"
              placeholder="Website Designer"
              required
              {...register('position')}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="city" value="Enter the City" />
            </div>
            <TextInput
              id="city"
              type="city"
              placeholder="Delhi"
              required
              {...register('city')}
            />
          </div>
          {isLoading ? (
            <>
              <Button type="submit" label="" className="" disabled={true}>
                <svg
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              label="search"
              className="cursor-pointer bg-deep-purple-accent-700 rounded py-2 px-8 text-center text-lg font-bold  text-white"
            />
          )}

          {/* <Button type="submit">Search</Button> */}
        </form>
      </Card>
      <div className="max-w-3xl mt-10 mb-10">
        <div className="text-white ">
          <TableComp tableData={searchResults} />
        </div>
      </div>
    </>
  );
};

export default searchCard;
