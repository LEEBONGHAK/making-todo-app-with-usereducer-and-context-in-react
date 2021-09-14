import React, { useReducer, useState } from 'react';
import reducer, { initialState, ADD, DELETE, COMPLETE, UNCOMPLETE } from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    dispatch({type: ADD, payload: newToDo});
  };
  const onChange = event => {
    const { target: { value }} = event;
    setNewToDo(value);
  };
  return (
    <>
      <h1>ADD To Dos</h1>
      <form onSubmit={onSubmit}>
        <input value={newToDo} type="text" placeholder="Write to do" onChange={onChange} />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map(toDo => (
        <li key={toDo.id}>
          <span>{toDo.text}</span>
          <button onClick={() => dispatch({type: DELETE, payload: toDo.id})}>❌</button>
          <button onClick={() => dispatch({type: COMPLETE, payload: toDo.id})}>✅</button>
        </li>))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map(complete => (
              <li key={complete.id}>
                <span>{complete.text}</span>
                <button onClick={() => dispatch({type: DELETE, payload: complete.id})}>❌</button>
                <button onClick={() => dispatch({type: UNCOMPLETE, payload: complete.id})}>😁</button>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
