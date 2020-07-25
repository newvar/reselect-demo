import { connect } from 'react-redux'
import { 
  isUserHovered,
  isUserSelected,
  isUserActive,
} from 'store/user/selectors/single'
import {
  setHoveredUser,
  resetHoveredUser,
  toggleUserSelection,
} from 'store/user/actions'
import User from './User'

export default connect(
  (state, { data: { id } }) => ({
    hovered: isUserHovered(state, id),
    selected: isUserSelected(state, id),
    active: isUserActive(state, id),
  }),
  {
    setHoveredUser,
    resetHoveredUser,
    toggleUserSelection,
  }
)(User)
