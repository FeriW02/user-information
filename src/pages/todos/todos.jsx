import React, { useEffect, useState } from "react";
import { getTodos } from "../../services/todos";
import { useParams } from "react-router";

const Todos = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodos(id)
      .then((data) => setTodo(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex justify-center items-center mt-[100px] cursor-pointer bg-[#e8f5e9]">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#2e7d32] mb-4">Todos</h1>
        <ul className="list-none space-y-2 max-h-80 overflow-y-auto custom-scroll">
          {todo.map((item) => (
            <li
              key={item.id}
              className={`p-2 rounded-md ${
                item.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
