import {
  getHoveredBandsMap,
  getSelectedBandsMap,
} from './selectors'

import getActiveBandsMap from './getActiveBandsMap'
import getHighlightedBandsMap from './getHighlightedBandsMap'

export const isBandHovered = (state, id) => getHoveredBandsMap(state)[id]
export const isBandSelected = (state, id) => getSelectedBandsMap(state)[id]
export const isBandActive = (state, id) => getActiveBandsMap(state)[id]
export const isBandHighlighted = (state, id) => getHighlightedBandsMap(state)[id]
