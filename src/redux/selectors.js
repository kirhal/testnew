import { createSelector } from '@reduxjs/toolkit';

const CARDS_PER_PAGE = 3;

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

export const selectUserPagination = createSelector(
  [selectUsersFollowed, getPage],
  (users, page) => {
    const counterCards = CARDS_PER_PAGE * page;
    if (users.length > counterCards) {
      return users.slice(0, counterCards);
    } else {
      return users;
    }
  }
);
