import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
<<<<<<< HEAD
import GameCards from './Comp/GameCards';
import GameDetails from './Comp/GameDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './weblines/footer'
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

  return (<div className='everything'>
    <Router>
      <div className="container mt-3">
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
              
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<GameCards selectedGenre={selectedGenre} searchTerm={searchTerm} />}
          />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
};
=======
import DetailsPage from './detailPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState({
    search: '',
    year: '',
    type: '',
  });

  const [inputSearch, setInputSearch] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleImageClick = (id) => {
    setSelectedMovieId(id);
  };

  const handleClick = () => {
    fetch(`https://www.omdbapi.com/?apikey=4d94a812&s=${data.search}&y=${data.year}&type=${data.type}`)
      .then(resp => resp.json())
      .then(resp => setInputSearch(resp.Search || []));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="row container mt-3">
              <form>
                <div className=" col-3 form-group">
                  <input
                    className="form-control"
                    name="search"
                    value={data.search}
                    onChange={handleChange}
                    placeholder="Search..."
                  />
                </div>
                <div className="col-3 form-group">
                  <input
                    className="form-control"
                    name="year"
                    value={data.year}
                    onChange={handleChange}
                    placeholder="Year"
                  />
                </div>
                <div className="col-3 form-group">
                  <select
                    className="form-control"
                    name="type"
                    onChange={handleChange}
                  >
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                  </select>
                </div>
                <button 
                  type="button"
                  className=" col-3 btn btn-primary"
                  onClick={handleClick}
                >
                  Search
                </button>
              </form>

              {inputSearch && inputSearch.map(item => (
                <div key={item.imdbID} className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Year}</p>
                    <Link
                      to="/details"
                      state={{ selectedMovieId: item.imdbID }}
                    >
                      <img
                        src={item.Poster}
                        alt={item.Title}
                        className="img-fluid"
                        onClick={() => handleImageClick(item.imdbID)}
                      />
                    </Link>
                    <p className="card-text">{item.Type}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        />
        <Route
          path="/details"
          element={<DetailsPage selectedMovieId={selectedMovieId} />}
        />
      </Routes>
    </Router>
  );

}

>>>>>>> origin/main
export default App;
