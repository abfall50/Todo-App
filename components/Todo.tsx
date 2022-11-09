import { NextPage } from "next";
import Image from "next/image";
import Circle from "./Circle";
import Cross from "../public/icon-cross.svg";
import { useAppDispatch } from "../features/hooks";

interface Todo {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: Todo;
}

const Todo: NextPage<TodoProps> = (props) => {
  const { todo } = props;

  const dispatch = useAppDispatch();

  const removeTodo = () => {
    dispatch({ type: "todos/removeTodo", payload: todo.id });
  };

  const toggleCompleted = () => {
    dispatch({ type: "todos/toggleCompleted", payload: todo.id });
  };

  return (
    <>
      <div className="w-full h-1/6 border-b border-[#4D5066] flex" draggable="true" >
        <button className="w-5/6 h-full flex group" onClick={toggleCompleted}>
          <div className="w-1/6 h-full flex justify-center items-center">
            <Circle
              color={todo.isCompleted ? undefined : "4D5066"}
              gradient={
                todo.isCompleted
                  ? {
                      direction: "gradient-to-br",
                      from: "57DDFF",
                      to: "C058F3",
                    }
                  : undefined
              }
            />
          </div>
          <div className="w-4/6 h-full flex items-center overflow-hidden">
            <span className="text-white text-md font-['Josephin_Sans'] truncate">
              {todo.description}
            </span>
          </div>
        </button>
        <button
          className="w-1/6 h-full flex justify-center items-center"
          onClick={removeTodo}
        >
          <Image src={Cross} alt="Cross" />
        </button>
      </div>
    </>
  );
};

export default Todo;
