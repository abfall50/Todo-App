import { selectFilterState } from "../features/filter/filterSlice";
import {
  useAppDispatch,
  useAppSelector,
  useMediaQuery,
} from "../features/hooks";
import { selectNumberOfTodosLeft } from "../features/todos/todosSlice";
import Filter from "./Filter";

const ClearFooter = () => {
  const dispatch = useAppDispatch();
  const todosLeft = useAppSelector(selectNumberOfTodosLeft);
  const breakpoint = useMediaQuery(1024);

  /**
   * When the user clicks the clear completed button, dispatch an action to the reducer to clear the
   * completed todos.
   */
  const clearCompleted = () => {
    dispatch({ type: "todos/clearCompleted" });
  };

  return (
    <>
      <div className="w-full h-[10%] bg-inherit rounded-md flex justify-between items-center px-6 pt-2">
        <span className="text-sm text-text-color-footer font-medium font-['Josephin_Sans'] lg:w-1/3">
          {todosLeft} items left
        </span>
        {!breakpoint && <Filter />}
        <button
          className="text-sm text-text-color-footer font-medium font-['Josephin_Sans'] lg:w-1/3 lg:hover:text-hover-text-2"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default ClearFooter;
