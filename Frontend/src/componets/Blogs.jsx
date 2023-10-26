import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostBlog() {
  const [newPost, setNewPost] = useState([]);
//   const { postId } = useParams().postId

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/blogs")
      .then((res) => {
        setNewPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Add an empty dependency array to run the effect only once

  // Find the selected post based on postId
//   const selectedPost = newPost.find((post) => post.id === postId);

  if (!newPost) {
    return <div>Post not found.</div>;
  } 
  console.log(newPost)

  return (
    <div>
      {newPost.map((e,i)=>{
        return <h1 key={i}>
            {e.name}
            <Link to={`/browse/${e._id}`}>Read More</Link> 
        </h1>
      })}
    </div>
  );
}

export default PostBlog;
