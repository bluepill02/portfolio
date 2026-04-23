const BASE_URL = 'https://api.github.com/users/bluepill02';

let cache = {};

// For testing purposes
export const _clearCache = () => {
    cache = {};
};

export const fetchProfile = async () => {
    if (Object.hasOwn(cache, BASE_URL)) {
        return cache[BASE_URL];
    }

    cache[BASE_URL] = (async () => {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch profile');
        return response.json();
    })();

    try {
        const data = await cache[BASE_URL];
        cache[BASE_URL] = data;
        return data;
    } catch (error) {
        delete cache[BASE_URL];
        console.error(error);
        return null;
    }
};

export const fetchRepos = async () => {
    const url = `${BASE_URL}/repos?sort=updated&direction=desc&per_page=100`;
    if (Object.hasOwn(cache, url)) {
        return cache[url];
    }

    cache[url] = (async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch repos');
        return response.json();
    })();

    try {
        const data = await cache[url];
        cache[url] = data;
        return data;
    } catch (error) {
        delete cache[url];
        console.error(error);
        return [];
    }
};
