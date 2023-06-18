import React, { useState } from "react";
import "./SidebarSearch.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
const SidebarSearch = (props) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

return (
    <div
      className={`sidebar-search flexCenter ${
        focused && "sidebar-searchFocused"
      } `}
    >
      <div className="sidebar-searchContainer flex" style={{width:props.isDrawer &&"95%" }} >
        {props.isDrawer ? (
          !focused ? (
            <AiOutlineSearch className="searchIcon icon2" />
          
          ) : (
            <BsArrowLeftShort className="arrowIcon icon2" />
          )
        ) : !focused ? (
          <AiOutlineSearch className="searchIcon icon2" />
        ) : (
          <BsArrowLeftShort className="arrowIcon icon2" />
        )}
        <input
         autoFocus ={!props.isDrawer?false:true}
          type="text"
          placeholder={!props.isDrawer?(!focused && "Serach or start new chat" ):(!focused && "Serach contacts" )}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{padding:props.isDrawer &&"8px" }}
        />
      </div>
      {!props.isDrawer&& <MdFilterList className="icon2" />}
    </div>
  );
};

export default SidebarSearch;
