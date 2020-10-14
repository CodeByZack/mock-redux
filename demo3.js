import combineReducers from "./src/combineReducers.js";
import redux from "./src/index.js";

const { createStore } = redux;

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
};


const reducer = combineReducers({counter,todos});

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("数据更改了：");
    console.log(store.getState());
});

store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "ADD_TODO", text : "dadada"});
