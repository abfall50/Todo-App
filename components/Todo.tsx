import { NextPage } from "next";
import Image from "next/image";
import Circle from "./Circle";
import Cross from "../public/icon-cross.svg";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { DragEventHandler, useEffect, useState } from "react";
import { selectFilteredTodos, TodosState } from "../features/todos/todosSlice";
import { FilterState } from "../features/filter/filterSlice";

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

  /**
   * When the user clicks the button, dispatch an action to remove the todo.
   */
  const removeTodo = () => {
    dispatch({ type: "todos/removeTodo", payload: todo.id });
  };

  /**
   * When the user clicks the checkbox, dispatch an action to the Redux store that toggles the
   * completed status of the todo.
   */
  const toggleCompleted = () => {
    dispatch({ type: "todos/toggleCompleted", payload: todo.id });
  };

  return (
    <>
      <div
        id={todo.id}
        className="w-full h-1/6 border-b border-todo-border flex "
      >
        <button
          className="w-5/6 h-full flex lg:w-[90%] group"
          onClick={toggleCompleted}
        >
          <div className="w-1/6 h-full flex justify-center items-center">
            <Circle
              gradient={
                todo.isCompleted
                  ? {
                      direction: "gradient-to-br",
                      from: "57DDFF",
                      to: "C058F3",
                    }
                  : undefined
              }
              isInBox={true}
            />
          </div>
          <div className="w-4/6 h-full flex items-center overflow-hidden pl-1">
            <span
              className={
                "text-md font-['Josephin_Sans'] truncate " +
                (todo.isCompleted
                  ? "line-through text-[#4D5066]"
                  : "text-text-color")
              }
            >
              {todo.description}
            </span>
          </div>
        </button>
        <button
          className="w-1/6 h-full flex justify-center items-center lg:w-[10%] lg:hidden lg:group-hover:block"
          onClick={removeTodo}
        >
          <Image src={Cross} alt="Cross" />
        </button>
      </div>
    </>
  );
};

export default Todo;
