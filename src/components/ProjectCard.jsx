
export const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="col-md-4">
      <div className="card project-card h-100 border-0">
        <div className="card-img-wrapper">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body p-4">
          <h5 className="card-title fw-bold text-white">{title}</h5>
          <p className="card-text text-white-50 small">{description}</p>
          <div className="mt-3">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary-custom me-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};