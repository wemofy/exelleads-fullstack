import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { verifyUserAccount } from '../action/userAction';

export const verifyAccount = createAsyncThunk(
  'verify/verifyAccount',
  async (token, { rejectWithValue }) => {
    try {
      const response = await verifyUserAccount(token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
  message: null,
};

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    resetState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(verifyAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.message = action.payload.message;
        toast.success(action.payload.message);
      })
      .addCase(verifyAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message);
      });
  },
});

export const { resetState } = verifySlice.actions;

export default verifySlice.reducer;
