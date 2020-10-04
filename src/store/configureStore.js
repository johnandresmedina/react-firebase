import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const NODE_ENV = process.env.NODE_ENV;

const middlewares = [...getDefaultMiddleware()];

if (NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: NODE_ENV !== 'production',
    preloadedState,
  });

  return store;
}
