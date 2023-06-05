import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6463ca5b127ad0b8f8917480.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (data, thunkAPI) => {
    const { id, followers } = data;
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
