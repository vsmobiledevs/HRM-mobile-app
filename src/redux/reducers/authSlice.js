import {createSlice} from '@reduxjs/toolkit';
import {signIn} from '../apis/authApis';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout, setUser} = authSlice.actions;

export default authSlice.reducer;
