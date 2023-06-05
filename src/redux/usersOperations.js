import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPage } from './selectors';

// axios.defaults.baseURL = 'https://6463ca5b127ad0b8f8917480.mockapi.io';

const url = new URL('https://6463ca5b127ad0b8f8917480.mockapi.io/users');
url.searchParams.append('page', 1);
url.searchParams.append('limit', 3);

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
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

// export const deleteContact = createAsyncThunk(
//   'users/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
