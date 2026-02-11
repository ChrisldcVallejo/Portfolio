import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { projects } from './data/projects';
import { translations } from './data/translations';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
  // Estado para el idioma: por defecto 'es' (español)
  const [language, setLanguage] = useState('es');

  // Seleccionamos los textos según el idioma actual
  const t = translations[language];

  return (
    <>

      <Navbar texts={t.navbar} language={language} setLanguage={setLanguage} />
      
      <main>
 
        <Hero texts={t.hero} />
        
        <section id="projects" className="py-5 bg-darker">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-white">
                  <span className="text-primary-custom">{t.projectsSection.title}</span> {t.projectsSection.subtitle}
              </h2>
              <p className="text-white-50">{t.projectsSection.description}</p>
            </div>

            <div className="row g-4">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description[language]} 
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        <About texts={t.about} />

        <Contact texts={t.contact} />

      </main>

      <footer className="py-4 text-center border-top border-secondary text-white-50 mt-5">
        <small>&copy; 2026 Christian Vallejo. {t.footer}</small>
      </footer>
    </>
  )
}

export default App