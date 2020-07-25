import {
  getSelectedUsers,
} from './selectors/selectors'
import {
  isUserSelected,
} from './selectors/single'

export const SET_USERS = 'SET_USERS'
export const SET_HOVERED_USER = 'SET_HOVERED_USER'
export const SET_SELECTED_USERS = 'SET_SELECTED_USERS'

export const setHoveredUser = (id) => ({
  type: SET_HOVERED_USER,
  payload: id,
})

export const resetHoveredUser = () => ({
  type: SET_HOVERED_USER,
  payload: null,
})

export const setSelectedUsers = (users) => ({
  type: SET_SELECTED_USERS,
  payload: users,
})

const addUniq = (array, value) => {
  const set = new Set(array)
  set.add(value)
  return Array.from(set)
}

export const selectUser = (id) => (dispatch, getState) => {
  const selectedUsers = getSelectedUsers(getState())
  const newSelectedUsers = addUniq(selectedUsers, id)
  dispatch(setSelectedUsers(newSelectedUsers))
}

export const deselectUser = (id) => (dispatch, getState) => {
  const selectedUsers = getSelectedUsers(getState())
  const newSelectedUsers = selectedUsers.filter(userId => id !== userId)
  dispatch(setSelectedUsers(newSelectedUsers))
}

export const toggleUserSelection = (id) => (dispatch, getState) => {
  if(isUserSelected(getState(), id)) {
    dispatch(deselectUser(id))
  } else {
    dispatch(selectUser(id))
  }
}
