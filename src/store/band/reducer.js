import bandsMock from 'mocks/bands'
import {
  SET_BANDS,
  SET_HOVERED_BAND,
  SET_SELECTED_BANDS,
} from './actions'

export const initialData = {
  bands: bandsMock,
  hoveredBandId: null,
  selectedBands: [],
}

export default (state = initialData, { type, payload }) => {
  switch(type) {
    case SET_BANDS: {
      return {
        ...state,
        bands: payload,
      }
    }
    case SET_HOVERED_BAND: {
      return {
        ...state,
        hoveredBandId: payload,
      }
    }
    case SET_SELECTED_BANDS: {
      return {
        ...state,
        selectedBands: payload,
      }
    }
    default: {
      return state
    }
  }
}
