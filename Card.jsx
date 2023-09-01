import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ sport, onAddToFavorites }) => {
  return (
    <div className="card" style={{ width: '200px', height: '300px' }}>
      <img src={sport.image} className="card-img-top" alt={sport.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{sport.title}</h5>
        <p className="card-text">{sport.description}</p>
        <button onClick={() => onAddToFavorites(sport)} className="btn btn-primary">
          <FontAwesomeIcon icon={faStar} /> Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default Card;
