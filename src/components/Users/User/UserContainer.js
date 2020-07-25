import { connect } from 'react-redux'
import { 
  isUserHighlighted,
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
    highlighted: isUserHighlighted(state, id),
    selected: isUserSelected(state, id),
    active: isUserActive(state, id),
  }),
  {
    setHoveredUser,
    resetHoveredUser,
    toggleUserSelection,
  }
)(User)
