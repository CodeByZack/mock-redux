import redux from "./src/index.js";

const { createStore,applyMiddleware } = redux;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// 日志中间件
const logger = (param)=>{
  const { getState, dispatch } = param;
  return next => action => {
    console.log("will dispatch",action);
    const returnValue = next(action);
    return returnValue;
  }
};

const store = createStore(reducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log("数据更改了：");
    console.log(store.getState());
});

store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
