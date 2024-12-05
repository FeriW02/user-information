import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getSingleUser } from "../../services/user-services";

const SingerUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getSingleUser(id)
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex justify-center items-center mt-[150px] ">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h1>
        <p className="text-gray-600 text-sm mb-4">{user.email}</p>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Street:</span> {user.address?.street}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">City:</span> {user.address?.city}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <span className="font-semibold">Zipcode:</span> {user.address?.zipcode}
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Company:</span> {user.company?.name}
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <Link
            to={`/posts/${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Posts
          </Link>
          <Link
            to={`/todos/${id}`}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            Todos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingerUser;
