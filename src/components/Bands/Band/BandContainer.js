import { connect } from 'react-redux'
import { 
  isBandHighlighted,
  isBandSelected,
  isBandActive,
} from 'store/band/selectors/single'
import {
  setHoveredBand,
  resetHoveredBand,
  toggleBandSelection,
} from 'store/band/actions'
import Band from './Band'

export default connect(
  (state, { data: { id } }) => ({
    highlighted: isBandHighlighted(state, id),
    selected: isBandSelected(state, id),
    active: isBandActive(state, id),
  }),
  {
    setHoveredBand,
    resetHoveredBand,
    toggleBandSelection,
  }
)(Band)
