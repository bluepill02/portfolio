import test from 'node:test';
import assert from 'node:assert';
import { fetchProfile, fetchRepos } from './github.js';

test('fetchProfile logs generic error on failure', async (t) => {
    const originalFetch = global.fetch;
    const originalConsoleError = console.error;
    let loggedError;

    console.error = (err) => {
        loggedError = err;
    };

    global.fetch = () => Promise.reject(new Error('Sensitive Network Error'));

    try {
        await fetchProfile();
        assert.strictEqual(loggedError, 'Error fetching profile');
    } finally {
        global.fetch = originalFetch;
        console.error = originalConsoleError;
    }
});

test('fetchRepos logs generic error on failure', async (t) => {
    const originalFetch = global.fetch;
    const originalConsoleError = console.error;
    let loggedError;

    console.error = (err) => {
        loggedError = err;
    };

    global.fetch = () => Promise.reject(new Error('Sensitive Network Error'));

    try {
        await fetchRepos();
        assert.strictEqual(loggedError, 'Error fetching repositories');
    } finally {
        global.fetch = originalFetch;
        console.error = originalConsoleError;
    }
});
