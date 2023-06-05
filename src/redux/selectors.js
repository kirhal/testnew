import { createSelector } from '@reduxjs/toolkit';

const CARDS_PER_PAGE = 3;

export const getUsersList = state => state.users.data;
export const getFollowedList = state => state.users.followed;
export const getPage = state => state.users.page;
export const getLoading = state => state.users.isLoading;

export const selectUsersFollowed = createSelector(
  [getUsersList, getFollowedList],
  (users, followed) => {
    return users.map(user => ({
      ...user,
      following: followed.includes(user.id),
    }));
  }
);

export const selectUserPagination = createSelector(
  [selectUsersFollowed, getPage],
  (users, page) => {
    const counterUsers = CARDS_PER_PAGE * page;
    if (users.length > counterUsers) {
      return users.slice(0, counterUsers);
    } else {
      return users;
    }
  }
);
