const combineReducers = (reducers)=>{

    const keys = Object.keys(reducers);
    const finalReducers = {};

    for(let i = 0; i<keys.length; i++){
        const key = keys[i];
        if(typeof reducers[key] === 'function'){
            finalReducers[key] = reducers[key];
        }
    }

    const finalReducerKeys = Object.keys(finalReducers);

    return (state = {},action)=>{
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i<finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const prevStateForKey = state[key];
            const nextStateForKey = reducer(prevStateForKey,action);
            if(typeof nextStateForKey === 'undefined'){
                throw new Error('error')
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    }
};

export default combineReducers;