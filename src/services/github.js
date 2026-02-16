const BASE_URL = 'https://api.github.com/users/bluepill02';

export const fetchProfile = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch profile');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchRepos = async () => {
    try {
        const response = await fetch(`${BASE_URL}/repos?sort=updated&direction=desc&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
