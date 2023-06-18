import React from "react";
import "./Profile.css";
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  return (
    <section className="profile flexColStart">
      <div className="profile-photo flexCenter fullWidth">
        <div className="profile-circle flexColCenter">
          <BsFillCameraFill size={24} />
          <span>
            add profile<br /> photo
          </span>
        </div>
      </div>
      <div className="profile-name flexColStart fullWidth ">
        <div className="yourName fullWidth">
          <span>Your name</span>
        </div>
        <div className="yourName1 flex_space fullWidth">
          <span className="secondaryText">MH</span>
          <MdEdit className="icon2" />
        </div>
      </div>
      <div className="profileNote">
        <span>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </span>
      </div>
      <div className="profile-about flexColStart fullWidth ">
        <div className="about fullWidth">
          <span>About</span>
        </div>
        <div className="about-edit flex_space fullWidth">
          <MdEdit className="icon2" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
