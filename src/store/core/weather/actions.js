import { createActions } from 'redux-actions'

export const {
  setCityWeather
} = createActions(
  'SET_CITY_WEATHER',
  { prefix: 'WEATHER' }
)
