import { createActions } from 'redux-actions'

export const {
  setIsLoading,
  initCurrentLocation
} = createActions(
  'SET_IS_LOADING',
  'INIT_CURRENT_LOCATION',
  { prefix: 'CURRENT_LOCATION' }
)
