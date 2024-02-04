import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites && favorites.length > 0 ? (
        <ul>
          {favorites.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite games yet.</p>
      )}
    </div>
  );
};

export default Favorites;
