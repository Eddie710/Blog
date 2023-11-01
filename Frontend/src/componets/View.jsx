//View.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './View.css'
function ViewBlog() {
    const [post, setPost] = useState([]);
    const { postId } = useParams();
    console.log(`http://localhost:3000/posts/browse/${postId}`)       

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/browse/${postId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPost(await data.data[0]);
              
            } catch (error) {
                ///console.error(error);
            }
        };

        fetchData()
    }, []);

    if(!post){
        return 'Loading'
    }
    console.log(post)
    return (
        <>
            <div className="PostContainer">
                <a href="/posted-blogs"><button id="moreButton">Go Back</button></a>
                <div className="PostContainerB">
                    <img 
                    src={post.imageURL}
                    alt="images" width="400px" height="400px" id="postImg" />
                    <h1>{post.name}</h1>
                    <h2>{post.restaurant}</h2>
                    <p>{post.description}</p>
                    <b>{post.review}</b>
                </div>
            </div>
        </>
    );
}

export default ViewBlog;
