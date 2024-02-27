import React, { useState } from "react";
import { useGetSingleTodoQuery, useUpdateTodoMutation } from "../store/service/endpoints/todo.endpoint";

const IndividualList = ({ i, handleDelete,handleRefatch }) => {
  const [edit, setEdit] = useState({
    editState: false,
    value: i.title,
  });

  const [updateTodo, {isLoading,error}] = useUpdateTodoMutation();
  const { data } = useGetSingleTodoQuery(i.id);

  const handleEdit = () => {
    setEdit((pre) => ({ ...pre, editState: true }));
  };
  const handleEdited = async () => {
    setEdit(pre => ({...pre,editState:false}))
    console.log(edit.value);
    try{
      const res = await updateTodo({id:i.id,title:edit.value});
      console.log(res);
    handleRefatch();
    }catch(error){
      console.error("Error updating todo:",error)
    }
  }

  return (
    <div className=" border border-gray-500 mb-3 grid grid-cols-4 w-[50%] ">
      <div className=" col-span-1">({i.id}) </div>
      {edit.editState ? (
        <input
          className=" w-full col-span-2 border border-gray-600 px-2 "
          value={edit.value}
          onChange={(e) =>
            setEdit((pre) => ({ ...pre, value: e.target.value }))
          }
          autoFocus
          type="text"
        />
      ) : (
        <div className=" col-span-2">{i.title}</div>
      )}
      <div className=" col-span-1 flex gap-3 ">
        {edit.editState ? <button onClick={handleEdited} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 stroke-green-600 hover:bg-green-200 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </button>:
        <button onClick={handleEdit} className="  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 hover:bg-blue-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button> }
        
        
        <button onClick={() => handleDelete(i.id)} className="  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 stroke-red-600 hover:bg-gray-300 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IndividualList;
