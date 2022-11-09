import {v4 as uuidv4} from 'uuid'
import { useEffect, useState } from "react";
import { useAppDispatch } from "../features/hooks";
import Circle from "./Circle";

const InputBar = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const addNewTodo = () => {
    const payload = {
      id: uuidv4(),
      description: input,
      isCompleted: false,
    };

    dispatch({ type: "todos/addTodo", payload });
    setInput("");
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        addNewTodo();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <>
      <div className="w-full h-[16%] flex justify-center items-end">
        <div className="w-full h-3/5 bg-[#34364C] border-0 rounded-md flex">
          <div className="w-1/6 h-full flex justify-center items-center">
            <Circle color={"4D5066"} />
          </div>
          <input
            className="w-full h-full bg-inherit outline-none text-white text-lg font-['Josephin_Sans'] placeholder:text-[#4D5066] caret-[#3A7BFD] rounded-md"
            placeholder="Create a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default InputBar;
