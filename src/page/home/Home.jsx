import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "http://94.74.86.174:8080/api/checklist",
        config
      );
      console.log(response)
      setData(response.data.data);
    } catch (error) {
      console.log("error " + error);
    }
  };

  const handleDelete= async(id)=>{
try {
    const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const response =await axios.delete(`http://94.74.86.174:8080/api/checklist/${id}`,config)
} catch (error) {
    
}
  }

  return <div>
    <h1>home</h1>
    {data.map((value)=>(
        <p>{value.name} <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(value.id)}>delete</button><button>edit</button></p>
    ))}
    <Link to={'/create'}>create</Link>
  </div>;
};

export default Home;
