import { selectFilterState } from "../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import Filter from "./Filter";

const FilterFooter = () => {
  return (
    <>
      <section className="w-full h-[8%] flex justify-center items-center rounded-md mt-4 shadow-xl">
        <Filter />
      </section>
    </>
  );
};

export default FilterFooter;
