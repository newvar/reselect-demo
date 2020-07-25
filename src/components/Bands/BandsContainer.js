import { connect } from 'react-redux'
import { getBands } from 'store/band/selectors/selectors'
import Bands from './Bands'

export default connect(
  (state) => ({
    bands: getBands(state),
  }),
)(Bands)
