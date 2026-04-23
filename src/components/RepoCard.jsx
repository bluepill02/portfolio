const RepoCard = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-header">
        <h3 className="project-name">
          {repo.customName || repo.name}
        </h3>
        <span className="project-arrow">↗</span>
      </div>

      <p className="project-description">
        {repo.description || 'No description available but code checks out.'}
      </p>

      {repo.features && (
        <div className="project-features">
          {repo.features.map((feature) => (
            <span key={feature} className="project-feature-tag">
              {feature}
            </span>
          ))}
        </div>
      )}

      <div className="project-footer">
        {repo.techStack && (
          <span className="project-tech-indicator">
            <span className="tech-dot"></span>
            {repo.techStack[0]}
          </span>
        )}
        {!repo.techStack && repo.language && (
          <span className="project-tech-indicator">
            <span className="tech-dot"></span>
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
        {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
      </div>
    </a>
  );
};

export default RepoCard;
