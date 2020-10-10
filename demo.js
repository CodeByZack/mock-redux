import redux from "./src/index.js";

const { createStore } = redux;

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

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("数据更改了：");
    console.log(store.getState());
});

store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
