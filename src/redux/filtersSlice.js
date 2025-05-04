// src/redux/filtersSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const selectStatusFilter = state => state.filters.status;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: 'all',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { setStatusFilter } = filtersSlice.actions;

// Експортуємо редюсер слайсу
export default filtersSlice.reducer;
