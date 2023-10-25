import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PostBlog() {
  const [newPost, setNewPost] = useState([]);

  const DeleteBlog = (_id) => {
    axios
      .delete("http://localhost:3000/posts/delete-student/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/blogs")
      .then((res) => {
        setNewPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
        {newPost.map(post => {
            return (
                    <div>
                        <h2>{post.name}</h2>
                        <p>{post.restaurant}</p>
                        <p>{post.review}</p>
                        <Link to={`/browse`}>Read More</Link>
                    </div>
                )
        })}
    </div>
)};

export default PostBlog;
