import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, COMPLETE, UNCOMPLETE } from './actions'

export const initialState = {
  toDos: [],
  completed: [],
}

// return 하는 object가 state에 들어가게 될 object (replace)
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, toDos: [...state.toDos, { text: action.payload, id: uuidv4() }] };
    case DELETE:
      return { ...state, 
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: state.completed.filter(complete => complete.id !== action.payload),
      };
    case COMPLETE:
      return { ...state, 
        completed: [...state.completed, state.toDos.find(toDo => toDo.id === action.payload)], 
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload)
      };
    case UNCOMPLETE:
      return { ...state, 
        toDos: [...state.toDos, state.completed.find(complete => complete.id === action.payload)],
        completed: state.completed.filter(complete => complete.id !== action.payload)
      };
    default:
      throw new Error();
  }
};

export default reducer;