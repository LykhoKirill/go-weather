import { createSelector } from 'reselect'

const selectLocation = state => state.core.location
const createLocationSelector = createSelector.bind(null, selectLocation)

export const selectCurrentLocation = createLocationSelector(location => location.currentLocation)
export const selectCurrentCity = createLocationSelector(location => location.currentCity)
export const selectBrowseCity = createLocationSelector(location => location.browseCity)
