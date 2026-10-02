import { describe, expect, it } from 'vitest';
import { DEMO_USERS, ensureDemoUsers } from './auth';

function createMemoryStorage() {
  const store = new Map<string, string>();

  return {
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
    removeItem(key: string) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  } as Storage;
}

describe('ensureDemoUsers', () => {
  it('creates the default account set for the three portals when no user exists', () => {
    const storage = createMemoryStorage();

    ensureDemoUsers(storage);

    const stored = JSON.parse(storage.getItem('terracotta_users') ?? '[]');
    const ids = stored.map((user: any) => `${user.role}:${user.id}`);

    expect(ids).toEqual(expect.arrayContaining(DEMO_USERS.map((user) => `${user.role}:${user.id}`)));
  });

  it('does not duplicate demo users on repeated calls', () => {
    const storage = createMemoryStorage();

    ensureDemoUsers(storage);
    ensureDemoUsers(storage);

    const stored = JSON.parse(storage.getItem('terracotta_users') ?? '[]');
    const demoUsers = stored.filter((user: any) => DEMO_USERS.some((demo) => demo.id === user.id && demo.role === user.role));

    expect(demoUsers).toHaveLength(DEMO_USERS.length);
  });
});
