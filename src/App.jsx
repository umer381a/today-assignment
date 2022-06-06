import React from "react";
import "./App.scss";

import ArticalSection from "./Components/ArticalSection/ArticalSection.jsx";
import AuthorSection from "./Components/AuthorSection/AuthorSection.jsx";
import BigArticalSection from "./Components/BigArticalSection/BigArticalSection.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import NavBar from "./Components/NavBarSection/NavBar.jsx";
import ProfileSection from "./Components/ProfileSection/ProfileSection.jsx";
import RecipesArticalSection from "./Components/RecipesArticalSection/RecipesArticalSection.jsx";
import ReviewArticalSection from "./Components/ReviewArticalSection/ReviewArticalSection.jsx";
import StoryArticalSection from "./Components/StoryArticalSection/StoryArticalSection.jsx";
import TravelArticalSection from "./Components/TravelArticalSection/TravelArticalSection.jsx";
import VideoSection from "./Components/VideoSection/VideoSection.jsx";
import FooterSection from "./Components/FooterSection/FooterSection.jsx";

const App = () => (
  <div className="container">
    <NavBar />
    <HeroSection />
    <ProfileSection />
    <ArticalSection />
    <AuthorSection />
    <BigArticalSection />
    <TravelArticalSection/>
    <StoryArticalSection/>
    <ReviewArticalSection />
    <RecipesArticalSection/>
    <VideoSection/>
    <FooterSection />
  </div>
);

export default App;
