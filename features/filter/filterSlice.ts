import { createSlice } from "@reduxjs/toolkit";
import { TodosState } from "../todos/todosSlice";

export type FilterState = {
  filter: string;
};

const initialState: FilterState = { filter: "All" };

/* Creating a slice of the state. */
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeToAll: (state: FilterState) => {
      state.filter = "All";
    },
    changeToActive: (state: FilterState) => {
      state.filter = "Active";
    },
    changeToCompleted: (state: FilterState) => {
      state.filter = "Completed";
    },
  },
});

/**
 * It takes the state object as an argument and returns the filter property of the filterReducer object
 * @param state - { todosReducer: TodosState, filterReducer: FilterState }
 * @returns The filter state
 */
export const selectFilterState = (state: { todosReducer: TodosState, filterReducer: FilterState }) => {
	return state.filterReducer.filter
};

export const { changeToAll, changeToActive, changeToCompleted } =
  filterSlice.actions;
export default filterSlice.reducer;
