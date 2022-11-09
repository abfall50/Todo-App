import { useAppDispatch } from "../features/hooks";

const FilterFooter = () => {
  const dispatch = useAppDispatch();

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
      <div className="w-full h-[13%] mt-4">
        <div className="w-full h-4/5 bg-[#34364C] border-0 rounded-md flex justify-center items-center gap-6">
          <button
            className="text-md text-[#4D5066] font-bold font-['Josephin_Sans']"
            onClick={allFilter}
          >
            All
          </button>
          <button
            className="text-md text-[#4D5066] font-bold font-['Josephin_Sans']"
            onClick={activeFilter}
          >
            Active
          </button>
          <button
            className="text-md text-[#4D5066] font-bold font-['Josephin_Sans']"
            onClick={completedFilter}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterFooter;
