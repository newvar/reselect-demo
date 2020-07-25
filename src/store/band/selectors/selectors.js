import { createSelector } from 'reselect'

export const band = (state) => state.band

export const getBands = (state) => band(state).bands
export const getSelectedBands = (state) => band(state).selectedBands
export const getHoveredBandId = (state) => band(state).hoveredBandId

export const getHoveredBandsMap = createSelector(
  getBands,
  getHoveredBandId,
  (bands, hoveredBandId) => bands.reduce((map, band) => ({
    ...map,
    [band.id]: band.id === hoveredBandId,
  }), {}),
)

export const getSelectedBandsMap = createSelector(
  getBands,
  getSelectedBands,
  (bands, selectedBands) => bands.reduce((map, band) => ({
    ...map,
    [band.id]: selectedBands.includes(band.id),
  }), {}),
)
