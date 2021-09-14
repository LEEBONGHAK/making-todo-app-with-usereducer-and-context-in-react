import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  toDos: [],
  completed: [],
}

export const ADD = "add";
export const DELETE = "delete";
export const COMPLETE = "complete"

// return 하는 object가 state에 들어가게 될 object (replace)
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      console.log(state);
      return { ...state, toDos: [...state.toDos, { text: action.payload, id: uuidv4() }] };
    case DELETE:
      return { ...state, toDos: state.toDos.filter(toDo => toDo.id !== action.payload) };
    case COMPLETE:
      console.log(state);
      return { ...state, 
        completed: [...state.completed, state.toDos.find(toDo => toDo.id === action.payload)], 
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload)
      };
    default:
      throw new Error();
  }
};

export default reducer;