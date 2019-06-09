import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import currentLocation from 'Components/CurrentLocation/store/reducer'
import location from 'Core/location/reducer'
import weather from 'Core/weather/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  currentLocation,
  core: combineReducers({
    location,
    weather
  })
})
