import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const search = createAsyncThunk(
  'search',
  async (searchData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/search', searchData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const freesearch = createAsyncThunk(
  'freesearch',
  async (searchData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/search/freesearch', searchData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(search.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(search.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const searchActions = (state) => state.search.data;

export default searchSlice.reducer;
