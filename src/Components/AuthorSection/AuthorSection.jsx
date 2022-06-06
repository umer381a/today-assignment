import React from "react";
import Heading from "../Ultility/Heading.jsx";
import "./AuthorSection.scss";
import Author from "../Ultility/Author.jsx";
import LilLarry from "./Images/Lil-Larray.png"
import LubnaHamdan from "./Images/Lubna-Hamdan.png"
import OmarMukhtar from "./Images/Omar-Mukhtar.png"
import ShawnJhon from "./Images/Shawn-Jhon.png"


const AuthorSection = () => (
  <div>
    <Heading name="1 row: 4 with bg" color="--greenColor" />
    <div className="author-section">
      <Author img={OmarMukhtar}/>
      <Author img={LilLarry}/>
      <Author img={LubnaHamdan}/>
      <Author img={ShawnJhon}/>
    </div>
  </div>
);

export default AuthorSection;
