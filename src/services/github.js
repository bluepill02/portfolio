const BASE_URL = 'https://api.github.com/users/bluepill02';

let cache = {};

// For testing purposes
export const _clearCache = () => {
    cache = {};
};

const fetchWithCache = async (url, fallbackValue, errorLabel) => {
    if (!Object.hasOwn(cache, url)) {
        cache[url] = (async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${errorLabel}: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })();
    }

    try {
        const data = await cache[url];
        cache[url] = data;
        return data;
    } catch (error) {
        delete cache[url];
        console.error(error);
        return fallbackValue;
    }
};

export const fetchProfile = async () => fetchWithCache(BASE_URL, null, 'profile');

export const fetchRepos = async () => {
    const url = `${BASE_URL}/repos?sort=updated&direction=desc&per_page=100`;
    return fetchWithCache(url, [], 'repos');
};
