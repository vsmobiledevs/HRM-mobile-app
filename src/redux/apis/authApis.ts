import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL, PREFIX} from '@env';
import endPoints from './endPoints';

export const header = (token: string) => {
  let header = {
    'Content-Type': 'multipart/form-data',
    Authorization: token ? `Bearer ${token}` : '',
    Accept: 'application/json',
  };
  return header;
};

const signIn = createAsyncThunk(
  'data/signIn',
  async (formData: FormData, {rejectWithValue, getState}) => {
    try {
      const token = getState()?.authSlice?.data?.token;
      const config: AxiosRequestConfig = {
        headers: header(token),
      };

      const response = await axios.post(
        `${BASE_URL + PREFIX + endPoints.login}`,
        formData,
        config,
      );
      return response.data;
    } catch (error: Error) {
      return rejectWithValue(error?.message);
    }
  },
);

export {signIn};
