const BASE_URL = 'https://api.github.com/users/bluepill02';

let cache = {};

// For testing purposes
export const _clearCache = () => {
    cache = {};
};

export const fetchProfile = async () => {
    if (cache[BASE_URL]) {
        return cache[BASE_URL];
    }
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        cache[BASE_URL] = data;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchRepos = async () => {
    const url = `${BASE_URL}/repos?sort=updated&direction=desc&per_page=100`;
    if (cache[url]) {
        return cache[url];
    }
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        cache[url] = data;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
