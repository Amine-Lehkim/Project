import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []); 

  return (
    <div>
      <h1>Favorites</h1>
      <div className="row">
        {favorites.map((game) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
