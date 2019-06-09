import { call, select, put } from 'redux-saga/effects'

import {
  getCurrentLocationWeather,
  getCurrentLocationForecast,
  getWeatherByLocation,
  getForecastByLocation
} from 'Api'
import { getCurrentLocationSaga } from 'Core/location/sagas'
import { selectCurrentCity } from 'Core/location/selectors'

import * as actions from './actions'

export function * getCurrentLocationWeatherSaga () {
  let todayForecast, weekForecast

  yield call(getCurrentLocationSaga)
  yield call(getCurrentLocationWeather)
  yield call(getCurrentLocationForecast)

  const currentCity = yield select(selectCurrentCity)
  yield put(actions.setCityWeather({
    city: currentCity,
    forecast: { today: todayForecast, week: weekForecast }
  }))
}

export function * getWeatherByGeoLocationSaga ({ location, city }) {
  const geoLocation = {
    latitude: location.lat,
    longitude: location.lng
  }

  const todayForecast = yield call(getWeatherByLocation, geoLocation)
  const weekForecast = yield call(getForecastByLocation, geoLocation)

  yield put(actions.setCityWeather({
    city,
    forecast: { today: todayForecast, week: weekForecast }
  }))
}
