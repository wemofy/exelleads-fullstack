import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const fetchStatistics = createAsyncThunk(
  'statistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/search/statistics');
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(fetchStatistics.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const statisticsActions = (state) => state.statistics.data;

export default statisticsSlice.reducer;
