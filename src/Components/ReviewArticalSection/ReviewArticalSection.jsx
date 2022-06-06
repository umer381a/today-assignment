import React from "react";
import "./ReviewArticalSection.scss"
import Heading from "../Ultility/Heading.jsx";
import Category from "../Ultility/Category.jsx";
import Blog from "../Ultility/Blog.jsx";
import Tea from "./Images/tea.png";
import Juse from "./Images/juse.png";
import Drink from "./Images/drink.png";
import Coffee from "./Images/coffee.png";


const ReviewArticalSection = () => (
  <div className="review-artical-section">
    <Heading name="1 row: 4 reviews" color="--greenColor" />
    <div className="review">
      <section className="tea-artical-seciton">
        <div>
          <img src={Tea} alt="tea" width="300px" />
          <Category name="eat" width="40px" />
          <Blog name="U. R. Olive" />
        </div>
      </section>
      <section className="juse-artical-section">
        <div>
          <img src={Juse} alt="dine" width="300px" />
          <Category name="eat" width="40px" />
          <Blog name="U. R. Olive" />
        </div>
      </section>
      <section className="drink-artical-section">
        <div>
          <img src={Drink} alt="sea" width="300px" />
          <Category name="eat" width="40px" />
          <Blog name="U. R. Olive" />
        </div>
      </section>
      <section className="coffee-artical-section">
        <div>
          <img src={Coffee} alt="sea" width="300px" />
          <Category name="eat" width="40px" />
          <Blog name="U. R. Olive" />
        </div>
      </section>
    </div>
  </div>
);

export default ReviewArticalSection;
