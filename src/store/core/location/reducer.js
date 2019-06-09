import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  currentLocation: {},
  currentCity: '',
  browseCity: ''
}

export default handleActions({
  [actions.setCurrentLocation]: (state, { payload }) => ({ ...state, currentLocation: payload }),
  [actions.setCurrentCity]: (state, { payload }) => ({ ...state, currentCity: payload }),
  [actions.setBrowseCity]: (state, { payload }) => ({ ...state, browseCity: payload })
}, initialState)
