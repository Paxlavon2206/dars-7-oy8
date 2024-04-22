import { createSlice, configureStore } from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// Define the initial state
const initialState: TodoItem[] = [];

// Define the slice for managing todo items
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodoStatus(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

// Export actions from the slice
export const { addTodo, removeTodo, toggleTodoStatus } = todoSlice.actions;

// Create a Redux store
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});
