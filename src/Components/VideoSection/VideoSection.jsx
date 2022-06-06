import React from "react";
import "./VideoSection.scss";
import Heading from "../Ultility/Heading.jsx";
import Vidoe1 from "./Images/VIDEO1.png";
import Vidoe2 from "./Images/VIDEO2.png";
import Vidoe3 from "./Images/VIDEO3.png";
import Categore from "../Ultility/Category.jsx"
import Blog from "../Ultility/Blog.jsx"

const VideoSection = () => (
  <div>
    <Heading name="1 row: 3 video" color="--pinkColor" />
    <div className="video-section">
      <section>
        <img src={Vidoe1} alt="" />
        <Categore name="eat" width="30px"/>
        <Blog  name="U.R .Olive" width="300px"/>
      </section>
      <section>
        <img src={Vidoe2} alt="" />
        <Categore name="eat" width="30px"/>
        <Blog  name="U.R .Olive" width="300px"/>
      </section>
      <section>
        <img src={Vidoe3} alt="" />
        <Categore name="eat" width="30px"/>
        <Blog name="U.R .Olive" width="300px"/>
      </section>
    </div>
  </div>
);

export default VideoSection;
