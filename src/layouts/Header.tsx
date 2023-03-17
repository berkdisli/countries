import { useState } from "react";
import { Link } from "react-router-dom";

import { GiEarthAmerica } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";

import TopBar from "../components/navbar/TopBar";
import Menu from "../components/navbar/Menu";

const Header = () => {
  const [isMenuOpen, isSetMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="app">
        <TopBar isMenuOpen={isMenuOpen} isSetMenuOpen={isSetMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} />
      </div>
      <Link to="/" className="nav-link">
        <GiEarthAmerica className="icon" />
      </Link>
      <Link to="/favorites" className="nav-link">
        <AiFillHeart className="icon" />
      </Link>
      <div className="nav-link"></div>
    </nav>
  );
};

export default Header;
