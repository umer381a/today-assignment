import React from "react";
import "../ProfileSection/ProfileSection.scss"

const Heading = ({name , color}) => (
  <div>
    <hr />
    <h2 style={{color : `var(${color})`}} className="profile-heading">{name}</h2>
    <hr />
  </div>
);

export default Heading;
