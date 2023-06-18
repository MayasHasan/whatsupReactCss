import React from "react";
import "./Communities.css";
const Communities = () => {
  return (
    <section className="communities flexColCenter">
      <div className="communities-image">
        <img src="./images/communuites.PNG" alt="ss" />
        </div>
        <h1 >Introducing communities</h1>
        <p className="secondaryText">
          Easily organize your related groups and send announcements. Now, your
          communities, like neighborhoods or schools, can have their own space.
        </p>

        <button className="communities-btn"> Start a community</button>
 
      
    </section>
  );
};

export default Communities;
