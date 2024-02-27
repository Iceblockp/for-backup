import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Tool from "./components/Tool";
import List from "./components/List";
import { useGetTodoQuery } from "./store/service/endpoints/todo.endpoint";

const App = () => {

  const { isLoading, isError, isSuccess, data,refetch} = useGetTodoQuery();

  const handleRefatch = () => {
    refetch();
  }

  return (
    <div>
      <h1 className=" text-center font-bold ">Rtk Todo</h1>
      <Tool handleRefatch={handleRefatch} />
      <List handleRefatch={handleRefatch} isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;
