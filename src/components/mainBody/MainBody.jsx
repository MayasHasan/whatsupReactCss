import React from "react";
import "./MainBody.css";
const MainBody = () => {
  return (
    <section className="MainBody fullWidth">
      <div className="flexStart person">
        <span className="message">
          <span className="c"></span>
          Hi
        </span>
      </div>
      <div className="flexEnd person">
        <span className="yourMessage">
          <span className="y"></span>
          How are you ?
        </span>
      </div>
    </section>
  );
};

export default MainBody;
