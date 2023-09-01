import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: '#808080', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 border-end">
            <h4>Website</h4>
            <p>Desarrollado por Jorge Payares</p>
            <p>Objetivo de la Aplicación: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4 border-end">
            <h4>Síguenos</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="Facebook">
                    &#x1F4F7;
                  </span>{' '}
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="Twitter">
                    &#x1F426;
                  </span>{' '}
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="Instagram">
                    &#x1F3A4;
                  </span>{' '}
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Servicio al Cliente</h4>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
