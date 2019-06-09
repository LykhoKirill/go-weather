import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  cities: {}
}

export default handleActions({
  [actions.setCityWeather]: (state, { payload: { city, forecast } }) => ({
    ...state,
    cities: {
      ...state.cities,
      [city]: forecast
    }
  })
}, initialState)
