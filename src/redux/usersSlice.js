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
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [updateUser.pending]: handlePending,

    [fetchUsers.rejected]: handleRejected,
    [updateUser.rejected]: handleRejected,

    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [updateUser.fulfilled](state, action) {
      const followedIndex = state.data.indexOf(action.payload.id);
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

// export default contactsSlice.reducer;