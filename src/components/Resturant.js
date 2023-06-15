
import React, { useState, useEffect } from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import "./style.css";
import Nav from './Nav';


function Restaurant() {
  const [menuData, setMenuData] = useState([]);

 

  const filterItem =(category)=>{
    if(category==="All Menu"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem)=>{ 
      return curElem.category=== category;
    });
    setMenuData(updatedList);
  };

  useEffect(() => {
    const fetchMenuData = () => {
      setMenuData(Menu);
    };
    fetchMenuData();
  }, []);

  return (
    <>
    <Nav filterItem={filterItem}  />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
