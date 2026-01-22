export const Hero = ({ texts }) => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center justify-content-center pt-5">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <h4 className="text-primary-custom mb-3">{texts.greeting}</h4>
            <h1 className="display-3 fw-bold mb-3">Christian Vallejo</h1>
            <h2 className="h4 text-secondary mb-4">{texts.role}</h2>
            <p className="lead text-white-50 mb-5">{texts.description}</p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-outline-light btn-lg">{texts.cta}</a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center position-relative">
            <img src="/img/Profile.png" className="img-fluid profile-img" alt="Christian" />
          </div>
        </div>
      </div>
    </section>
  );
};