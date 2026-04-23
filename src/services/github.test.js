import { describe, it, mock, afterEach } from 'node:test';
import assert from 'node:assert';
import { fetchProfile, fetchRepos } from './github.js';

describe('GitHub Service', () => {
    const originalFetch = global.fetch;

    afterEach(() => {
        global.fetch = originalFetch;
        mock.restoreAll();
    });

    it('fetchProfile returns data on successful fetch', async () => {
        const mockData = { name: 'Test User', bio: 'Developer' };
        global.fetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        );

        const result = await fetchProfile();
        assert.deepStrictEqual(result, mockData);
    });

    it('fetchProfile returns null and logs error when response is not ok', async () => {
        const consoleMock = mock.method(console, 'error', () => {});
        global.fetch = mock.fn(() =>
            Promise.resolve({
                ok: false,
            })
        );

        const result = await fetchProfile();
        assert.strictEqual(result, null);
        assert.strictEqual(consoleMock.mock.calls.length, 1);
        assert.ok(consoleMock.mock.calls[0].arguments[0] instanceof Error);
        assert.strictEqual(consoleMock.mock.calls[0].arguments[0].message, 'Failed to fetch profile');
    });

    it('fetchProfile returns null and logs error on network failure', async () => {
        const consoleMock = mock.method(console, 'error', () => {});
        const networkError = new Error('Network failure');
        global.fetch = mock.fn(() => Promise.reject(networkError));

        const result = await fetchProfile();
        assert.strictEqual(result, null);
        assert.strictEqual(consoleMock.mock.calls.length, 1);
        assert.strictEqual(consoleMock.mock.calls[0].arguments[0], networkError);
    });

    it('fetchRepos returns data on successful fetch', async () => {
        const mockRepos = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
        global.fetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockRepos),
            })
        );

        const result = await fetchRepos();
        assert.deepStrictEqual(result, mockRepos);
    });

    it('fetchRepos returns empty array and logs error when response is not ok', async () => {
        const consoleMock = mock.method(console, 'error', () => {});
        global.fetch = mock.fn(() =>
            Promise.resolve({
                ok: false,
            })
        );

        const result = await fetchRepos();
        assert.deepStrictEqual(result, []);
        assert.strictEqual(consoleMock.mock.calls.length, 1);
        assert.ok(consoleMock.mock.calls[0].arguments[0] instanceof Error);
        assert.strictEqual(consoleMock.mock.calls[0].arguments[0].message, 'Failed to fetch repos');
    });

    it('fetchRepos returns empty array and logs error on network failure', async () => {
        const consoleMock = mock.method(console, 'error', () => {});
        const networkError = new Error('Network failure');
        global.fetch = mock.fn(() => Promise.reject(networkError));

        const result = await fetchRepos();
        assert.deepStrictEqual(result, []);
        assert.strictEqual(consoleMock.mock.calls.length, 1);
        assert.strictEqual(consoleMock.mock.calls[0].arguments[0], networkError);
    });
});
