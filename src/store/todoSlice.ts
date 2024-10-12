import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TTodosState = {
  list: TTodo[];
  filter: "all" | "active" | "completed";
};

const initialState: TTodosState = {
  list: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodosCompleted(state) {
      state.list = state.list.filter((todo) => !todo.completed);
    },
    toggleTodoCompleted(state, action: PayloadAction<string>) {
      const toggleTodo = state.list.find((todo) => todo.id === action.payload);

      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    setFilter(state, action: PayloadAction<"all" | "active" | "completed">) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodosCompleted, toggleTodoCompleted, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
