import React from 'react';
import SidebarDrawerHeader from './sidebarDrawerHeader/SidebarDrawerHeader';
import Profile from '../profile/Profile';


const SidebarDrawerProfile = (props) => {
    return (
        <section className='sidebarDrawer'>
          <SidebarDrawerHeader setDrawerOpened={props.setDrawerOpened} title= "Profile" />
          <Profile/>
        </section>
    );
}

export default SidebarDrawerProfile;
