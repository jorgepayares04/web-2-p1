import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useSportContext } from './SportContext'; // Importar el contexto

const Create = () => {
  const history = useHistory();
  const { sportsData, setSportsData } = useSportContext(); // Obtener datos del contexto

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    category: 'team',
    teamLink: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSport = {
      ...formData,
    };

    const newErrors = {};

    if (!formData.title || formData.title.length < 3 || formData.title.length > 20) {
      newErrors.title = 'Title must be between 3 and 20 characters';
    }

    if (!formData.teamLink || formData.teamLink.length < 10 || formData.teamLink.length > 50) {
      newErrors.teamLink = 'Link must be between 10 and 50 characters';
    }

    if (!formData.image) {
      newErrors.image = 'Image is required';
    }

    if (!formData.title) {
      newErrors.title = 'Title is required';
    }

    if (!formData.teamLink) {
      newErrors.teamLink = 'Link is required';
    }

    if (Object.keys(newErrors).length === 0) {
      const updatedSportsData = [...sportsData, newSport]; // Actualizar los datos con el nuevo deporte
      setSportsData(updatedSportsData); // Actualizar el estado del contexto
      localStorage.setItem('sportsData', JSON.stringify(updatedSportsData)); // Guardar en local storage
      setShowSuccess(true);
      setTimeout(() => {
        history.push('/content');
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Sport</h2>
      {showSuccess && (
        <Alert variant="success">Sport created successfully! Redirecting to Content...</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            isInvalid={!!errors.image}
          />
          <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="team">Team Sports</option>
            <option value="individual">Individual Sports</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="teamLink">
          <Form.Label>Team Link</Form.Label>
          <Form.Control
            type="text"
            value={formData.teamLink}
            onChange={(e) => setFormData({ ...formData, teamLink: e.target.value })}
            isInvalid={!!errors.teamLink}
          />
          <Form.Control.Feedback type="invalid">{errors.teamLink}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Sport
        </Button>
      </Form>
    </div>
  );
};

export default Create;
