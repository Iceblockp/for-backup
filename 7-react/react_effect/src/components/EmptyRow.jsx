import React, { useContext } from 'react'
import { DataContext } from './contexts/DataContext'

const EmptyRow = () => {
    const {toggleCreateDrawer} = useContext(DataContext)

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th
    colSpan={5}
      scope="row"
      className=" text-center row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
     There is no Course. <button onClick={toggleCreateDrawer} className=' underline '>Create New One</button>
    </th>
    
  </tr>
  )
}

export default EmptyRow