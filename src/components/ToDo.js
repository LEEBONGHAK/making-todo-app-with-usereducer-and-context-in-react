import React, { useState } from 'react';
import { DELETE, COMPLETE, UNCOMPLETE, EDIT } from '../actions';
import { useDispatch } from '../context';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  padding-left: 10px;
  margin-bottom: 5px;
`;

const Todo = styled.input`
  all: unset;
  padding: 5px 0;
`;

const Completed = styled.input`
  all: unset;
  padding: 5px 0;
  text-decoration: line-through;
  color: rgba(127, 140, 141, 0.8);
`;

export default ({text, id, isCompleted}) => {
  const [editedToDo, setEditedToDo] = useState(text);
  const dispatch = useDispatch();

  const onChange = event => {
    const { target: { value } } = event;
    setEditedToDo(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    const { target } = event;
    dispatch({ type: EDIT, payload: target[0].value, id });
    target[0].disabled = true;
  };

  const editHandler = event => {
    const { target } = event;
    const input = target.previousSibling[0];
    input.disabled = false;
    input.focus();
  }

  return (
    <Li>
      <form onSubmit={onSubmit}>
        {!isCompleted ? (
          <Todo type="text" value={editedToDo} onChange={onChange} disabled />
          ) : (
          <Completed type="text" value={editedToDo} onChange={onChange} disabled />
          )
        }
      </form>
      {isCompleted ? "" : <button onClick={editHandler}>edit</button>}
      <button onClick={() => dispatch({type: DELETE, payload: id})}>❌</button>
      <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id})}>{isCompleted ? "😁" : "✅"}</button>
    </Li>
  );
};