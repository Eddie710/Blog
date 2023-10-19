import React, { useEffect, useState } from "react";
import axios from "axios";

function NewLetter() {
  const [NewsForm, setNewsForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/newsletter/NewSignup", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
      });
  };
}
