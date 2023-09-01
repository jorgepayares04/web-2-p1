import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Overview = () => {
  const [cards, setCards] = useState([
    {
      image: 'https://play-lh.googleusercontent.com/Zmt89MZVKaEweDTWMdlJ24A2g5oF-OaHkIrK-LReaLw9HgZnRWFPeleXK73HtOkjJIk',
      title: 'Add your organization',
      description: 'This card is about organization.',
    },
    {
      image: 'https://img.freepik.com/fotos-premium/alguien-acaba-convertirse-socio-fotografia-empresarios-reunidos-sala-juntas_590464-21484.jpg?w=2000',
      title: 'Becoming a partner',
      description: 'Learn about becoming a partner.',
    },
    {
      image: 'https://images.vexels.com/media/users/3/152347/isolated/lists/27304b9b14ce9bd8a28ca637ed92070e-icono-de-signo-de-interrogacion-de-circulo-azul.png',
      title: 'Where the data comes from',
      description: 'Discover the source of the data.',
    },
    {
      image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Glossary.png',
      title: 'Glossary & definitions',
      description: 'Explore the glossary and definitions.',
    },
  ]);

  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (card) => {
    if (favorites.includes(card)) {
      // Si la tarjeta ya está en favoritos, la quitamos
      const updatedFavorites = favorites.filter((fav) => fav !== card);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Si la tarjeta no está en favoritos, la agregamos
      const updatedFavorites = [...favorites, card];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleResetFavorites = () => {
    setFavorites([]); // Limpiar el estado de favoritos
    localStorage.removeItem('favorites'); // Eliminar los favoritos del local storage
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Overview</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className={`col-md-3 mb-4 ${favorites.includes(card) ? 'card-favorite' : ''}`}>
            <Card>
              <Card.Img className="card-image" variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToFavorites(card)}>
                  <FontAwesomeIcon icon={faStar} /> {favorites.includes(card) ? 'Remove from Favorites' : 'Add to Favorites'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <h3 className="mt-4">Favorites</h3>
      <div>
        {favorites.map((favorite, index) => (
          <div key={index} className="mb-2">
            {favorite.title}
          </div>
        ))}
        <Button variant="danger" onClick={handleResetFavorites}>
          Reset Favorites
        </Button>
      </div>
    </div>
  );
};

export default Overview;