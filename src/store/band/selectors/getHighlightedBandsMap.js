import { createSelector } from 'reselect'
import { getHoveredUsersMap } from 'store/user/selectors/selectors'
import { getBands, getHoveredBandsMap } from './selectors'

export default createSelector(
  getBands,
  getHoveredUsersMap,
  getHoveredBandsMap,
  (bands, hoveredUsersMap, hoveredBandsMap) => bands.reduce((map, band) => ({
    ...map,
    [band.id]: hoveredBandsMap[band.id] || band.members.some(userId => hoveredUsersMap[userId]),
  }), {}),
)
