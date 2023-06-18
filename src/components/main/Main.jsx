import React from 'react';
import './Main.css';
import MainHeader from '../mainHeader/MainHeader';
import MainBody from '../mainBody/MainBody';
import MainFooter from '../mainFooter/MainFooter';

const Main = (props) => {
    return (
        <div className='main flexColStart'>
          <MainHeader setDrawerRight={props.setDrawerRight}/>
          <MainBody/>
          <MainFooter/>
        </div>
    );
}

export default Main;
