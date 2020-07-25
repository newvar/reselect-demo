import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const configureStore = (
  reducer,
  initialState,
  middlewares = [],
  options = {}
) => {
  const composeEnhancers = composeWithDevTools(options)
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

export const store = configureStore(reducer, undefined, [thunk])
