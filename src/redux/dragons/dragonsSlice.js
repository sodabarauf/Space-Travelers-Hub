import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

// Thunk to fetch dragons from the API
export const fetchDragons = createAsyncThunk('get/dragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'Dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const id = action.payload;
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== id) return dragon;
        return { ...dragon, reserved: true };
      });
      state.dragons = newState;
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== id) return dragon;
        return { ...dragon, reserved: false };
      });
      state.dragons = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.loading = false;
        state.dragons = action.payload;  // Corrected this line
        state.error = null;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
