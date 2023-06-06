import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

export const homeSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: () => initialState,
  },
});

export const {logout} = homeSlice.actions;

export default homeSlice.reducer;
