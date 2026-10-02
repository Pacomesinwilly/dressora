export type Role = 'agent' | 'client' | 'guest';

export interface DemoUser {
  id: string;
  password: string;
  fullName: string;
  role: Role;
  createdAt: string;
}

export const DEMO_USERS: DemoUser[] = [
  {
    id: 'agent@terracotta.fr',
    password: 'agent123',
    fullName: 'Léonel Togni',
    role: 'agent',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'proprio@terracotta.fr',
    password: 'proprio123',
    fullName: 'Claire Moreau',
    role: 'client',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'resident@terracotta.fr',
    password: 'resident123',
    fullName: 'Sofia Martin',
    role: 'guest',
    createdAt: new Date().toISOString(),
  },
];

export function ensureDemoUsers(storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) {
    return;
  }

  const usersKey = 'terracotta_users';
  const raw = storage.getItem(usersKey);
  const currentUsers = raw ? JSON.parse(raw) : [];

  const existingByRoleAndId = new Map<string, unknown>();
  currentUsers.forEach((user: DemoUser) => {
    existingByRoleAndId.set(`${user.role}:${user.id}`, user);
  });

  let mutated = false;

  DEMO_USERS.forEach((user) => {
    const key = `${user.role}:${user.id}`;
    if (!existingByRoleAndId.has(key)) {
      currentUsers.push(user);
      existingByRoleAndId.set(key, user);
      mutated = true;
    }
  });

  if (mutated) {
    storage.setItem(usersKey, JSON.stringify(currentUsers));
  }
}
