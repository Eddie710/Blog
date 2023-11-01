import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../Blogs.css'
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
    <div className="blogsContainer">
      {newPost.map((e,i)=>{
        return <div className="indvBlog-cont">
          <h1 key={i}>{e.name}</h1>
          <h5><b>By:</b> *username will go here</h5>
          <Link to={`/browse/${e._id}`}><button id="moreButton">Read More</button></Link>
        </div>
      })}
    </div>
  );
}

export default PostBlog;