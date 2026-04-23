import { test, mock, describe, afterEach } from 'node:test';
import assert from 'node:assert';
import { fetchProfile, fetchRepos } from './github.js';

describe('github service', () => {
    afterEach(() => {
        mock.restoreAll();
    });

    describe('fetchProfile', () => {
        test('returns data on success', async () => {
            const mockData = { name: 'Test User' };
            global.fetch = mock.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockData),
                })
            );

            const result = await fetchProfile();
            assert.deepStrictEqual(result, mockData);
        });

        test('returns null and logs sanitized error on failure', async () => {
            global.fetch = mock.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );
            const consoleErrorMock = mock.method(console, 'error', () => {});

            const result = await fetchProfile();

            assert.strictEqual(result, null);
            assert.strictEqual(consoleErrorMock.mock.calls.length, 1);
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments[0], 'Error fetching profile');
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments.length, 1);
        });

        test('returns null and logs sanitized error on network error', async () => {
            global.fetch = mock.fn(() => Promise.reject(new Error('Network error')));
            const consoleErrorMock = mock.method(console, 'error', () => {});

            const result = await fetchProfile();

            assert.strictEqual(result, null);
            assert.strictEqual(consoleErrorMock.mock.calls.length, 1);
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments[0], 'Error fetching profile');
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments.length, 1);
        });
    });

    describe('fetchRepos', () => {
        test('returns data on success', async () => {
            const mockData = [{ name: 'repo1' }];
            global.fetch = mock.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockData),
                })
            );

            const result = await fetchRepos();
            assert.deepStrictEqual(result, mockData);
        });

        test('returns empty array and logs sanitized error on failure', async () => {
            global.fetch = mock.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );
            const consoleErrorMock = mock.method(console, 'error', () => {});

            const result = await fetchRepos();

            assert.deepStrictEqual(result, []);
            assert.strictEqual(consoleErrorMock.mock.calls.length, 1);
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments[0], 'Error fetching repos');
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments.length, 1);
        });

        test('returns empty array and logs sanitized error on network error', async () => {
            global.fetch = mock.fn(() => Promise.reject(new Error('Network error')));
            const consoleErrorMock = mock.method(console, 'error', () => {});

            const result = await fetchRepos();

            assert.deepStrictEqual(result, []);
            assert.strictEqual(consoleErrorMock.mock.calls.length, 1);
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments[0], 'Error fetching repos');
            assert.strictEqual(consoleErrorMock.mock.calls[0].arguments.length, 1);
        });
    });
});
