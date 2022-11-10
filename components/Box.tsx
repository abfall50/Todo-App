import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { selectFilteredTodos } from "../features/todos/todosSlice";
import ClearFooter from "./ClearFooter";
import Todo from "./Todo";

const Box = () => {
  const allTodos = useAppSelector(selectFilteredTodos)

  return (
    <>
      <section className="w-full h-[80%] flex justify-center items-start pt-8 lg:h-full">
        <div className="w-full h-full bg-box flex flex-col rounded-md shadow-xl">
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
      </section>
    </>
  );
};

export default Box;
