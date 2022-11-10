import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, selectFilterState } from "../filter/filterSlice";

type Todo = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

/* Creating a slice of the redux store. */
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    removeTodo: (state: TodosState, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state: TodosState, action: PayloadAction<string>) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) todo.isCompleted = !todo?.isCompleted;
    },
    clearCompleted: (state: TodosState) => {
      state.list = state.list.filter((todo) => !todo.isCompleted);
    },
    dropTodo: (
      state: TodosState,
      action: PayloadAction<{ source: number; destination: number }>
    ) => {
      const [todo] = state.list.splice(action.payload.source, 1);
      state.list.splice(action.payload.destination, 0, todo);
    },
  },
});

const selectAllTodos = (state: {
  todosReducer: TodosState;
  filterReducer: FilterState;
}) => {
  return state.todosReducer.list;
};

const selectActiveTodos = (state: {
  todosReducer: TodosState;
  filterReducer: FilterState;
}) => {
  return state.todosReducer.list.filter((todo) => !todo.isCompleted);
};

const selectCompletecTodos = (state: {
  todosReducer: TodosState;
  filterReducer: FilterState;
}) => {
  return state.todosReducer.list.filter((todo) => todo.isCompleted);
};

/**
 * It takes a state object, and returns a filtered list of todos
 * @param state - { todosReducer: TodosState, filterReducer: FilterState }
 * @returns An array of todos
 */
export const selectFilteredTodos = (state: {
  todosReducer: TodosState;
  filterReducer: FilterState;
}) => {
  const filter = selectFilterState(state);
  if (filter === "All") return selectAllTodos(state);
  if (filter === "Active") return selectActiveTodos(state);
  if (filter === "Completed") return selectCompletecTodos(state);
  return [];
};

/**
 * "Return the number of todos that are not completed."
 *
 * The function takes in the state object and returns the number of todos that are not completed
 * @param state - { todosReducer: TodosState, filterReducer: FilterState  }
 * @returns The number of todos that are not completed.
 */
export const selectNumberOfTodosLeft = (state: {
  todosReducer: TodosState;
  filterReducer: FilterState;
}) => {
  return state.todosReducer.list.filter((todo) => !todo.isCompleted).length;
};

export const { addTodo, removeTodo, toggleCompleted, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
