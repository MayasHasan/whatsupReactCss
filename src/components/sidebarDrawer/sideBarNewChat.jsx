import React from 'react';
import SidebarDrawerHeader from './sidebarDrawerHeader/SidebarDrawerHeader';
import NewChat from './../newChat/NewChat';

const SideBarNewChat = (props) => {
    return (
        <section className='sidebarDrawer' >
        <SidebarDrawerHeader setDrawerOpened={props.setDrawerOpened} title= "New Chat"  />
        <NewChat/>
      </section>
    );
}

export default SideBarNewChat;
