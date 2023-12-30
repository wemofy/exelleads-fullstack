import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const updatePassword = createAsyncThunk(
  'updatePassword',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/change-password', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updatePasswordSlice = createSlice({
  name: 'updatePassword',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const updatePasswordActions = (state) => state.updatePassword.data;

export default updatePasswordSlice.reducer;
