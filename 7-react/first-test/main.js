import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1",null,"MIN Ga Lar Par");

const App = () => {

  const courses = [
    {
      id: 1,
      title: "Web Dev Foundation",
      studentCount: 0,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 6,

    },
    {
      id: 3,
      title: "Basic Ui Design",
      studentCount: 5,

    },
    {
      id: 4,
      title: "Web App Foundation",
      studentCount: 0,

    },
    {
      id: 5,
      title: "Premium Web design",
      studentCount: 3,

    }
  ]


  return React.createElement(
    "div",
    {
      className: "p-10 m-10 border border-gray-500",
    },
    React.createElement(
      "h1",
      {className: "font-serif font-bold text-blue-500 text-3xl mb-6"},
      "Course List"),
    React.createElement(
      "ul",
      null,
      courses.filter(({studentCount}) => studentCount > 0).map(({ title, id, studentCount }) =>
        React.createElement(
          "li",
          {
            key: id,
            className: `font-mono ${studentCount === 0 ? "bg-red-100" : "bg-gray-100"} mb-3 p-2 border-s-4`


          },
          studentCount,
          " ",
          title
        )

      )
    )
  );
};

root.render(App());
