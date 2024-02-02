import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GameCards from './Comp/GameCards';
import GameDetails from './Comp/GameDetails';
import Login from './Comp/Login';
import Sidebar from './Comp/Sidebar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './weblines/footer';
import './App.css';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const genres = [
    'action',
    'adventure',
    'indie',
    'rpg',
    'strategy',
    'shooter',
    'arcade',
    'simulation',
    'sports',
    'racing',
    'puzzle',
    'casual',
    'board-games',
    'family',
    'educational',
    'fighting',
    'card',
  ];

  return (
    <div className='everything'>
      <Router>
        {/* Sidebar */}
        <Sidebar />

        <div className="container mt-3 content-container">
          <nav className="navbar navbar-expand-lg rounded-custom">
            <Link className="navbar-brand m-2" to="/">
              GameApp
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link m-2" to="/" onClick={() => handleGenreChange('')}>
                    All Games
                  </Link>
                </li>
                <li className="nav-item m-2">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {genres.map((genre) => (
                        <Dropdown.Item
                          key={genre}
                          onClick={() => handleGenreChange(genre)}
                        >
                          {genre.charAt(0).toUpperCase() + genre.slice(1)}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 ml-auto m-5">
                <div className="input-group">
                  <input
                    className="form-control m-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => handleSearch(e.target.value)}
                    value={searchTerm}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary text-black m-2"
                      type="button"
                      onClick={() => {
                        handleSearch('');
                        clearSearch();
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <Link className="btn btn-outline-primary m-2" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<GameCards selectedGenre={selectedGenre} searchTerm={searchTerm} />}
            />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
