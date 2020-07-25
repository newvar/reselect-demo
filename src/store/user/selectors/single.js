import {
  getHoveredUsersMap,
  getSelectedUsersMap,
} from './selectors'

import getActiveUsersMap from './getActiveUsersMap'

export const isUserHovered = (state, id) => getHoveredUsersMap(state)[id]
export const isUserSelected = (state, id) => getSelectedUsersMap(state)[id]
export const isUserActive = (state, id) => getActiveUsersMap(state)[id]
