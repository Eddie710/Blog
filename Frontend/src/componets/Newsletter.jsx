import React, { useEffect, useState } from "react";
import axios from "axios";

function NewLetter() {
  const [newsForm, setNewsForm] = useState({
    name: "",
    email: "",

  });

  const inputsHandler = (e) => {
    setNewsForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/create-post", newsForm)
      .then((res) => {
        console.log(res.data);
        setNewsForm({
          name: "",
          email: "",

        });
      });
  };


  useEffect(() => { }, []);
  return (

    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeHolder="name" 
              id="name"
              value={newsForm.name}
              onChange={inputsHandler}
            />
          </div>


          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeHolder="email@email.com" 
              id="email"
              value={newsForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default NewLetter;