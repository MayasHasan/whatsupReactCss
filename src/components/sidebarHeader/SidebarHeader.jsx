import React,{useState} from "react";
import "./SidebarHeader.css";
import { BsPersonCircle } from "react-icons/bs";
import {
  MdGroups,
  MdDonutLarge,
  MdOutlineMoreVert,
  MdMessage,
} from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";

const SidebarHeader = (props) => {
const[menu ,setMenu] =useState(false)
const getMenuStyle = () => {
  return {
    transform: menu && "scale(1)",
    };
};
  return (
    <div className="sidebar-header flex_space ">
      <BsPersonCircle className="icon"  onClick={()=>props.setDrawerProfile(true)}/>
      <div className="sidebarHeader-Icons flexCenter">
        <span > <MdGroups className="icon-cursor" size={28}  onClick={()=>props.setDraweCommunities(true)}/> </span>
        <span> <MdDonutLarge className="icon-cursor" size={24}  /> </span>
        <span><MdMessage className="icon-cursor" size={24} onClick={()=>props.setDrawerNewChat(true)}/></span>
        <div className="sidebar-Menu">
        <span  className={menu &&"menuActive"} onClick={()=>setMenu(!menu)}>
          <MdOutlineMoreVert className="icon-cursor" size={24}  /></span>
          <OutsideClickHandler onOutsideClick={() => setMenu(false)}>

        <div className="menu-list" style={getMenuStyle()} >
      <ul>
          <li className="list-Item" ><div className="flex secondaryText " >New group</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">New community</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Starred message</div></li>
             <li className="list-Item" ><div className="flex secondaryText">Select chats</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Settings</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Log out</div></li>
        </ul>
        </div>
        </OutsideClickHandler> 
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;

