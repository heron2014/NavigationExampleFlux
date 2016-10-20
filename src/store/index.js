import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../redux';

const middleWare = [];

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV === 'development'
});

middleWare.push(loggerMiddleware);

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, ...middleWare)
  );

  return createStore(reducer, initialState, enhancer);
}
