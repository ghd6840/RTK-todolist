import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../store/store';

// Define a type for the slice state
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Define the initial state using that type
const initialState: Todo[] = [
  {
    id: uuidv4(),
    text: 'Active todo',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Completed todo',
    completed: true,
  }
];

export const todoSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // const { text } = action.payload;
      state.push({ id: uuidv4(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;