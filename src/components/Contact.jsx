
export const Contact = ({ texts}) => {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">{texts.title}</h2>
          <p className="text-white-50">{texts.subtitle}</p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* EMAIL */}
          <div className="col-md-3 col-sm-6">
            <a href="mailto:christianldcvallejo@gmail.com" className="text-decoration-none">
              <div className="card contact-card h-100 border-0 text-center p-4">
                <i className="bi bi-envelope-fill display-4 text-primary-custom mb-3"></i>
                <h5 className="text-white">Email</h5>
                <p className="text-white-50 small">{texts.cards.email}</p>
              </div>
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="col-md-3 col-sm-6">
            <a href="https://www.linkedin.com/in/christian-lópez-del-castillo-vallejo-126933386" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="card contact-card h-100 border-0 text-center p-4">
                <i className="bi bi-linkedin display-4 text-primary-custom mb-3"></i>
                <h5 className="text-white">LinkedIn</h5>
                <p className="text-white-50 small">{texts.cards.linkedin}</p>
              </div>
            </a>
          </div>

          {/* GITHUB */}
          <div className="col-md-3 col-sm-6">
            <a href="https://github.com/ChrisldcVallejo" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="card contact-card h-100 border-0 text-center p-4">
                <i className="bi bi-github display-4 text-primary-custom mb-3"></i>
                <h5 className="text-white">GitHub</h5>
                <p className="text-white-50 small">{texts.cards.github}</p>
              </div>
            </a>
          </div>

          {/* TELÉFONO */}
          <div className="col-md-3 col-sm-6">
            <a href="tel:+34666187778" className="text-decoration-none">
              <div className="card contact-card h-100 border-0 text-center p-4">
                <i className="bi bi-whatsapp display-4 text-primary-custom mb-3"></i>
                <h5 className="text-white">Teléfono</h5>
                <p className="text-white-50 small">{texts.cards.phone}</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};