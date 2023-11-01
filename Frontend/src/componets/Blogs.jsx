import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../Blogs.css'
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
    <div className="blogsContainer">
      {newPost.map((e,i)=>{
        return <div className="indvBlog-cont">
          <h1 key={i}>{e.name}</h1>
          <Link to={`/browse/${e._id}`}><button id="moreButton">Read More</button></Link>
        </div>
      })}
    </div>
  );
}

export default PostBlog;
