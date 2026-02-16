import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import { fetchRepos } from '../services/github';
import { projectData } from '../data/projectData';

const RepoGrid = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRepos = async () => {
            try {
                const data = await fetchRepos();

                const processedRepos = data
                    .filter(repo => repo.name !== 'CHENN-AI')
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
                                isCurated: true
                            };
                        }
                        return { ...repo, priority: 99 };
                    })
                    .sort((a, b) => a.priority - b.priority);

                setRepos(processedRepos);
            } catch (error) {
                console.error("Failed to fetch repos", error);
            } finally {
                setLoading(false);
            }
        };

        loadRepos();
    }, []);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading specific projects...</div>;

    return (
        <section style={{ padding: '2rem 0' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
                Flagship Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {repos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
};

export default RepoGrid;
