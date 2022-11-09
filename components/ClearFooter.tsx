import { useAppDispatch, useAppSelector } from "../features/hooks";
import { selectNumberOfTodosLeft } from "../features/todos/todosSlice";

const ClearFooter = () => {
  const dispatch = useAppDispatch();
  const todosLeft = useAppSelector(selectNumberOfTodosLeft);

  const clearCompleted = () => {
    dispatch({ type: "todos/clearCompleted" });
  };

  return (
    <>
      <div className="w-full h-[10%] bg-inherit rounded-md flex justify-between items-center px-6 pt-2">
        <span className="text-sm text-[#4D5066] font-medium font-['Josephin_Sans']">
          {todosLeft} items left
        </span>
        <button
          className="text-sm text-[#4D5066] font-medium font-['Josephin_Sans']"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default ClearFooter;
