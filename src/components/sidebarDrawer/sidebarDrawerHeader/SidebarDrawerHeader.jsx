import React from "react";
import "./SidebarDrawerHeader.css";
import { FiArrowLeft } from "react-icons/fi";
const SidebarDrawerHeader = (props) => {
  return (
    <header className="SidebarDrawerHeader flexColStart">
      <div className="SidebarDrawerHeader-title flex fullWidth ">
        <div className="SidebarDrawerHeader-Icon ">
          <FiArrowLeft size={24}  onClick={()=>props.setDrawerOpened(false)}/>
        </div>
        <div className="title">
          <h1>{props.title}</h1>
        </div>
      </div>
    </header>
  );
};

export default SidebarDrawerHeader;
