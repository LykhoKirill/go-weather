import { fork, take, put, call } from 'redux-saga/effects'

import { getCurrentLocationWeatherSaga } from 'Core/weather/sagas'

import * as actions from './actions'

function * initCurrentLocationSaga () {
  while (true) {
    yield take(actions.initCurrentLocation)
    yield put(actions.setIsLoading(true))
    try {
      yield call(getCurrentLocationWeatherSaga)
    } catch (err) {
      console.error(err)
      return
    }
    yield put(actions.setIsLoading(false))
  }
}

export default function * () {
  yield fork(initCurrentLocationSaga)
}
