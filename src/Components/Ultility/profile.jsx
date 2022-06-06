import React from "react";
import Category from "./Category.jsx";
import "../ProfileSection/ProfileSection.scss"

const Profile = ({img}) => (
    <div className="profile">
    <img className="profile-image" src={img} alt="" />
    <Category name="Vladimir Putin" width="100px"/>
    <p>Meals on wheels best in the UAE</p>
    </div>
)

export default Profile