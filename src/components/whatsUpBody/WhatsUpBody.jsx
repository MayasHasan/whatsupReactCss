import React, { useState } from "react";
import "./WhatsUpBody.css";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import SidebarDrawerProfile from "../sidebarDrawer/SidebarDrawerProfile";
import DrawerRight from "../drawerRight/DrawerRight";
import SideBarNewChat from './../sidebarDrawer/sideBarNewChat';
import SidebarDraweCommunities from './../sidebarDrawer/sidebarDraweCommunities';

const WhatsUpBody = () => {
  const [drawerProfile, setDrawerProfile] = useState(false);
  const [draweCommunities, setDraweCommunities] = useState(false);
  const [drawerNewChat,setDrawerNewChat] = useState(false);
  const [drawerRight, setDrawerRight] = useState(false);

  const styles = {
    drawerProfile:{
      transform: drawerProfile && "scaleX(1)",
    },
    draweCommunities:{
      transform: draweCommunities && "scaleX(1)",
    }
    , drawerNewChat:{
      transform: drawerNewChat && "scaleX(1)",
    }
    ,
    RightDrawer :{
      minWidth: drawerRight && "30%",
    }
  };

  return (
    <div className="whatsUp-body flex">
       <Sidebar setDrawerProfile={setDrawerProfile} setDraweCommunities={setDraweCommunities} setDrawerNewChat={setDrawerNewChat} /> 
      <Main setDrawerRight={setDrawerRight} />

      <div className="drawer" style={styles.drawerProfile}>
    {drawerProfile&&<SidebarDrawerProfile setDrawerOpened={setDrawerProfile}/>}
      </div>

      <div className="drawer" style={styles.draweCommunities}>
    {draweCommunities&&<SidebarDraweCommunities setDrawerOpened={setDraweCommunities}/>}
      </div>

      <div className="drawer" style={styles.drawerNewChat}>
    {drawerNewChat&&<SideBarNewChat setDrawerOpened={setDrawerNewChat}/>}
      </div>

   <div className="drawerRight-body" style={styles.RightDrawer}>
    {drawerRight&& <DrawerRight setDrawerRight={setDrawerRight} /> }
</div> 

    </div>
  );
};

export default WhatsUpBody;
