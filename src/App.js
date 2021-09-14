import React, { useState } from 'react';
import Add from './Add'

const App = () => {
  
  return (
    <>
      <h1>ADD To Dos</h1>
      <Add />
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
