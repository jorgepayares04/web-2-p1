import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const sportsData = [
  {
    image: 'https://s1.abcstatics.com/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg',
    title: 'Tennis',
    description: 'A one-on-one racket sport.',
    category: 'individual',
    teamLink: 'https://example.com/tennis',
  },
  
  {
    image: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/sakqwx7fry451nron6vr',
    title: 'Basketball',
    description: 'A fast-paced team sport.',
    category: 'team',
    teamLink: 'https://example.com/basketball',
  },
  
  {
    image: 'https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/crbela7xbocusesq8f8v.jpg',
    title: 'Baseball',
    description: 'A bat-and-ball game played between two teams.',
    category: 'team',
    teamLink: 'https://example.com/baseball',
  },
  {
    image: 'https://www.corbataslester.com/magazine/wp-content/uploads/2018/01/vacation-1284012_1280.jpg',
    title: 'Golf',
    description: 'A precision club-and-ball sport.',
    category: 'individual',
    teamLink: 'https://example.com/golf',
  },
  {
    image: 'https://cdn.britannica.com/83/126383-050-38B8BE25/Michael-Phelps-American-Milorad-Cavic-final-Serbia-2008.jpg',
    title: 'Swimming',
    description: 'Competitive swimming across various distances.',
    category: 'individual',
    teamLink: 'https://example.com/swimming',
  },
  {
    image: 'https://media.istockphoto.com/id/171247618/photo/volleyball-in-an-empty-gym.jpg?s=612x612&w=0&k=20&c=ZX9I6TZz1Quc-IgpJPydngD92AASlGWIsjmgvyf1VtI=',
    title: 'Volleyball',
    description: 'A team sport played with a ball over a net.',
    category: 'team',
    teamLink: 'https://example.com/volleyball',
  },
  {
    image: 'https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp',
    title: 'Cycling',
    description: 'Racing on bicycles for sport and recreation.',
    category: 'individual',
    teamLink: 'https://example.com/cycling',
  },
  {
    image: 'https://www.telegraph.co.uk/content/dam/boxing/2023/07/30/TELEMMGLPICT000344338167_16907341093380_trans_NvBQzQNjv4BqJgjx8wUNu9l2bcvNOSLeGMpsBhTXEKOnwBqorYLxOxg.jpeg',
    title: 'Boxing',
    description: 'A combat sport involving punching and defense.',
    category: 'individual',
    teamLink: 'https://example.com/boxing',
  },
  {
    image: 'https://st1.uvnimg.com/3c/a6/921400d0499cb2980b77c519307e/futbol-generic-entry-point.jpg',
    title: 'Soccer',
    description: 'The world\'s most popular sport.',
    category: 'team',
    teamLink: 'https://example.com/soccer',
  },
 
];

const Content = () => {
  const [sports, setSports] = useState(sportsData);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Content</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <select className="form-select" onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">All</option>
            <option value="team">Team Sports</option>
            <option value="individual">Individual Sports</option>
          </select>
        </div>
      </div>
      <div className="row">
        {sports
          .filter((sport) => selectedCategory === 'all' || sport.category === selectedCategory)
          .map((sport, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={sport.image} />
                <Card.Body>
                  <Card.Title>{sport.title}</Card.Title>
                  <Card.Text>{sport.description}</Card.Text>
                  <Button variant="primary" href={sport.teamLink} target="_blank">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
