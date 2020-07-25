import { connect } from 'react-redux'
import { getUsers } from 'store/user/selectors/selectors'
import Users from './Users'

export default connect(
  (state) => ({
    users: getUsers(state),
  }),
)(Users)
