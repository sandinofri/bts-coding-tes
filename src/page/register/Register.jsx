import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [bodyPayload, setBodyPayload] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBodyPayload({
      ...bodyPayload,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(' http://94.74.86.174:8080/api/register',bodyPayload)
      console.log(response)
    } catch (error) {
      console.log("error "+error)
    }
  };

  return (
    <>
      <div className="register">
        <form action="" className="form-register " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="username">password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-between">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
