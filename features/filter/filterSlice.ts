import { createSlice } from "@reduxjs/toolkit";
import { TodosState } from "../todos/todosSlice";

export type FilterState = {
  filter: string;
};

const initialState: FilterState = { filter: "All" };

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

export const selectFilterState = (state: { todosReducer: TodosState, filterReducer: FilterState }) => {
	return state.filterReducer.filter
};

export const { changeToAll, changeToActive, changeToCompleted } =
  filterSlice.actions;
export default filterSlice.reducer;
