import React from 'react';
import Add from './Add';
import List from './List';
import ToDo from './ToDo';
import { useStates } from '../context';

const App = () => {
  const { toDos, completed } = useStates();
  return (
    <>
      <h1>ADD To Dos</h1>
      <Add />
      <List name={"To Dos"}>
        {toDos.map(toDo => <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={false} />)}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map(complete => <ToDo key={complete.id} id={complete.id} text={complete.text} isCompleted={true} />)}
      </List>
    </>
  );
}

export default App;
