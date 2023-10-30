import React, { useEffect, useState } from "react";
import axios from "axios";

function NewBlog() {
  const [newPost, setNewPost] = useState({
    name: "",
    restaurant: "",
    description: "",
    review: ""

  });
  const inputsHandler = (e) => {
    setNewPost((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/posts/post-page", newPost)
      .then((res) => {
        console.log(res.data);
        setNewPost({
            name: "",
            restaurant: "",
            description: "",
            review: ""
        });
      });
  };
  

// useEffect(() => {}, []);
return(  
    <div className="formContainer">
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="blogName">Blog Name: </label>
                <input 
                type="text"
                name="name"
                placeHolder="blog name" 
                id="name"
                value={newPost.name}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="restaurantName">Restaurant Name: </label>
                <input 
                type="text"
                name="restaurant" 
                placeHolder="e.g; mcdonalds" 
                id="restaurant" 
                value={newPost.restaurant}
                onChange={inputsHandler}
                required />
            </div>
            <div>
            <label htmlFor="restaurantDescription">Restaurant Description</label>
                <textarea 
                name="description" 
                id="description" 
                placeHolder="this restaurant..." 
                value={newPost.description}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="finalReview">Final Review</label>
                <input
                type="text"
                name="review" 
                placeHolder="scale of 1-10 /10" 
                id="review" 
                value={newPost.review}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <button type="submit">Post</button>
            </div>
        </form>
    </div>   

);}

export default NewBlog;