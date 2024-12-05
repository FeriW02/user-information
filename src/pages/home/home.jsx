import React, { useEffect, useState } from "react";
import { getAllUser } from "../../services/user-services";
import UserCard from "../../components/usercard/userCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
        {users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
