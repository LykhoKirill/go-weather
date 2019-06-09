import { createActions } from 'redux-actions'

export const {
  setCurrentLocation,
  setCurrentCity,
  setBrowseCity
} = createActions(
  'SET_CURRENT_LOCATION',
  'SET_CURRENT_CITY',
  'SET_BROWSE_CITY',
  { prefix: 'LOCATION' }
)
