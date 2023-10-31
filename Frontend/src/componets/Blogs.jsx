import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostBlog() {
  const [newPost, setNewPost] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/blogs")
      .then((res) => {
        setNewPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

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
