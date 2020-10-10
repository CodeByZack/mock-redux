import compose from './compose.js';

const applyMiddleware = (...middlewares) => (createStore) => (reducer) => {
  let dispatch = () => {
    throw new Error(
      "not allowd peform dispatch while constructing your middleware "
    );
  };
  const store = createStore(reducer);
  const middlewareApi = {
    getState: store.getState,
    dispatch: dispatch,
  };

  const chain = middlewares.map((middleware) => middleware(middlewareApi));
  dispatch = compose(...chain)(store.dispatch);
  return {
    ...store,
    dispatch,
  };
};

export default applyMiddleware;
