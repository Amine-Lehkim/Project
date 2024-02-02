// GameCards.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'

const GameCards = ({ selectedGenre, searchTerm }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
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
                        .slice(0, 7) 
                        .map((tag) => (
                          <span key={tag.id} className="badge rounded-pill bg-secondary me-2" onClick={() => handleTagClick(tag)}>
                            {tag.name}
                          </span>
                        ))
                    : null}
                </div>
                <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary rounded-pill m-2">
                    View Details
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCards;

