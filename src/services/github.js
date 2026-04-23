const BASE_URL = 'https://api.github.com/users/bluepill02';

const cache = new Map();

export const _clearCache = () => cache.clear();

const fetchWithCache = async (url, fallbackValue, sanitizedMessage) => {
    if (cache.has(url)) {
        return cache.get(url);
    }

    const request = (async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed request: ${response.status}`);
        return response.json();
    })();

    cache.set(url, request);

    try {
        const data = await request;
        cache.set(url, data);
        return data;
    } catch (error) {
        cache.delete(url);
        console.error(sanitizedMessage);
        return fallbackValue;
    }
};

export const fetchProfile = async () => fetchWithCache(BASE_URL, null, 'Error fetching profile');

export const fetchRepos = async () => {
    return fetchWithCache(
        `${BASE_URL}/repos?sort=updated&direction=desc&per_page=100`,
        [],
        'Error fetching repos'
    );
};
