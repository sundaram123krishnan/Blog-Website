import React from "react";
import Blog from "./Blog";
import axios from "axios";


const URL = "http://localhost:5000/blogs";

async function fetchHandler() {
  return await axios.get(URL).then((res) => res.data);
} 



export default function Content() {


  const [blogs,setBlogs] = React.useState([]);
  React.useEffect(()=>{
    fetchHandler().then((data) => setBlogs(data));
  },[]);


  const data = blogs.blogs?.map((value)=>{
    return (
      <Blog content={value.content}/>
    )
  })
  return <div className="grid grid-cols-7 p-3 gap-4">{data}</div>;
}
