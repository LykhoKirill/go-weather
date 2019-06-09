import { configureStore } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootSaga from './rootSaga'
import createRootReducer from './rootReducer'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [sagaMiddleware, routerMiddleware(history)]
})

sagaMiddleware.run(rootSaga)

export default store
