import {
  getSelectedBands,
} from './selectors/selectors'
import {
  isBandSelected,
} from './selectors/single'

export const SET_BANDS = 'SET_BANDS'
export const SET_HOVERED_BAND = 'SET_HOVERED_BAND'
export const SET_SELECTED_BANDS = 'SET_SELECTED_BANDS'

export const setHoveredBand = (id) => ({
  type: SET_HOVERED_BAND,
  payload: id,
})

export const resetHoveredBand = () => ({
  type: SET_HOVERED_BAND,
  payload: null,
})

export const setSelectedBands = (bands) => ({
  type: SET_SELECTED_BANDS,
  payload: bands,
})

const addUniq = (array, value) => {
  const set = new Set(array)
  set.add(value)
  return Array.from(set)
}

export const selectBand = (id) => (dispatch, getState) => {
  const selectedBands = getSelectedBands(getState())
  const newSelectedBands = addUniq(selectedBands, id)
  dispatch(setSelectedBands(newSelectedBands))
}

export const deselectBand = (id) => (dispatch, getState) => {
  const selectedBands = getSelectedBands(getState())
  const newSelectedBands = selectedBands.filter(bandId => id !== bandId)
  dispatch(setSelectedBands(newSelectedBands))
}

export const toggleBandSelection = (id) => (dispatch, getState) => {
  if(isBandSelected(getState(), id)) {
    dispatch(deselectBand(id))
  } else {
    dispatch(selectBand(id))
  }
}
