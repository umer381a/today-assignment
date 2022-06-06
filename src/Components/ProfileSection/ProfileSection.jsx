import React from "react";
import Heading from "../Ultility/Heading.jsx";
import Profile from "../Ultility/profile.jsx";
import ProfileImage from "./Images/Ellipse1.png"
import ProfileImage1 from "./Images/Ellipse2.png"
import ProfileImage2 from "./Images/Ellipse3.png"
import ProfileImage3 from "./Images/Ellipse4.png"
import ProfileImage4 from "./Images/Ellipse5.png"
import "./ProfileSection.scss";

const ProfileSection = () => (
  <div>
    <Heading name="1 row: 5 circles with bg" color="--goldenColor"/>
    <div className="profile-section">
      <Profile img={ProfileImage}/>
      <Profile img={ProfileImage1}/>
      <Profile img={ProfileImage2}/>
      <Profile img={ProfileImage3}/>
      <Profile img={ProfileImage4}/>
    </div>
  </div>
);

export default ProfileSection;
