import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  isLoading: true
}

export default handleActions({
  [actions.setIsLoading]: (state, { payload }) => ({ ...state, isLoading: payload })
}, initialState)
