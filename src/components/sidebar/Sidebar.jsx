import React from "react";
import "./Sidebar.css";
import SidebarHeader from "../sidebarHeader/SidebarHeader";
import SidebarSearch from "../sidebarSearch/SidebarSearch";
import SidebarContacts from "../sidebarContacts/SidebarContacts";

const Sidebar = (props) => {

  return (
    <div className="sidebar flexColStart">
      <SidebarHeader setDrawerProfile={props.setDrawerProfile} setDraweCommunities={props.setDraweCommunities} setDrawerNewChat={props.setDrawerNewChat} />
      <SidebarSearch isDrawer={false}  />
      <SidebarContacts/>
          </div>
  );
};

export default Sidebar;
