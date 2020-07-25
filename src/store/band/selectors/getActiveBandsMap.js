import { createSelector } from 'reselect'
import { getSelectedUsersMap } from 'store/user/selectors/selectors'
import { getBands } from './selectors'

export default createSelector(
  getBands,
  getSelectedUsersMap,
  (bands, selectedUsersMap) => bands.reduce((map, band) => ({
    ...map,
    [band.id]: band.members.some((userId) => selectedUsersMap[userId]),
  }), {}),
)
