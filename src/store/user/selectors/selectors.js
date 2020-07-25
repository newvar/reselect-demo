import { createSelector } from 'reselect'

export const user = (state) => state.user

export const getUsers = (state) => user(state).users
export const getSelectedUsers = (state) => user(state).selectedUsers
export const getHoveredUserId = (state) => user(state).hoveredUserId

export const getHoveredUsersMap = createSelector(
  getUsers,
  getHoveredUserId,
  (users, hoveredUserId) => users.reduce((map, user) => ({
    ...map,
    [user.id]: user.id === hoveredUserId,
  }), {}),
)

export const getSelectedUsersMap = createSelector(
  getUsers,
  getSelectedUsers,
  (users, selectedUsers) => users.reduce((map, user) => ({
    ...map,
    [user.id]: selectedUsers.includes(user.id),
  }), {}),
)
