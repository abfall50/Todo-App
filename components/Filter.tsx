import { selectFilterState } from "../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";

const Filter = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectFilterState);

  /**
   * Functions that changes the state of the filter.
   */
  const allFilter = () => {
    dispatch({ type: "filter/changeToAll" });
  };

  const activeFilter = () => {
    dispatch({ type: "filter/changeToActive" });
  };

  const completedFilter = () => {
    dispatch({ type: "filter/changeToCompleted" });
  };

  return (
    <>
      <div className="w-full h-4/5 bg-box border-0 rounded-md flex justify-center items-center gap-6">
        <button
          className={
            "text-md font-bold font-['Josephin_Sans'] " +
            (currentFilter === "All"
              ? "text-[#3A7BFD]"
              : "text-text-color-footer lg:hover:text-hover-text-1")
          }
          onClick={allFilter}
        >
          All
        </button>
        <button
          className={
            "text-md font-bold font-['Josephin_Sans'] " +
            (currentFilter === "Active"
              ? "text-[#3A7BFD]"
              : "text-text-color-footer lg:hover:text-hover-text-1")
          }
          onClick={activeFilter}
        >
          Active
        </button>
        <button
          className={
            "text-md font-bold font-['Josephin_Sans'] " +
            (currentFilter === "Completed"
              ? "text-[#3A7BFD]"
              : "text-text-color-footer lg:hover:text-hover-text-1")
          }
          onClick={completedFilter}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default Filter;
