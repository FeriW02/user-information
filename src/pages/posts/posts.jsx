import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(id)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex justify-center items-center bg-[#e8f5e9] cursor-pointer  py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#2e7d32] mb-4">Posts</h1>
        <div className="space-y-4 max-h-96 overflow-y-auto custom-scroll">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
