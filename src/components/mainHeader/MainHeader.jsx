import React,{useState} from 'react';
import './MainHeader.css';
import { BsPersonCircle, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";

const MainHeader = (props) => {
  const[menu ,setMenu] =useState(false)
  const getMenuStyle = () => {
    return {
      transform: menu && "scale(1)",
      };
  };
    return (
<header className="mainHeader flex_space fullWidth ">
  <div className='mainHeader-left flexEnd'>
<BsPersonCircle className="icon" />
  <span >+961 81 973 551</span>
  </div>
<div className="mainHeader-right flex_space">
  <span onClick={()=>props.setDrawerRight(true)}> <BsSearch size={16} color="gray" /> </span>


         <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
  <span  className={"menuActive"} onClick={()=>setMenu(!menu)}>
         <BsThreeDotsVertical size={20} color="gray" /> 
        <div className="conversation-menu" style={getMenuStyle()} >
      <ul>
          <li className="list-Item" ><div className="flex secondaryText " >Contact info</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Select messages</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Close chat</div></li>
             <li className="list-Item" ><div className="flex secondaryText">Mute notifications</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Desappearing message</div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Clear messages </div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Delete chat </div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Report </div></li>
             <li className="list-Item" ><div className="flex secondaryText ">Block </div></li>


        </ul>
        </div> 
        </span>
        </OutsideClickHandler> 
  
</div>
</header>

    );
}

export default MainHeader;
