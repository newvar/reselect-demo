import { createSelector } from 'reselect'
import { getHoveredBand } from 'store/band/selectors/selectors'
import { getUsers, getHoveredUsersMap } from './selectors'

export default createSelector(
  getUsers,
  getHoveredBand,
  getHoveredUsersMap,
  (users, hoveredBand, hoveredUsersMap) => users.reduce((map, user) => ({
    ...map,
    [user.id]: hoveredUsersMap[user.id] || (hoveredBand && hoveredBand.members.includes(user.id)),
  }), {}),
)
