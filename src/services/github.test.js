import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert';
import { mock } from 'node:test';
import { fetchProfile, fetchRepos, _clearCache } from './github.js';

describe('github service', () => {
    beforeEach(() => {
        _clearCache();
        mock.method(console, 'error', () => {}); // Suppress console.error in tests
    });

    test('fetchProfile caches results', async () => {
        const mockData = { name: 'Test User' };
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData)
            })
        );
        global.fetch = mockFetch;

        // First call
        const data1 = await fetchProfile();
        assert.deepStrictEqual(data1, mockData);
        assert.strictEqual(mockFetch.mock.callCount(), 1);

        // Second call
        const data2 = await fetchProfile();
        assert.deepStrictEqual(data2, mockData);
        assert.strictEqual(mockFetch.mock.callCount(), 1, 'Should use cache for second call');
    });

    test('fetchRepos caches results', async () => {
        const mockData = [{ name: 'repo1' }];
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData)
            })
        );
        global.fetch = mockFetch;

        // First call
        const data1 = await fetchRepos();
        assert.deepStrictEqual(data1, mockData);
        assert.strictEqual(mockFetch.mock.callCount(), 1);

        // Second call
        const data2 = await fetchRepos();
        assert.deepStrictEqual(data2, mockData);
        assert.strictEqual(mockFetch.mock.callCount(), 1, 'Should use cache for second call');
    });

    test('fetchProfile handles errors and returns null', async () => {
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: false
            })
        );
        global.fetch = mockFetch;

        const data = await fetchProfile();
        assert.strictEqual(data, null);
        assert.strictEqual(mockFetch.mock.callCount(), 1);
    });

    test('fetchRepos handles errors and returns empty array', async () => {
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: false
            })
        );
        global.fetch = mockFetch;

        const data = await fetchRepos();
        assert.deepStrictEqual(data, []);
        assert.strictEqual(mockFetch.mock.callCount(), 1);
    });
});
