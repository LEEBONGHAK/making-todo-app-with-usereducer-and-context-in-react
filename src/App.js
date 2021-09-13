import React, { useReducer } from 'react';

// return 하는 object가 state에 들어가게 될 object (replace)
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>To Dos</h1>
      Count: {state.count}
      <button onClick={()=>dispatch({type: 'increment'})}>+</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export default App;
