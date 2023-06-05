import { createSelector } from '@reduxjs/toolkit';

export const getUsersList = state => state.users.data;
export const getFollowedList = state => state.users.followed;
export const getPage = state => state.users.page;

export const selectUsersFollowed = createSelector(
  [getUsersList, getFollowedList],
  (users, followed) => {
    return users.map(user => ({
      ...user,
      following: followed.includes(user.id),
    }));
  }
);
