import React from "react";

const PostPage = () => (
  <>

    <h1>Upload a Blog</h1>    
    <div className="formContainer">
        <form>
            <div>
                <label htmlFor="blogName">Blog Name: </label>
                <input type="text" name="blogName" id="blogName" required />
            </div>
            <div>
                <label htmlFor="restaurantName">Restaurant Name: </label>
                <input type="text" name="restaurantName" id="restaurantName" required />
            </div>
            <div>
                <label htmlFor="uploadPicture">Upload a Picture:</label>
                <input type="file" id="uploadPicture" name="uploadPicture" />
            </div>
            <div>
                <label htmlFor="restaurantDescription">Restaurant Description</label>
                <textarea name="restaurantDescription" id="restaurantDescription" required ></textarea>
            </div>
            <div>
                <label htmlFor="finalReview">Final Review</label>
                <input type="text" name="finalReview" id="finalReview" required />
            </div>
            <div>
                <button type="submit">Post</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </div>

  </>
);
export default PostPage;