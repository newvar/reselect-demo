import usersMock from 'mocks/users'
import {
  SET_USERS,
  SET_HOVERED_USER,
  SET_SELECTED_USERS,
} from './actions'

export const initialData = {
  users: usersMock,
  hoveredUserId: null,
  selectedUsers: [],
}

export default (state = initialData, { type, payload }) => {
  switch(type) {
    case SET_USERS: {
      return {
        ...state,
        users: payload,
      }
    }
    case SET_HOVERED_USER: {
      return {
        ...state,
        hoveredUserId: payload,
      }
    }
    case SET_SELECTED_USERS: {
      return {
        ...state,
        selectedUsers: payload,
      }
    }
    default: {
      return state
    }
  }
}
