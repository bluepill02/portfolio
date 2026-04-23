import { test, mock } from 'node:test';
import assert from 'node:assert';
import { fetchProfile } from './github.js';

test('fetchProfile returns empty object on error', async (t) => {
    // Mock global fetch to throw an error
    const originalFetch = global.fetch;
    global.fetch = () => Promise.reject(new Error('Network error'));

    try {
        const result = await fetchProfile();
        assert.deepStrictEqual(result, {});
    } finally {
        // Restore global fetch
        global.fetch = originalFetch;
    }
});
