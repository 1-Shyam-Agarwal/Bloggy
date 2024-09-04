import React from "react";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import {Route , Routes} from 'react-router-dom';
import './App.css';


function App() {
  
    return (
      <div className="universal-wrapper">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/tags/:TAG" element={<BlogPage/>}></Route>
          <Route path="/categories/:CATEGORY" element={<BlogPage/>}></Route>
          <Route path="*" element={<div>ERROR 404</div>}></Route>
        </Routes>
      </div>
      
    );
}

export default App;
