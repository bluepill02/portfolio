import { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import { fetchRepos } from '../services/github';
import { projectData } from '../data/projectData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RepoGrid = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headerRef, headerVisible] = useScrollReveal();

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchRepos();

        const targetRepos = ['chenn-ai', 'cost-smart', 'lingualeap'];
        const processedRepos = data
          .filter(repo => targetRepos.includes(repo.name))
          .map(repo => {
            const curated = projectData[repo.name];
            if (curated) {
              return {
                ...repo,
                description: curated.description,
                customName: curated.customName,
                features: curated.features,
                techStack: curated.techStack,
                priority: curated.priority,
                isCurated: true,
              };
            }
            return { ...repo, priority: 99 };
          })
          .sort((a, b) => a.priority - b.priority);

        setRepos(processedRepos);
      } catch (error) {
        console.error('Failed to fetch repos', error);
        // Fallback: show curated data even if API fails
        const fallback = Object.entries(projectData).map(([name, data]) => ({
          id: name,
          name,
          html_url: `https://github.com/bluepill02/${name}`,
          ...data,
          priority: data.priority,
        }));
        setRepos(fallback.sort((a, b) => a.priority - b.priority));
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''}`}>
          <span className="section-label">// selected work</span>
          <h2 className="section-title">Flagship Projects</h2>
          <p className="section-subtitle">
            Real products built with modern stacks. From learning platforms to AI marketplaces.
          </p>
        </div>

        {loading ? (
          <div className="project-loading">
            <span>Loading projects from GitHub...</span>
          </div>
        ) : (
          <div className="projects-grid">
            {repos.map((repo, i) => (
              <ProjectReveal key={repo.id || i} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectReveal = ({ repo, index }) => {
  const [ref, isVisible] = useScrollReveal();
  const delay = Math.min(index, 3);
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay + 1} ${isVisible ? 'revealed' : ''}`}>
      <RepoCard repo={repo} />
    </div>
  );
};

export default RepoGrid;
