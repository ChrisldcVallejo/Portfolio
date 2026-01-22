export const About = ({ texts }) => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="fw-bold text-white mb-3">
              <span className="text-primary-custom">/</span> {texts.title}
            </h2>
            <h4 className="text-secondary mb-4">{texts.subtitle}</h4>
            <p className="text-white-50 lead mb-4">
              {texts.description1}
            </p>
            <p className="text-white-50">
              {texts.description2}
            </p>
          </div>

          {/* COLUMNA DERECHA: SKILLS */}
          <div className="col-lg-5 offset-lg-1">
            <div className="p-4 rounded-4 bg-darker border border-secondary border-opacity-25">
              <h4 className="text-white mb-4">{texts.skillsTitle}</h4>
              <div className="d-flex flex-wrap gap-2">
                {texts.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};