import React from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const uniqueList=[
    ...new Set(
    Menu.map((curElem)=>{
    return curElem.category;
})
)]

console.log(uniqueList)

const Resturant = () => {
    const [menuData,setMenuData]=React.useState(Menu);
   
    const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
        return curElem.category ===category; 
    });
    setMenuData(updatedList);
    };
  return (
   <>
   
    <MenuCard menuData={menuData}/>
  </>
  );
};

export default Resturant