import { createActions } from 'redux-actions'

export const {
  getForecast
} = createActions(
  'GET_FORECAST',
  { prefix: 'BROWSE' }
)
