import React from "react";
import "./NewChat.css";

import SidebarSearch from "../sidebarSearch/SidebarSearch";
import { MdGroup ,MdGroups } from "react-icons/md";
import SidebarContacts from "../sidebarContacts/SidebarContacts";
const NewChat = () => {
  return (
    <div className="newChat flexColCenter">
      <SidebarSearch isDrawer={true} />
   <div className="newChat-container fullWidth">
      <div className=" flexColStart fullWidth">

        <div className="newGroup flex fullWidth">
            <div className="newGroup-icon flexCenter">
          <span className="flexCenter">
            <MdGroup size={30} color="white" />
          </span>
            </div>
          <div className="newGroup-text flexCenter">
            <span>New group</span>
          </div>
        </div>
        <div className="newCommuinity newGroup flex fullWidth">
            <div className="newGroup-icon flexCenter">
          <span className="flexCenter">
            <MdGroups size={30} color="white" />
          </span>
            </div>
          <div className="newCommuinity-text newGroup-text flexCenter">
          <span> New commuinity</span>
          </div>
        </div>
        <div className="contacts fullWidth">
        Contacts on WhatsApp
        </div>
        <SidebarContacts isDrawer={true}/>
      </div>
    </div>
    </div>
  );
};

export default NewChat;
