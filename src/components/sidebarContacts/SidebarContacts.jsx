import React from "react";
import "./SidebarContacts.css";
import dummyData from "./../../dummyData/dummyData";
import { BsPersonCircle, BsChevronDown, BsCheck2All } from "react-icons/bs";

const SidebarContacts = (props) => {
  return (
    <div className="sidebarContacts flexColStart">
      {dummyData.map((item, i) => {
        return (
          <div className="sidebarContacts-box fullWidth flexCenter">
            <div className="contactPhoto flexCenter">
            <BsPersonCircle  size={48} color="#54656f"/>
            </div>
            <div className="sidebarContacts-contactName flexColStart">

              <div className="contactName flex_space fullWidth">
                <span className="primaryText">{item.name}</span>
            {!props.isDrawer&& <span className="secondaryText">Yesterday</span>}
              </div>

              {!props.isDrawer&&  <div className="messageText flexStart fullWidth">
                <BsCheck2All size={18} color="blue" />
                <span className="secondaryText lastMsg">{item.lastMsg}</span>
                <span className="secondaryText BsChevronDown">
                  <BsChevronDown size={20} />
                </span>
              </div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContacts;
