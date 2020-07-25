import { connect } from 'react-redux'
import { 
  isBandHovered,
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
    hovered: isBandHovered(state, id),
    selected: isBandSelected(state, id),
    active: isBandActive(state, id),
  }),
  {
    setHoveredBand,
    resetHoveredBand,
    toggleBandSelection,
  }
)(Band)
