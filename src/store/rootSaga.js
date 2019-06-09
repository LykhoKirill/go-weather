import { fork } from 'redux-saga/effects'

import currentLocationSagas from 'Components/CurrentLocation/store/sagas'
import browseSagas from 'Components/Browse/store/sagas'

export default function * rootSaga () {
  yield fork(currentLocationSagas)
  yield fork(browseSagas)
}
