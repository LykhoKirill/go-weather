import { createSelector } from 'reselect'

const selectCurrentLocation = state => state.currentLocation
const createCurrentLocationSelector = createSelector.bind(null, selectCurrentLocation)

export const selectIsLoading = createCurrentLocationSelector(location => location.isLoading)
