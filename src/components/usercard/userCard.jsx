import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, username, email }) => {
  return (
    <>
      <Link
        to={`/user/${id}`}
        className="w-64 h-32 bg-white shadow rounded-lg flex flex-col justify-center items-start p-4 hover:shadow-lg transition-shadow"
      >
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">@{username}</p>
        <p className="text-sm text-gray-500 mt-[10px]">{email}</p>
      </Link>
    </>
  );
};

export default UserCard;
