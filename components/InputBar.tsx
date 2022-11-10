import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../features/hooks";
import Circle from "./Circle";

const InputBar = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  /**
   * We're creating a new todo object with a unique id, the description from the input, and a default
   * isCompleted value of false.
   *
   * We're then dispatching an action to the todos reducer with the type "todos/addTodo" and the
   * payload of the new todo object.
   *
   * Finally, we're clearing the input.
   */
  const addNewTodo = () => {
    if (input === "") return;

    const payload = {
      id: uuidv4(),
      description: input,
      isCompleted: false,
    };

    dispatch({ type: "todos/addTodo", payload });
    setInput("");
  };

  /* Listening for the enter key to be pressed and then calling the addNewTodo function. */
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
      <section className="w-full h-[16%] flex justify-center items-end lg:h-1/5">
        <div className="w-full h-3/5 bg-box border-0 rounded-md flex">
          <div className="w-1/6 h-full flex justify-center items-center">
            <Circle isInBox={false} />
          </div>
          <input
            className="w-full h-full bg-inherit outline-none text-text-color text-lg font-['Josephin_Sans'] placeholder:text-placeholder caret-[#3A7BFD] rounded-md"
            placeholder="Create a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </section>
    </>
  );
};

export default InputBar;
