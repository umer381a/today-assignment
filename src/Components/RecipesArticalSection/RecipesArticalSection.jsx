import React from "react"
import "./RecipesArticalSection.scss"
import Heading from "../Ultility/Heading.jsx"
import SmallArtical from "../Ultility/smallArtical.jsx";
import French from "./Images/FRENCH-PASTA.png"
import Italian from "./Images/ITALIAN-DESERTS.png"
import Japanese from "./Images/JAPANESE-FLAVORS.png"
import Keto from "./Images/KETO-KEBABS.png"
import Korean from "./Images/KOREAN-BBQ.png"
import Vegan from "./Images/VEGAN-MEALS.png"

const RecipesArticalSection = () => (
    <div>
        <Heading name="2 rows: 3 x 3" color="--orangeColor"/>
        <div className="recipes-artical-section">
        <section className="row">
        <SmallArtical img={French} category="French pasta" width="90px"/>
        <SmallArtical img={Italian} category="italian deserts" width="90px"/>
        <SmallArtical img={Japanese} category="japanese flavors" width="100px"/>
        </section>
        <section className="row">
        <SmallArtical img={Keto} category="japanese flavors" width="100px"/>
        <SmallArtical img={Korean} category="japanese flavors" width="100px"/>
        <SmallArtical img={Vegan} category="japanese flavors" width="100px"/>
        </section>
        </div>
    </div>
)

export default RecipesArticalSection