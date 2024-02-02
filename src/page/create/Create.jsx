import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
const navigate=useNavigate()

  const [item, setItem] = useState({
    name:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://94.74.86.174:8080/api/checklist",
        item,
        config
      );
      console.log(response);
      navigate('/home')
    } catch (error) {
      console.log("error " + error);
    }
  };
  return (
    <>
      <h1>create</h1>
      <input type="text" name="name" onChange={handleChange} />
      <button onClick={handleSubmit}>create</button>
    </>
  );
};

export default Create;
