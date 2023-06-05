import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './usersOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    followed: [],
    page: 0,
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [updateUser.pending]: handlePending,

    [fetchUsers.rejected]: handleRejected,
    [updateUser.rejected]: handleRejected,

    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.data = state.data.concat(action.payload);
      state.data = [...state.data, ...action.payload];
      state.page += 1;
    },
    [updateUser.fulfilled](state, action) {
      const followedIndex = state.followed.indexOf(action.payload.id);
      console.log(followedIndex);
      followedIndex === -1
        ? state.followed.push(action.payload.id)
        : state.followed.splice(followedIndex, 1);
      state.data = state.data.map(user =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const usersReducer = usersSlice.reducer;
