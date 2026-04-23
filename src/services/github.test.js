import { afterEach, describe, mock, test } from 'node:test';
import assert from 'node:assert';
import { _clearCache, fetchProfile, fetchRepos } from './github.js';

describe('github service', () => {
    afterEach(() => {
        mock.restoreAll();
        _clearCache();
    });

    test('fetchProfile returns profile data', async () => {
        const profile = { name: 'Test User' };
        globalThis.fetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(profile),
            })
        );

        const result = await fetchProfile();

        assert.deepStrictEqual(result, profile);
    });

    test('fetchProfile returns null and logs sanitized message on failure', async () => {
        globalThis.fetch = mock.fn(() => Promise.resolve({ ok: false, status: 500 }));
        const consoleError = mock.method(console, 'error', () => {});

        const result = await fetchProfile();

        assert.strictEqual(result, null);
        assert.strictEqual(consoleError.mock.calls[0].arguments[0], 'Error fetching profile');
    });

    test('fetchRepos caches successful results', async () => {
        const repos = [{ name: 'repo-a' }];
        globalThis.fetch = mock.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(repos),
            })
        );

        const first = await fetchRepos();
        const second = await fetchRepos();

        assert.deepStrictEqual(first, repos);
        assert.deepStrictEqual(second, repos);
        assert.strictEqual(globalThis.fetch.mock.callCount(), 1);
    });

    test('fetchRepos returns [] and logs sanitized message on failure', async () => {
        globalThis.fetch = mock.fn(() => Promise.reject(new Error('network details')));
        const consoleError = mock.method(console, 'error', () => {});

        const result = await fetchRepos();

        assert.deepStrictEqual(result, []);
        assert.strictEqual(consoleError.mock.calls[0].arguments[0], 'Error fetching repos');
        assert.strictEqual(consoleError.mock.calls[0].arguments.length, 1);
    });
});
