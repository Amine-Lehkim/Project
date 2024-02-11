import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCards = ({ selectedGenre, searchTerm, onFavoritesChange }) => {
  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const fetchGames = async () => {
      try {
        let apiUrl = 'https://api.rawg.io/api/games?key=88de0b77186a41b7960ab1e61efd24da&page_size=200';
        if (selectedGenre) {
          apiUrl += `&genres=${selectedGenre}`;
        }

        if (searchTerm) {
          apiUrl += `&search=${searchTerm}`;
        }

        const response = await axios.get(apiUrl);
        setGames(response.data.results);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, [selectedGenre, searchTerm]);

  const handleTagClick = (tag) => {
    console.log(`Clicked tag: ${tag.name}`);
  };

  const handleFavoriteClick = (game) => {
    const isFavorite = favorites.some((fav) => fav.id === game.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== game.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      onFavoritesChange(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, game];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      onFavoritesChange(updatedFavorites);
    }
  };

  return (
    <div>
      <h1>Video Game Cards</h1>
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={game.background_image}
                className="card-img-top"
                alt={game.name}
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <div className="tags">
                  {game.tags && Array.isArray(game.tags)
                    ? game.tags
                        .filter((tag) => tag.language === 'eng')
                        .slice(0, 3)
                        .map((tag) => (
                          <span key={tag.id} className="badge rounded-pill bg-secondary me-2" onClick={() => handleTagClick(tag)}>
                            {tag.name}
                          </span>
                        ))
                    : null}
                </div>
                <div className="d-flex align-items-center">
                  <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
                    <button className="btn btn-secondary rounded-pill m-2">
                      View Details
                    </button>
                  </Link>
                  <div
                    className={`heart-icon ${favorites.some((fav) => fav.id === game.id) ? 'active' : ''}`}
                    onClick={() => handleFavoriteClick(game)}
                  >
                    ❤️
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCards;
