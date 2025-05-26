import React from "react";
import "./Header.css";
import HeroImg from "/src//assets/Hero.jpg";

const Header = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("explore-menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <img src={HeroImg} alt="hero" className="header-bg" loading="lazy" />

      <div className="header-contents">
        <h2>Driving Smart & Responsible Marine Solutions</h2>
        <p>
          Fathom Marine Consultants delivers cutting-edge maritime technology
          and consultancy, trusted globally across Canada, Singapore, Europe,
          the UK, and India. We combine innovation, sustainability, and safety
          to empower mariners through next-generation tech platforms.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
