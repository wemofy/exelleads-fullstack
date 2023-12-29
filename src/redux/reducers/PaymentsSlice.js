import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const createPaymentsSession = createAsyncThunk(
  'pay/createCheckoutSession',
  async (planId, { rejectWithValue }) => {
    try {
      const response = await axios.post('/payments/create-checkout-session', {
        planId,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const paymentCheckoutSlice = createSlice({
  name: 'pay',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentsSession.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(createPaymentsSession.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createPaymentsSession.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const createPaymentsActions = (state) => state.data.url;
export default paymentCheckoutSlice.reducer;
