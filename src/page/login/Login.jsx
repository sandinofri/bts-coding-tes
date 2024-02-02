import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [bodyPayload, setBodyPayload] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

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

      const response = await axios.post(' http://94.74.86.174:8080/api/login',bodyPayload)
      console.log(response.data.data.token)
      const token =response.data.data.token
      localStorage.setItem("token",token)
      navigate("/home")
    } catch (error) {
      console.log("error "+error)
    }
  };

  return (
    <>
      <div className="login">
        <form action="" className="form-login" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="username">password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-between">
            <input type="submit" />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
