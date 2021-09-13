import React, { useReducer, useState } from 'react';

const initialState = {
  toDos: []
}

const ADD = "add";

// return 하는 object가 state에 들어가게 될 object (replace)
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    dispatch({type: ADD, payload: newToDo});
  };
  const onChange = event => {
    const { target : { value }} = event;
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
        {state.toDos.map((toDo, index) => <li key={index}>{toDo.text}</li>)}
      </ul>
    </>
  );
}

export default App;
