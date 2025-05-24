
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  // const { searchTerm, setSearchTerm } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">Fanthom Marine Web</Link>
      </div>
      {/* <div className="navbar-center">
        <input
          type="text"
          placeholder="Search marine life..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}
      <div className="navbar-right">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact  Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
