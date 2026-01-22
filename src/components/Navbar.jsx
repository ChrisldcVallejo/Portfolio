import React from 'react';

export const Navbar = ({ texts, language, setLanguage }) => {
  
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const flagUK = "https://flagcdn.com/w40/gb.png";
  const flagES = "https://flagcdn.com/w40/es.png";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <span className="text-primary-custom">&lt;</span> Christian V. <span className="text-primary-custom">/&gt;</span>
        </a>
        
        {/* === ZONA MÓVIL === */}
        <div className="d-flex align-items-center gap-3">
             {/* Botón Móvil: Solo la imagen de la bandera */}
             <button 
                className="btn btn-sm btn-outline-light border-0 d-lg-none p-0" 
                onClick={toggleLanguage}
                title="Cambiar idioma"
              >
                <img 
                  src={language === 'es' ? flagUK : flagES} 
                  alt="change language" 
                  style={{ width: '25px', marginTop: '-3px' }} 
                />
              </button>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
        </div>

        {/* === MENÚ DE ESCRITORIO === */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item"><a className="nav-link active" href="#hero">{texts.home}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{texts.projects}</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">{texts.about}</a></li>
            
            {/* Botón Desktop: Imagen + Texto */}
            <li className="nav-item d-none d-lg-block">
              <button 
                className="btn btn-sm btn-outline-light rounded-pill px-3 d-flex align-items-center gap-2"
                onClick={toggleLanguage}
              >
                <img 
                  src={language === 'es' ? flagUK : flagES} 
                  alt="idioma" 
                  style={{ width: '20px', height: '15px', objectFit: 'cover' }} 
                />
                <span>{language === 'es' ? 'English' : 'Español'}</span>
              </button>
            </li>

            <li className="nav-item"><a className="btn btn-primary-custom px-4" href="#contact">{texts.contact}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};