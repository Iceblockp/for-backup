import React from "react";
import { useDeleteTodoMutation, useGetSingleTodoQuery, useGetTodoQuery, useUpdateTodoMutation } from "../store/service/endpoints/todo.endpoint";
import IndividualList from "./IndividualList";

const List = ({ isLoading, data,handleRefatch }) => {

  const [fun,dataResult] = useDeleteTodoMutation();
  const [edit,editData] = useUpdateTodoMutation();
 

  const handleDelete = async (id) => {
    const res= await fun(id);
    console.log(res);
    handleRefatch();
  }

  const handleEdit = (id) => {
    edit(id,formData);
  }


  return (
    <div className=" p-10 ">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((i) => (
            <IndividualList key={i.id} i={i} handleDelete={handleDelete} handleRefatch={handleRefatch} />
          ))}
        </>
      )}
    </div>
  );
};

export default List;
