import React from "react";
import "./FooterSection.scss";

const FooterSection = () => (
  <div>
    <hr />
    <div className="footer-section">
      <section>
        <ul>
          <li>
            <a href="/news">NEWS</a>
          </li>
          <li>
            <a href="/feature-news">Feature news</a>
          </li>
          <li>
            <a href="/latest-news">Latest news</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <a href="/life">LIFE</a>
          </li>
          <li>
            <a href="/latest-news">Latest news</a>
          </li>
          <li>
            <a href="/dining">Dining</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="/art-culture">Art&Culture</a>
          </li>
          <li>
            <a href="/travel">Travel</a>
          </li>
          <li>
            <a href="/motoring">Motoring</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <a href="/business">BUSINESS</a>
          </li>
          <li>
            <a href="/What">What does that even mean?</a>
          </li>
          <li>
            <a href="/Homegrown">Homegrown</a>
          </li>
          <li>
            <a href="/How">How do I...</a>
          </li>
          <li>
            <a href="/Bag-off">Bag off</a>
          </li>
          <li>
            <a href="/Where">Where to spend it</a>
          </li>
        </ul>
      </section>
      <section className="footer-form">
        <ul>
          <li>
            <a href="/Subscribe">SUBSCRIBE</a>
          </li>
          <li>
            <a href="/Get-updates">
              Get fresh updates about the fashion, beauty, trends
            </a>
          </li>
          <li>
            <input type="text" placeholder="Enter your Email" />
          </li>
        </ul>
      </section>
    </div>
    <div className="end-footer">
      <ul>
        <li>
          <a href="/magazine">Magazine</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
          <a href="/press">press</a>
          <a href="/sitemap">sitemap</a>
          <a href="/tscs">ts+cs</a>
        </li>
      </ul>
    </div>
  </div>
);

export default FooterSection;
