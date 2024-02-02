import React from 'react';
import { Link } from 'react-router-dom';
import './Comp.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/friends" className="sidebar-item">Friends</Link>
      <Link to="/favorites" className="sidebar-item">Favorite Games</Link>
      <Link to="/wishlist" className="sidebar-item">Wishlist</Link>
      <Link to="/reviews" className="sidebar-item">Reviewed Games</Link>
    </div>
  );
};

export default Sidebar;
