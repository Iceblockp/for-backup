import React, { useState } from "react";
import { usePostTodoMutation } from "../store/service/endpoints/todo.endpoint";

const Tool = ({handleRefatch}) => {
  const [todo, setTodo] = useState("");
  const [fun, data] = usePostTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
     const res = await fun({ title: todo });
    console.log(res);
    handleRefatch();
    setTodo("");
  };
  return (
    <div className=" mt-5 p-5 ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-[50%] border border-gray-200 p-3 bg-gray-500  "
        action=""
      >
        <input
          className=" border border-gray-500 px-3 py-1 "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button type="submit" className=" rounded-lg bg-gray-300 w-[50%] mx-auto mt-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tool;
