import express from 'express';
import cors from 'cors';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'database.json');
const distPath = path.join(__dirname, '../dist');

app.use(cors());
app.use(express.json());

if (!existsSync(DB_PATH)) {
  writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
}

function readDB() {
  const data = readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

function writeDB(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'terracotta-reserve' });
});

app.post('/api/auth/register', (req, res) => {
  const { id, password, fullName, role } = req.body;

  if (!id || !password || !fullName || !role) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const db = readDB();
  const exists = db.users.find((u) => u.id === id && u.role === role);

  if (exists) {
    return res.status(409).json({ error: 'Cet identifiant est déjà utilisé pour ce rôle.' });
  }

  const newUser = { id, password, fullName, role, createdAt: new Date().toISOString() };
  db.users.push(newUser);
  writeDB(db);

  return res.status(201).json({ message: 'Compte créé avec succès.', user: { id, fullName, role } });
});

app.post('/api/auth/login', (req, res) => {
  const { id, password, role } = req.body;

  if (!id || !password || !role) {
    return res.status(400).json({ error: 'Identifiant et mot de passe requis.' });
  }

  const db = readDB();
  const user = db.users.find((u) => u.id === id && u.password === password && u.role === role);

  if (!user) {
    return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect.' });
  }

  return res.status(200).json({
    message: 'Connexion réussie.',
    user: { id: user.id, fullName: user.fullName, role: user.role },
  });
});

app.get('/api/properties/public', (_req, res) => {
  const listings = [
    {
      _id: 'prop-demo-1',
      title: 'Villa Terracotta Reserve',
      description: 'Villa premium avec vue panoramique et piscine.',
      address: '12 Boulevard de la Croisette',
      city: 'Cannes',
      rentAmount: 2450000,
      photos: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
      status: 'published',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'prop-demo-2',
      title: 'The Azure Penthouse',
      description: 'Penthouse luxueux, vue 360° et terrasse privée.',
      address: '42 West Village Court',
      city: 'New York',
      rentAmount: 4250000,
      photos: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'],
      status: 'published',
      createdAt: new Date().toISOString(),
    },
  ];

  return res.json(listings);
});

if (existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});