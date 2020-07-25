import {
  getHoveredUsersMap,
  getSelectedUsersMap,
} from './selectors'

import getActiveUsersMap from './getActiveUsersMap'
import getHighlightedUsersMap from './getHighlightedUsersMap'

export const isUserHovered = (state, id) => getHoveredUsersMap(state)[id]
export const isUserSelected = (state, id) => getSelectedUsersMap(state)[id]
export const isUserActive = (state, id) => getActiveUsersMap(state)[id]
export const isUserHighlighted = (state, id) => getHighlightedUsersMap(state)[id]
