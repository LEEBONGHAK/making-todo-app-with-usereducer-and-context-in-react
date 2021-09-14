import React, { useState } from 'react';
import { ADD } from '../actions';
import { useDispatch } from '../context';

export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    dispatch({type: ADD, payload: newToDo});
  };
  const onChange = event => {
    const { target: { value }} = event;
    setNewToDo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={newToDo} type="text" placeholder="Write to do" onChange={onChange} />
    </form>
  );
};