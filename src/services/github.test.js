import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { fetchRepos, fetchProfile } from './github.js';

describe('GitHub Service', () => {
  const originalFetch = global.fetch;
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = () => {};
  });

  afterEach(() => {
    global.fetch = originalFetch;
    console.error = originalConsoleError;
  });

  describe('fetchRepos', () => {
    test('should return repos on successful fetch', async () => {
      const mockRepos = [{ name: 'repo1' }, { name: 'repo2' }];
      global.fetch = async (url) => {
        assert.ok(url.includes('/repos'));
        return {
          ok: true,
          json: async () => mockRepos
        };
      };

      const repos = await fetchRepos();
      assert.deepStrictEqual(repos, mockRepos);
    });

    test('should return empty array when response is not ok', async () => {
      global.fetch = async (url) => {
        return {
          ok: false,
          status: 404
        };
      };

      const repos = await fetchRepos();
      assert.deepStrictEqual(repos, []);
    });

    test('should return empty array when fetch throws', async () => {
      global.fetch = async (url) => {
        throw new Error('Network error');
      };

      const repos = await fetchRepos();
      assert.deepStrictEqual(repos, []);
    });
  });

  describe('fetchProfile', () => {
    test('should return profile on successful fetch', async () => {
      const mockProfile = { name: 'User', bio: 'Bio' };
      global.fetch = async (url) => {
        return {
          ok: true,
          json: async () => mockProfile
        };
      };

      const profile = await fetchProfile();
      assert.deepStrictEqual(profile, mockProfile);
    });

    test('should return null when response is not ok', async () => {
      global.fetch = async (url) => {
        return {
          ok: false,
          status: 404
        };
      };

      const profile = await fetchProfile();
      assert.strictEqual(profile, null);
    });

    test('should return null when fetch throws', async () => {
      global.fetch = async (url) => {
        throw new Error('Network error');
      };

      const profile = await fetchProfile();
      assert.strictEqual(profile, null);
    });
  });
});
