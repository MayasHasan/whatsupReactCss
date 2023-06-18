import React from 'react';
import SidebarDrawerHeader from './sidebarDrawerHeader/SidebarDrawerHeader';
import Communities from './../communities/Communities';

const SidebarDraweCommunities = (props) => {
    return (
        <section className='sidebarDrawer' >
        <SidebarDrawerHeader setDrawerOpened={props.setDrawerOpened}  title= "Communities"  />
        <Communities/>
      </section>
    );
}

export default SidebarDraweCommunities;
