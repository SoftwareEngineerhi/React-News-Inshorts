import React, { useState } from "react";
import './Sidebar.css';
export function Sidebar({setSelectedcate}){
    const[sidebaron,setsidebar]=useState(false);
    const categories = [
        'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
      ]
      function togglesidebar(){
        setsidebar(!sidebaron);
      }
      function handleCategory(cate){
        setSelectedcate(cate);
        setsidebar(false);
      }
    return(
        <>
        <h3 className="menus" onClick={togglesidebar}>
        <span >&#9776; Menu</span> {/* Hamburger icon */}
      </h3>
      <div className={`sidebar ${sidebaron ? 'open' : ''}`}>
        <p className="closed" onClick={togglesidebar}>X</p>
       <ul>
        {categories.map((cat)=>
        (<li key={cat} onClick={()=>handleCategory(cat)}>
            {cat.charAt(0).toUpperCase()+cat.slice(1)}
        </li>))}
       </ul>
        </div>
        </>
    )
}