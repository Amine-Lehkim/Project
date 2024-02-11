import React from 'react';

const Favorites = ({ favorites }) => {
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
                <p className="card-text">Publisher: {game.publisher || 'N/A'}</p>
                <div className="tags">
                  {game.tags && Array.isArray(game.tags)
                    ? game.tags
                        .filter((tag) => tag.language === 'eng')
                        .slice(0, 3)
                        .map((tag) => (
                          <span key={tag.id} className="badge rounded-pill bg-secondary me-2">
                            {tag.name}
                          </span>
                        ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
