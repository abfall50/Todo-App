import { useAppSelector } from "../features/hooks";
import { selectFilteredTodos } from "../features/todos/todosSlice";
import ClearFooter from "./ClearFooter";
import Todo from "./Todo";

const Box = () => {

  const allTodos = useAppSelector(selectFilteredTodos)

  return (
    <>
      <div className="w-full h-[80%] flex justify-center items-start pt-8">
        <div className="w-full h-full bg-[#34364C] flex flex-col rounded-md">
          <div className="w-full h-[87%] overflow-auto">
            {allTodos.map((todo, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Todo key={todo.id} todo={todo} />
              )
            })}
          </div>
          <ClearFooter />
        </div>
      </div>
    </>
  );
};

export default Box;
