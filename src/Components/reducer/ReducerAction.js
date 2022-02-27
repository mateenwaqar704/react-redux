// const initialState={
//     count:0
// }
// const reducerAction = (state=initialState,action) => {

// switch(action.type){
//  case "INCREMENT" :
//  return state= state.count+1;
//  case "DECREMENT" :
//  return state= state.count - 1;

//  default: return state

// }

// }

// export default reducerAction;
export default function reducerAction(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
