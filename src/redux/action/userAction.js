import axios from 'axios';
import customAxios from '../app/customAxios';

export const verifyUserAccount = async (token) => {
  try {
    const response = await customAxios.get(`/users/verify-email/${token}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to verify user account');
  }
};
