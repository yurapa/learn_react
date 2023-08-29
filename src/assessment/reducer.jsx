import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.event === 'double') return [...state, ...state];
  return state;

  // switch (action.type) {
  //   case 'double':
  //     return [...state, ...state];
  //   default:
  //       return state;
  // }
}


export const ReducerComponent = () => {
  const [store, dispatch] = useReducer(reducer, [1, 2]);

  console.log('Store :: ', store);

  return <button onClick={() => dispatch({ event: 'double'})}>
    Click reducer
  </button>
}
