import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

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
    // [postContact.pending]: handlePending,
    // [deleteContact.pending]: handlePending,

    [fetchUsers.rejected]: handleRejected,
    // [postContact.rejected]: handleRejected,
    // [deleteContact.rejected]: handleRejected,

    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    // [postContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.data.push(action.payload);
    // },
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const contacts = state.data;
    //   state.data = contacts.filter(({ id }) => id !== action.payload.id);
    // },
  },
});

export const usersReducer = usersSlice.reducer;

// export default contactsSlice.reducer;
