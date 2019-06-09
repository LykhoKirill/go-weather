import { fork, take, call, put } from 'redux-saga/effects'
import get from 'lodash/get'

import {
  getCurrentLocation,
  getReverseGeocoding,
  getGeocodingByAddress
} from 'Api'

import * as actions from './actions'

export function * getCurrentLocationSaga () {
  try {
    const { latitude, longitude } = yield call(getCurrentLocation)
    yield put(actions.setCurrentLocation({ latitude, longitude }))
    const { results } = yield call(getReverseGeocoding, `${latitude},${longitude}`)
    const city = get(results, '[0].address_components.[4].long_name', 'Unknown Position')
    yield put(actions.setCurrentCity(city))
  } catch (err) {
    console.error(err)
  }
}

export function * getLocationByAddressSaga (address) {
  try {
    const response = yield call(getGeocodingByAddress, address)
    const location = get(response, 'results.[0].geometry.location', {})
    return location
  } catch (err) {
    console.error(err)
  }
}
