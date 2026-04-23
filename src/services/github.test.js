import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { mock } from 'node:test';
import { fetchProfile, fetchRepos, _clearCache } from './github.js';

describe('github service', () => {
    let consoleErrorMock;

    beforeEach(() => {
        _clearCache();
        consoleErrorMock = mock.method(console, 'error', () => {});
    });

    afterEach(() => {
        consoleErrorMock.mock.restore();
    });

    test('fetchProfile caches results', async () => {
        const mockData = { name: 'Test User' };
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData)
            })
        );
        globalThis.fetch = mockFetch;

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
        globalThis.fetch = mockFetch;

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
        globalThis.fetch = mockFetch;

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
        globalThis.fetch = mockFetch;

        const data = await fetchRepos();
        assert.deepStrictEqual(data, []);
        assert.strictEqual(mockFetch.mock.callCount(), 1);
    });

    test('fetchProfile caches in-flight requests for concurrent callers', async () => {
        let resolveFetch;
        const mockFetch = mock.fn(
            () =>
                new Promise((resolve) => {
                    resolveFetch = resolve;
                })
        );
        globalThis.fetch = mockFetch;

        const firstCall = fetchProfile();
        const secondCall = fetchProfile();
        assert.strictEqual(mockFetch.mock.callCount(), 1, 'Should reuse in-flight request');

        resolveFetch({
            ok: true,
            json: () => Promise.resolve({ name: 'Concurrent User' })
        });

        const [firstResult, secondResult] = await Promise.all([firstCall, secondCall]);
        assert.deepStrictEqual(firstResult, { name: 'Concurrent User' });
        assert.deepStrictEqual(secondResult, { name: 'Concurrent User' });
    });

    test('fetchProfile caches falsy response values', async () => {
        const mockFetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(null)
            })
        );
        globalThis.fetch = mockFetch;

        const data1 = await fetchProfile();
        const data2 = await fetchProfile();

        assert.strictEqual(data1, null);
        assert.strictEqual(data2, null);
        assert.strictEqual(mockFetch.mock.callCount(), 1, 'Should cache null response');
    });

    test('fetchProfile returns fallback for concurrent rejected requests', async () => {
        let resolveFetch;
        const mockFetch = mock.fn(
            () =>
                new Promise((resolve) => {
                    resolveFetch = resolve;
                })
        );
        globalThis.fetch = mockFetch;

        const firstCall = fetchProfile();
        const secondCall = fetchProfile();
        assert.strictEqual(mockFetch.mock.callCount(), 1, 'Should reuse in-flight request');

        resolveFetch({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error'
        });

        const [firstResult, secondResult] = await Promise.all([firstCall, secondCall]);
        assert.strictEqual(firstResult, null);
        assert.strictEqual(secondResult, null);
    });
});
