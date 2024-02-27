import React from 'react'

const Course = ({title, count}) => {

    const borderBgClass = count === 0 ? "border-red-400 bg-red-100" : "bg-gray-100"

  return (
    <div className={`border-s-4 ${borderBgClass} flex gap-2 p-4 mb-3`}>
        <p>{count}</p>
        <p>{title}</p>
    </div>
  )
}

export default Course