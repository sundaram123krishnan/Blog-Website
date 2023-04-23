import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Add from "./Add";
import Content from "./Content";

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <div className="flex justify-evenly p-5 bg-black text-white">
          <button>
            <NavLink to="/add">ADD</NavLink>
          </button>
          <button>
            <NavLink to="/blogs">BLOGS</NavLink>
          </button>
        </div>
      </div>
      <Routes>
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/blogs" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}
