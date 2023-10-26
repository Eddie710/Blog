import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewBlog() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/browse/${postId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPost(data);
              
            } catch (error) {
                console.error(error);
            }
        };

        fetchData()
    }, []);
    console.log(post)
    if(!post){
        return null
    }
    return (
        <div>
            
            <h1>{post.data.name}</h1>
            
            
        </div>
    );
}

export default ViewBlog;
