import { createStore } from 'redux';

const reducers = (state, action) => {
  console.log(state, action);
  if(action.type === 'PLUS'){
    return{
      ...state,
      count: state.count + 1
    }
  }
  if(action.type === 'MINUS'){
    return{
      ...state,
      count: state.count - 1
    }
  }
return {
  count: 2,
  appVersion: '0.0.3'
}
}

export const store = createStore(reducers);