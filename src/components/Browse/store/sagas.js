import { fork, take, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import get from 'lodash/get'

import { getLocationByAddressSaga } from 'Core/location/sagas'
import { setBrowseCity } from 'Core/location/actions'
import { getWeatherByGeoLocationSaga } from 'Core/weather/sagas'

import { getForecast } from './actions'

function * getForecastSaga () {
  while (true) {
    const { payload } = yield take(getForecast)

    const formattedAddress = payload.formatted_address
    const location = yield call(getLocationByAddressSaga, formattedAddress)

    const city = get(payload, 'address_components.[0].long_name')
    yield put(setBrowseCity(city))

    yield call(getWeatherByGeoLocationSaga, { location, city })
    yield put(push('/details'))
  }
}

export default function * BrowseSagas () {
  yield fork(getForecastSaga)
}
