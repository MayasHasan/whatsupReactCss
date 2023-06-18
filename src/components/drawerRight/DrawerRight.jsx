import React from 'react';
import "./DrawerRight.css";
import { MdClose } from "react-icons/md";
import SidebarSearch from './../sidebarSearch/SidebarSearch';
const DrawerRight = (props) => {
    return (
        <div className='drawerRight flexColStart fullWidth'>
          <header className="drawerRight-header flexCenter ">
            <div className='closeIcon' onClick={()=>props.setDrawerRight(false)}><MdClose size={24} color='#54656f'/></div>
            <div className='header-text'><h1>Search Messages</h1></div>
          </header>
          <div className='drawerRight-search fullWidth'>
            <SidebarSearch isDrawer={true}/>
          </div>
        </div>
    );
}

export default DrawerRight;
