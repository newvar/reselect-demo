import { createSelector } from 'reselect'
import { getBands, getSelectedBandsMap } from 'store/band/selectors/selectors'
import { getUsers } from './selectors'

export default createSelector(
  getUsers,
  getBands,
  getSelectedBandsMap,
  (users, bands, selectedBandsMap) => users.reduce((map, user) => ({
    ...map,
    [user.id]: bands.some((band) => selectedBandsMap[band.id] && band.members.includes(user.id)),
  }), {}),
)
