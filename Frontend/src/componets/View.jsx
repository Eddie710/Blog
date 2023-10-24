import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewBlog(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        try {
            axios
                .get("http://localhost:3000/posts/browse/" + post._id)
                .then(res => {
                    setPost(res.data)
                    console.log(post)
                })

        }
        catch(err) {
            console.error(err);
        }
    }, [])

    return(
        <div>
            hello
        </div>
    )

}


export default ViewBlog