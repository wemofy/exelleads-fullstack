import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const getAllPayments = createAsyncThunk(
  'allPayments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/payments/your-payment');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const allPaymentSlice = createSlice({
  name: 'allPayments',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPayments.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllPayments.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const singlePaymentAction = (state) => state.allPayments.data;
export default allPaymentSlice.reducer;
