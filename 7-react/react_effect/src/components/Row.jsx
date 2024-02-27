import React from "react";
import RowDeleteBtn from "./RowDeleteBtn";
import RowEditBtn from "./RowEditBtn";

const Row = ({course:{id,title,short_name,fee}}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className=" row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className=" row-title px-6 py-4 cell-editable">{title}</td>
      <td className=" row-short px-6 py-4 cell-editable">{short_name}</td>
      <td className=" row-fee px-6 py-4 cell-editable text-end">{fee}</td>
      <td className="  px-6 py-4 text-right flex gap-1 ">
       
       <RowEditBtn id={id}/>

       <RowDeleteBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
